import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";

import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import Login from "./pages/Login";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="posts" element={<Posts />} />
          <Route path="posts/:postId" element={<PostDetail />} />

          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          >

            <Route index element={<ProfileDetails />} />

            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          <Route path="login" element={<Login />} />

          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
