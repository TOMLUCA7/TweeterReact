import { useState } from 'react'

import './App.css'
import CreateTweet from './components/CreateTweet/CreateTweet'
import TweetList from './components/TweetList/TweetList'

function App() {
  const [tweets, setTweets] = useState([])

  const createTweet = (tweet) => {
    setTweets([...tweets, {tweet}])
  }



  return (
    <>
      <CreateTweet createTweet={createTweet}/>
      <TweetList/>
    </>
  )
}

export default App
