# Smart Bookmark App

A real-time bookmark manager built with Next.js and Supabase.

## Live Demo
🔗 https://smart-bookmark-harzwezhf-jaivarshini-n-ss-projects.vercel.app/

## Features
- Google OAuth authentication
- Add, view, and delete bookmarks
- Real-time updates across multiple tabs
- Private bookmarks (users only see their own)

## Tech Stack
- **Frontend:** Next.js 14 (App Router), React, Tailwind CSS
- **Backend:** Supabase (Auth, Database, Realtime)
- **Deployment:** Vercel

## Problems I Encountered & Solutions

### Problem 1: Google OAuth Not Working Initially
**Issue:** After deploying to Vercel, Google sign-in was failing.
**Solution:** I forgot to add the Vercel URL to the authorized redirect URIs in Google Cloud Console. Once I added it, authentication worked perfectly.

### Problem 2: Realtime Updates Not Showing
**Issue:** When adding a bookmark in one tab, it didn't appear in another tab.
**Solution:** I needed to enable the publication in Supabase using `ALTER PUBLICATION supabase_realtime ADD TABLE bookmarks;` in the SQL editor.

### Problem 3: Environment Variables Not Loading
**Issue:** App was crashing on Vercel with "undefined" errors.
**Solution:** I had to manually add the environment variables in Vercel's project settings, not just in `.env.local`.

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/JaivarshiniNS/smart-bookmark-app
cd smart-bookmark-app
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` with your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Database Schema
```sql
CREATE TABLE bookmarks (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  url TEXT NOT NULL,
  title TEXT NOT NULL,
  created_at TIMESTAMP
);
```
## ⚠️ Deployment Note

On the first load, authentication or real-time updates may take a few seconds due to serverless cold starts on Vercel. If needed, refresh the page once.


Copyright (c) 2026 Jaivarshini N S