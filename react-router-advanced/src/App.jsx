import { useState } from "react";
import {
  BrowserRouter,     
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Layout from "./components/Profile.jsx";
import Profile from "./pages/Profile.jsx";
import ProfileDetails from "./pages/ProfileDetails.jsx";
import ProfileSettings from "./pages/ProfileSettings.jsx";
import Posts from "./pages/Posts.jsx";
import PostDetail from "./pages/PostDetail.jsx";
import Login from "./pages/Login.jsx";

function Home() {
  return <h1>Home</h1>;
}

export default function App() {

  const [isAuthed, setIsAuthed] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ padding: 16, fontFamily: "system-ui, sans-serif" }}>
        {/* top nav */}
        <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>

        <div style={{ marginBottom: 12 }}>
          {isAuthed ? (
            <>
              Signed in •{" "}
              <button onClick={() => setIsAuthed(false)}>Logout</button>
            </>
          ) : (
            <button onClick={() => setIsAuthed(true)}>Quick Login</button>
          )}
        </div>

        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Dynamic routes */}
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:postId" element={<PostDetail />} />

          {/* Protected parent with nested children */}
          <Route
            path="profile"
            element={
              <ProtectedRoute isAuthed={isAuthed}>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route index element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Login page used by the guard redirect */}
          <Route path="login" element={<Login />} />

          {/* 404 */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
