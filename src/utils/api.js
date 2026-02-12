const API_URL =
  "https://agsaphbcwazvuenwsnca.supabase.co/rest/v1/Tweets?apikey=sb_publishable_3kTDeTVg6NfWrboe7oMopA_X-cuT_ih";

export const getTweets = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch tweets");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tweets:", error);
    return [];
  }
};
