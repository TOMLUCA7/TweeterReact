import { useState, useEffect } from 'react'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Loader } from '@mantine/core';

import { getTweets } from './utils/api'
import { Route, Routes } from 'react-router';
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

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
      <NavBar />
      {error && <h4 style={{color: 'red'}}>Error: {error.message}</h4>}
      {loading ? (
        <Loader color="blue" size="xl" />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage tweets={sortedTweetsByTime} createTweet={createTweet} />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      )}
    </>
  )
}

export default App
