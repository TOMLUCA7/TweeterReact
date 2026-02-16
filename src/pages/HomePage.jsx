import CreateTweet from "../components/CreateTweet/CreateTweet";
import TweetList from "../components/TweetList/TweetList";
import NavBar from "../components/NavBar/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <CreateTweet />
      <TweetList />
    </>
  );
};

export default HomePage;