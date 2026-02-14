import { Card, Text, Badge, Group } from "@mantine/core";
import { useContext } from "react";
import { TweetsContext } from "../../utils/useContext";

const TweetList = () => {
  const { sortedTweetsByTime } = useContext(TweetsContext);
  return (
    <>
      {sortedTweetsByTime.map((tweet) => (
        <Card
          key={tweet.id}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          style={{ width: "50%", marginBottom: "30px" }}
        >
          <Group justify="space-between" mt="md" mb="xs">
            <Text color="blue" fw={700}>
              {tweet.userName}
            </Text>
            <Badge color="green" variant="light">
              {tweet.date}
            </Badge>
          </Group>

          <Text size="sm" c="dimmed">
            {tweet.content}
          </Text>
        </Card>
      ))}
    </>
  );
};

export default TweetList;
