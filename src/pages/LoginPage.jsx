import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import classes from "./AuthenticationTitle.module.css";
import { useContext, useState } from "react";
import { Link } from "react-router";
import { useForm } from "@mantine/form";
import { TweetsContext } from "../utils/useContext";

export default function LoginPage() {
  const { onLogin } = useContext(TweetsContext);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length < 6 ? "Password should include at least 6 characters" : null,
    },
  });
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    const validation = form.validate();
    if (validation.hasErrors) {
      console.log(validation);
    } else {
      await onLogin(form.values.email, form.values.password);
    }
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>

      <Text className={classes.subtitle}>
        Do not have an account yet?{" "}
        <Anchor component={Link} to="/signup">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <TextInput
          label="Email"
          required
          radius="md"
          value={form.values.email}
          onChange={(e) => form.setFieldValue("email", e.target.value)}
          error={form.errors.email}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          radius="md"
          value={form.values.password}
          onChange={(e) => form.setFieldValue("password", e.target.value)}
          error={form.errors.password}
        />
        <Button
          fullWidth
          mt="xl"
          radius="md"
          loading={loading}
          onClick={handleLogin}
        >
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
