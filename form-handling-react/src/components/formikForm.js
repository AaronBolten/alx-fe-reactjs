import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

 export const RegistrationSchema = Yup.object({
  username: Yup.string().required("Username is required."),
  email: Yup.string().email("Enter a valid email.").required("Email is required."),
  password: Yup.string().min(6, "Min 6 characters.").required("Password is required."),
});

export default function FormikRegistrationForm() {
  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>Register (Formik + Yup)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
          try {
            const res = await fetch("https://reqres.in/api/users", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            });
            const data = await res.json();
            setStatus(`Registered! id=${data.id || "N/A"}`);
            resetForm();
          } catch {
            setStatus("Registration failed. Try again.");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, status }) => (
          <Form noValidate>
            <label style={styles.label} htmlFor="username">Username</label>
            <Field
              id="username"
              name="username"
              placeholder="yourname"
              style={styles.input}
            />
            <ErrorMessage name="username" component="div" style={styles.err} />

            <label style={styles.label} htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              style={styles.input}
            />
            <ErrorMessage name="email" component="div" style={styles.err} />

            <label style={styles.label} htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="********"
              style={styles.input}
            />
            <ErrorMessage name="password" component="div" style={styles.err} />

            <button type="submit" style={styles.button} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {status && <div style={styles.ok}>{status}</div>}
          </Form>
        )}
      </Formik>
    </div>
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
