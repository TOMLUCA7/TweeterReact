import { useState } from 'react'

import './App.css'
import CreateTweet from './components/CreateTweet/CreateTweet'
import TweetList from './components/TweetList/TweetList'

function App() {
  const [tweets, setTweets] = useState([])

  const createTweet = (tweet) => {
    const newTweet = {
      id: Date.now(), 
      content: tweet,
      userName: "Yossi_the_King", 
      date: new Date().toISOString(), 
    };
    setTweets([...tweets, newTweet])
  }



  return (
    <>
      <CreateTweet createTweet={createTweet}/>
      <TweetList tweets={tweets}/>
    </>
  )
}

export default App
