import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
    // redirect to /login and remember where we were going
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
}
