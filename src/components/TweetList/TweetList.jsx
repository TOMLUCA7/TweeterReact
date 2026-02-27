import { Card, Text, Badge, Group, Stack, Title, Paper } from "@mantine/core";
import { useContext } from "react";
import { TweetsContext } from "../../utils/useContext";

const TweetList = () => {
  const { sortedTweetsByTime } = useContext(TweetsContext);
  return (
    <Stack gap="md">
      <Title order={3}>Recent Tweets</Title>
      {sortedTweetsByTime.length === 0 ? (
        <Paper withBorder radius="lg" p="lg">
          <Text c="dimmed">No tweets yet</Text>
        </Paper>
      ) : (
        <Stack gap="md">
          {sortedTweetsByTime.map((tweet) => (
            <Card
              key={tweet.id}
              shadow="sm"
              padding="lg"
              radius="lg"
              withBorder
            >
              <Group justify="space-between" mb="xs">
                <Text c="blue.7" fw={700}>
                  {tweet.useName}
                </Text>

                <Badge color="green" variant="light">
                  {tweet.date || tweet.created_at}
                </Badge>
              </Group>

              <Text size="sm" c="dimmed">
                {tweet.content}
              </Text>
            </Card>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default TweetList;
