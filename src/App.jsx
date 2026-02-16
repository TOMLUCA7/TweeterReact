import "./App.css";

import { Loader } from "@mantine/core";
import { useContext } from "react";
import { TweetsContext } from "./utils/useContext";
import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";

function App() {
  const { error, loading, userName } = useContext(TweetsContext);
  return (
    <>
      {error && <h4 style={{ color: "red" }}>Error: {error.message}</h4>}
      {loading ? (
        <Loader color="blue" size="xl" />
      ) : (
        <>
          <Routes>
            {userName ? (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<HomePage />} />
              </>
            ) : (
              <Route path="*" element={<LoginPage />} />
            )}
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
