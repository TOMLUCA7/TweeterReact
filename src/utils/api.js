import { supabase } from "./supabaseClient";

export const getTweets = async () => {
  try {
    const { data, error } = await supabase
      .from("tweets")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching tweets:", error);
    return [];
  }
};
