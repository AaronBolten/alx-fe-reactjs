import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <header style={{ borderBottom: "1px solid #eee", padding: "12px 16px" }}>
        <nav style={{ display: "flex", gap: 12 }}>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

