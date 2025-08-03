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

function buildSearchQuery(username, location, minRepos) {
  let query = "";
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;
  return query.trim();
}

// Search using advanced parameters
export async function fetchAdvancedUsers(username, location, minRepos) {
  const q = buildSearchQuery(username, location, minRepos);
  const { data } = await api.get("/search/users", {
    params: {
      q,
      per_page: 10,
    },
  });
  return data.items;
}