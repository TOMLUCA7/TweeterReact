import CreateTweet from "../components/CreateTweet/CreateTweet";
import TweetList from "../components/TweetList/TweetList";
import NavBar from "../components/NavBar/NavBar";
import { Container, Stack } from "@mantine/core";

const HomePage = () => {
  return (
    <div className="app-page">
      <NavBar />
      <Container size="xl" px={{ base: "md", sm: "lg" }} py="xl">
        <Stack gap="xl">
          <CreateTweet />
          <TweetList />
        </Stack>
      </Container>
    </div>
  );
};

export default HomePage;
