import CreateTweet from "../components/CreateTweet/CreateTweet";
import TweetList from "../components/TweetList/TweetList";

const HomePage = ({ tweets, createTweet }) => {
  return (
    <>
      <CreateTweet createTweet={createTweet} />
      <TweetList tweets={tweets} />
    </>
  );
};

export default HomePage;