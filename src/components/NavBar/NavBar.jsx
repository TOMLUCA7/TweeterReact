import { NavLink } from "react-router";
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
          <NavLink to="/">Home</NavLink>
        </Tabs.Tab>
        <Tabs.Tab value="profile">
          <NavLink to="/profile">Profile</NavLink>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};

export default NavBar;
