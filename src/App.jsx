import { useState } from 'react'

import './App.css'
import CreateTweet from './components/CreateTweet/CreateTweet'
import TweetList from './components/TweetList/TweetList'

function App() {
  

  return (
    <>
      <CreateTweet/>
      <TweetList/>
    </>
  )
}

export default App
