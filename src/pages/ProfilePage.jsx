import { useState } from "react";
import { TextInput, Button } from "@mantine/core";

const ProfilePage = () => {
  const [userName, setUserName] = useState("");

  return (
    <>
      <TextInput
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        style={{
          width: "50%",
          marginBottom: "30px",
          marginTop: "30px",
          marginLeft: "30px",
        }}
        label="User Name"
        placeholder="Enter your name"
      />
      <Button
        style={{
          width: "10%",
          marginBottom: "30px",
          marginTop: "30px",
          marginLeft: "30px",
        }}
      >
        Save
      </Button>
    </>
  );
};

export default ProfilePage;
