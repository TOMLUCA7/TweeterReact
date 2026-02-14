import { Link } from "react-router";
import { Tabs } from "@mantine/core";

const NavBar = () => {
  return (
    <Tabs
      defaultValue="home"
      style={{
        backgroundColor: "#f5f5f5",
        padding: "10px",
        borderRadius: "10px",
        width: "50%",
        margin: "30px",
      }}
    >
      <Tabs.List>
        <Tabs.Tab value="home">
          <Link style={{ textDecoration: "none", color:'blue' }} to="/">Home</Link>
        </Tabs.Tab>
        <Tabs.Tab value="profile">
          <Link style={{ textDecoration: "none", color:'blue' }}  to="/profile">Profile</Link>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export default NavBar;
