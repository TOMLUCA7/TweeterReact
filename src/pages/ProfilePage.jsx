import { TextInput, Button, Container, Group, Paper, Stack, Title, Text } from "@mantine/core";
import { useContext, useState } from "react";
import { TweetsContext } from "../utils/useContext";
import NavBar from "../components/NavBar/NavBar";

const ProfilePage = () => {
  const { userName, setUserName } = useContext(TweetsContext);
  const [localName, setLocalName] = useState(userName);

  const enterName = () => {
    setUserName(localName);
    alert(`${localName} Saved`);
  };


  return (
    <div className="app-page">
      <NavBar />
      <Container size="xl" px={{ base: "md", sm: "lg" }} py="xl">
        <Paper withBorder shadow="sm" radius="lg" p={{ base: "lg", sm: "xl" }}>
          <Stack gap="lg">
            <div>
              <Title order={2}>Profile Settings</Title>
              <Text c="dimmed" mt={4}>
                Update how your name appears on your tweets.
              </Text>
            </div>

            <TextInput
              value={localName}
              onChange={(e) => setLocalName(e.target.value)}
              label="User Name"
              placeholder="Enter your name"
              size="md"
            />

            <Group justify="flex-end">
              <Button onClick={enterName} size="md" w={{ base: "100%", sm: "auto" }}>
                Save
              </Button>
            </Group>
          </Stack>
        </Paper>
      </Container>
    </div>
  );
};

export default ProfilePage;
