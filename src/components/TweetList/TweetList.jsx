import React from "react";

import { Card, Text, Badge, Group } from "@mantine/core";

const TweetList = ({ tweets }) => {
  return (
    <>
      {tweets.map((tweet) => (
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
