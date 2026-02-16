import "./App.css";

import { Loader } from "@mantine/core";
import { useContext } from "react";
import { TweetsContext } from "./utils/useContext";
import { Route, Routes } from "react-router";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoute from "./pages/ProtectedRoute";

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
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <HomePage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />
              </>
            ) : (
              <>
                <Route path="/*" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
              </>
            )}
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
