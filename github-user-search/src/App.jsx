import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./components/Search";

export default function App() {
  return (
    <div>
      <header style={{ padding: 16, borderBottom: "1px solid #eee" }}>
        <h1 style={{ margin: 0 }}>GitHub User Search</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
}
