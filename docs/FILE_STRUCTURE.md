
# Simple Project File Structure

```
app/
  api/                # Serverless API routes
    ai-psychiatrist+api.ts
  function/           # UI pages/screens
    ai-psychiatrist.tsx
    ...
  (tabs)/             # Tabbed navigation pages
    home.tsx
    discover.tsx
    profile.tsx
  _layout.tsx         # Root layout
  index.tsx           # Main entry page
```

- Place all API logic in `app/api/` as serverless functions.
- Place all UI pages/screens in `app/function/` or `app/(tabs)/`.
- Keep layouts and navigation in their respective files.
