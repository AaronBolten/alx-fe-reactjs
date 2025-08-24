import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  function handleLogin() {
    login("demo");
    navigate(from, { replace: true });
  }

  return (
    <>
      <h1>Login</h1>
      <p>You must log in to view that page.</p>
      <button onClick={handleLogin}>Log in</button>
    </>
  );
}
