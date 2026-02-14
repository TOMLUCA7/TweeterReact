import "./App.css";

import { Loader } from "@mantine/core";
import { useContext } from "react";
import { TweetsContext } from "./utils/useContext";
import { Route, Routes } from "react-router";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const { error, loading } = useContext(TweetsContext);
  return (
    <>
        <NavBar />
        {error && <h4 style={{ color: "red" }}>Error: {error.message}</h4>}
        {loading ? (
          <Loader color="blue" size="xl" />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        )}
    </>
  );
}

export default App;
