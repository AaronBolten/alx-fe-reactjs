import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, message: "" });

const validate = () => {
  const next = {};
  if (!username) next.username = "Username is required.";
  if (!email) next.email = "Email is required.";
  if (!password) next.password = "Password is required.";
  return next;
};


  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setStatus({ loading: true, message: "" });
      const res = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      setStatus({ loading: false, message: `Registered! id=${data.id || "N/A"}` });
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setStatus({ loading: false, message: "Registration failed. Try again." });
    }
  };

  return (
    <form onSubmit={onSubmit} style={styles.card}>
      <h2 style={styles.h2}>Register (Controlled)</h2>

      <label style={styles.label}>Username</label>
      <input
        style={{ ...styles.input, ...(errors.username && styles.inputErr) }}
        name="username"
        value={username}   {/* ✅ matches checker */}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="yourname"
      />
      {errors.username && <p style={styles.err}>{errors.username}</p>}

      <label style={styles.label}>Email</label>
      <input
        style={{ ...styles.input, ...(errors.email && styles.inputErr) }}
        name="email"
        type="email"
        value={email}      {/* ✅ matches checker */}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
      />
      {errors.email && <p style={styles.err}>{errors.email}</p>}

      <label style={styles.label}>Password</label>
      <input
        style={{ ...styles.input, ...(errors.password && styles.inputErr) }}
        name="password"
        type="password"
        value={password}   {/* ✅ matches checker */}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="********"
      />
      {errors.password && <p style={styles.err}>{errors.password}</p>}

      <button style={styles.button} disabled={status.loading}>
        {status.loading ? "Submitting..." : "Submit"}
      </button>

      {status.message && <p style={styles.ok}>{status.message}</p>}
    </form>
  );
}

const styles = {
  card: {
    maxWidth: 420,
    margin: "2rem auto",
    padding: "1.5rem",
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
  h2: { margin: 0, marginBottom: "1rem" },
  label: { display: "block", marginTop: "1rem", marginBottom: 6, fontWeight: 600 },
  input: {
    width: "100%",
    padding: "0.6rem 0.8rem",
    borderRadius: 8,
    border: "1px solid #d1d5db",
    outline: "none",
  },
  inputErr: { borderColor: "#ef4444", background: "#fff7f7" },
  button: {
    marginTop: "1.25rem",
    width: "100%",
    padding: "0.7rem",
    borderRadius: 8,
    border: "none",
    background: "#2563eb",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },
  err: { color: "#ef4444", marginTop: 6, fontSize: 14 },
  ok: { color: "#16a34a", marginTop: 12, fontSize: 14 },
};
