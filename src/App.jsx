import { useState, useEffect } from 'react'

import './App.css'
import CreateTweet from './components/CreateTweet/CreateTweet'
import TweetList from './components/TweetList/TweetList'

import { getTweets } from './utils/api'

function App() {
  const [tweets, setTweets] = useState([])

  const createTweet = (tweet) => {
    const newTweet = {
      id: Date.now(), 
      content: tweet,
      userName: "Yossi_the_King", // tweet.userName 
      date: new Date().toISOString(), 
    };
    setTweets([...tweets, newTweet])
  }

  useEffect(() => {
    const fetchTweets = async () => {
      const tweets = await getTweets();
      setTweets(tweets);
    };
    fetchTweets();
  }, []);



  return (
    <>
      <CreateTweet createTweet={createTweet}/>
      <TweetList tweets={tweets}/>
    </>
  )
}

export default App
