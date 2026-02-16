import { TextInput, Button } from "@mantine/core";
import { useContext } from "react";
import { TweetsContext } from "../utils/useContext";
import NavBar from "../components/NavBar/NavBar";

const ProfilePage = () => {
  const { userName, setUserName } = useContext(TweetsContext);

  const enterName = () => {
    if (!userName) return alert("Please enter a name");
    alert(`${userName} Saved`);
  };


  return (
    <>
      <NavBar />
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
        onClick={enterName}
      >
        Save
      </Button>
    </>
  );
};

export default ProfilePage;
