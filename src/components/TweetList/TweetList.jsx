import React from 'react'

import { Card, Text, Badge, Group } from '@mantine/core';

const TweetList = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '50%', marginBottom: '30px' }}>

      <Group justify="space-between" mt="md" mb="xs">
        <Text color='blue' fw={700}>Norway</Text>
        <Badge color="green" variant="light">
          {new Date().toLocaleString()}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Norway is a country in Northern Europe that is known for its stunning
        fjords, mountains, and glaciers.
      </Text>

    </Card>
  )
}

export default TweetList