import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    ...(import.meta.env.VITE_GITHUB_TOKEN
      ? { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` }
      : {}),
    "X-GitHub-Api-Version": "2022-11-28",
    Accept: "application/vnd.github+json",
  },
});

export async function searchUsers(query, perPage = 10) {
  if (!query?.trim()) return { items: [] };
  const { data } = await api.get("/search/users", {
    params: { q: query, per_page: perPage },
  });
  return data; // { total_count, items: [...] }
}

export default api;