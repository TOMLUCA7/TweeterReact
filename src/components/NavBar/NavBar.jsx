import { useState, useContext, useEffect } from "react";
import { Burger, Container, Group, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";
import { Link, useLocation } from "react-router";
import { TweetsContext } from "../../utils/useContext";

const links = [
  { link: "/", label: "Home" },
  { link: "/profile", label: "Profile" },
];

const NavBar = () => {
  const { onLogout } = useContext(TweetsContext);
  const [opened, { toggle }] = useDisclosure(false);
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner} px={{ base: "md", sm: "lg" }}>
        <Group gap="xs" visibleFrom="xs">
          {items}
          <Button variant="light" color="red" onClick={onLogout} radius="xl">
            Logout
          </Button>
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="xs"
          size="sm"
          aria-label="Toggle navigation"
        />
      </Container>
    </header>
  );
};

export default NavBar;
