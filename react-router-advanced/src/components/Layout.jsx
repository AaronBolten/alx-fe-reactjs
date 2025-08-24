import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../auth";

export default function Layout() {
  const { user, login, logout } = useAuth();

  return (
    <div style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>

      <div style={{ marginBottom: 12 }}>
        {user ? (
          <>
            Signed in as <b>{user.name}</b>{" "}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={() => login("demo")}>Quick Login</button>
        )}
      </div>

      <Outlet />
    </div>
  );
}
