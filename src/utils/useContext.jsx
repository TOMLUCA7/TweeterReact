import { createContext, useState, useEffect } from "react";
import { getTweets } from "./api";

export const TweetsContext = createContext();

export const TweetsProvider = ({ children }) => {
  const savedTweets = localStorage.getItem("tweets");
  const [userTweets, setUserTweets] = useState(
    savedTweets ? JSON.parse(savedTweets) : [],
  );
  const [serverTweets, setServerTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  const createTweet = (tweet) => {
    const newTweet = {
      id: Date.now(),
      content: tweet,
      userName: userName,
      date: new Date().toISOString(),
    };
    setUserTweets([...userTweets, newTweet]);
  };

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(userTweets));
  }, [userTweets]);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  useEffect(() => {
    const fetchTweets = async (isInitial) => {
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

    fetchTweets(true);

    const getIntervalTweets = setInterval(() => {
      fetchTweets(false);
    }, 10000);

    return () => clearInterval(getIntervalTweets);
  }, []);

  const allTweets = [...userTweets, ...serverTweets];
  const sortedTweetsByTime = allTweets.sort(
    (a, b) => new Date(b.date) - new Date(a.date),
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
