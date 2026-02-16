import { createContext, useState, useEffect } from "react";
import { getTweets } from "./api";
import { supabase } from "./supabaseClient";

export const TweetsContext = createContext();

export const TweetsProvider = ({ children }) => {
  const [serverTweets, setServerTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState("");

  const fetchTweets = async (isInitial = false) => {
    if (isInitial) setLoading(true);
    try {
      const tweets = await getTweets();
      setServerTweets(tweets);
    } catch (error) {
      setError(error);
    } finally {
      if (isInitial) setLoading(false);
    }
  };

  const createTweet = async (tweetContent) => {
    try {
      const newTweet = {
        content: tweetContent,
        userName: userName,
      };

      const { data, error } = await supabase
        .from("tweets")
        .insert([newTweet])
        .select();

      if (error) {
        console.error("Error creating tweet:", error);
        setError(error);
      } else if (data) {
        setServerTweets((prevTweets) => [data[0], ...prevTweets]);
      }
    } catch (err) {
      console.error("Unexpected error creating tweet:", err);
      setError(err);
    }
  };



  useEffect(() => {
    fetchTweets(true);

    const getIntervalTweets = setInterval(() => {
      fetchTweets(false);
    }, 10000);

    return () => clearInterval(getIntervalTweets);
  }, []);

  const sortedTweetsByTime = [...serverTweets].sort(
    (a, b) => new Date(b.created_at || b.date || 0) - new Date(a.created_at || a.date || 0),
  );

  return (
    <TweetsContext.Provider
      value={{
        sortedTweetsByTime,
        serverTweets,
        loading,
        error,
        userName,
        createTweet,
        setUserName,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};
