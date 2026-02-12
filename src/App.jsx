import { useState, useEffect } from 'react'

import './App.css'
import CreateTweet from './components/CreateTweet/CreateTweet'
import TweetList from './components/TweetList/TweetList'

import { getTweets } from './utils/api'

function App() {
  const savedTweets = localStorage.getItem('tweets');
  const [userTweets, setUserTweets] = useState(savedTweets ? JSON.parse(savedTweets) : []);
  const [serverTweets, setServerTweets] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const createTweet = (tweet) => {
    const newTweet = {
      id: Date.now(), 
      content: tweet,
      userName: "Yossi_the_King", // tweet.userName 
      date: new Date().toISOString(), 
    };
    setUserTweets([...userTweets, newTweet])
  }

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(userTweets));
  }, [userTweets]);

  useEffect(() => {
    const fetchTweets = async () => {
      setLoading(true)
      try {
        const tweets = await getTweets();
        setServerTweets(tweets);
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    };
    fetchTweets();
  }, []);

  const allTweets = [...userTweets, ...serverTweets];
  const sortedTweetsByTime = allTweets.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      {error && <h4 style={{color: 'red'}}>Error: {error.message}</h4>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <CreateTweet createTweet={createTweet} />
          <TweetList tweets={sortedTweetsByTime} />
        </>
      )}
    </>
  )
}

export default App
