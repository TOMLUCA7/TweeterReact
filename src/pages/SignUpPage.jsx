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

export default function SignUpPage() {
  const { onSignUp } = useContext(TweetsContext);

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

  async function handleSignUp() {
    const validation = form.validate();
    if (validation.hasErrors) {
      console.log(validation);
    } else {
      setLoading(true);
      await onSignUp(form.values.email, form.values.password);
      setLoading(false);
    }
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Create an account
      </Title>

      <Text className={classes.subtitle}>
        Already have an account?{" "}
        <Anchor component={Link} to="/">
          Login
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
          onClick={handleSignUp}
        >
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
