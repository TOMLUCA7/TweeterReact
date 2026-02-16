import { Navigate } from "react-router";
import { useContext } from "react";
import { TweetsContext } from "../utils/useContext";

export default function ProtectedRoute({ children }) {
  const { userName } = useContext(TweetsContext);
  if (!userName) return <Navigate to="/" replace />

  return <>{children}</>;
}