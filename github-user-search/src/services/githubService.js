import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    ...(import.meta.env.VITE_GITHUB_TOKEN
      ? { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` }
      : {}),
    Accept: "application/vnd.github+json",
  },
});

export async function fetchUserData(username) {
  const { data } = await api.get(`/users/${username}`);
  return data;
}
