import { TextInput, Button } from "@mantine/core";
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
    <>
      <NavBar />
      <TextInput
        value={localName}
        onChange={(e) => setLocalName(e.target.value)}
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
        onClick={enterName}
      >
        Save
      </Button>
    </>
  );
};

export default ProfilePage;
