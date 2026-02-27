import { useState } from "react";

import { Textarea, Button, Paper, Stack, Group, Title, Text } from "@mantine/core";
import { useContext } from "react";
import { TweetsContext } from "../../utils/useContext";

const CreateTweet = () => {
  const { createTweet } = useContext(TweetsContext);
  const [tweet, setTweet] = useState("");

  const isTooLong = tweet.length > 140;

  const addTweet = () => {
    if (!tweet) return alert("Please enter a tweet");
    createTweet(tweet);
    setTweet("");
  };

  return (
    <Paper withBorder shadow="sm" radius="lg" p={{ base: "lg", sm: "xl" }}>
      <Stack gap="md">
        <div>
          <Title order={3}>Create Tweet</Title>
          <Text c="dimmed" size="sm" mt={2}>
            Share an update with your followers.
          </Text>
        </div>

        <Textarea
          label="Tweet"
          placeholder="Enter your tweet"
          error={
            isTooLong && "The tweet is too long can't be more than 140 characters"
          }
          autosize
          minRows={4}
          size="md"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />

        <Group justify="flex-end">
          <Button
            onClick={addTweet}
            variant="filled"
            color="blue"
            disabled={isTooLong}
            size="md"
            w={{ base: "100%", sm: "auto" }}
          >
            Tweet
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
};

export default CreateTweet;
