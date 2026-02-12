import { useState, useEffect } from 'react'

import './App.css'
import CreateTweet from './components/CreateTweet/CreateTweet'
import TweetList from './components/TweetList/TweetList'

import { getTweets } from './utils/api'

function App() {
  const [tweets, setTweets] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

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
      setLoading(true)
      try {
        const tweets = await getTweets();
        setTweets(tweets);
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    };
    fetchTweets();
  }, []);



  return (
    <>
      {error && <h4 style={{color: 'red'}}>Error: {error.message}</h4> }
      {loading ? <p>Loading...</p> : <CreateTweet createTweet={createTweet}/>}
      <TweetList tweets={tweets}/>
    </>
  )
}

export default App
