import { createBrowserClient } from '@supabase/ssr'

export type Bookmark = {
  id: string
  user_id: string
  url: string
  title: string
  created_at: string
}

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)