// src/components/Profile.jsx
import { NavLink, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <h1>Profile</h1>
      <nav style={{ display: "flex", gap: 12, marginBottom: 8 }}>
        <NavLink end to="">
          Details
        </NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>
      {/* Nested routes render here */}
      <Outlet />
    </>
  );
}
