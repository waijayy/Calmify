import axios from "axios";

const GEMINI_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-2.5-flash";
const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_KEY}`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message } = body;
    if (!message || typeof message !== "string") {
      return Response.json({ error: "Message is required and must be a string." }, { status: 400 });
    }

    const response = await axios.post(URL, {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `You are a professional psychiatrist. Respond with empathy, warmth, and understanding. \nPatient says: ${message}`,
            },
          ],
        },
      ],
    });
    const aiText = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini.";
    return Response.json({ reply: aiText });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Gemini API error:", error.response?.data || error.message);
      return Response.json({ error: error.response?.data || error.message }, { status: 500 });
    } else {
      console.error("Gemini API error:", String(error));
      return Response.json({ error: "Internal server error." }, { status: 500 });
    }
  }
}