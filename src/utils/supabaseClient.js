import { createClient } from "@supabase/supabase-js";

// את הערכים האלה תמצא ב-Supabase Dashboard תחת Settings > API
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
