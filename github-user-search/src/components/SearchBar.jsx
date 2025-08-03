import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSearch(q);
  };

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8 }}>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search GitHub users…"
        aria-label="Search GitHub users"
        style={{ flex: 1, padding: "8px 10px" }}
      />
      <button type="submit">Search</button>
    </form>
  );
}
