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
      console.log("Tweets from server:", tweets);
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
        useName: userName,
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
    (a, b) =>
      new Date(b.created_at || b.date || 0) -
      new Date(a.created_at || a.date || 0),
  );

  const onLogin = async (email, password) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setUserName(data.user.email);
      localStorage.setItem("userName", data.user.email);
    } catch (error) {
      setError(error.message);
      alert("Login failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setUserName(session.user.email);
      }
    };
    getSession();
  }, []);

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
        onLogin,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};
