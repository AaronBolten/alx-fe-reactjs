export default function UserCard({ user }) {
  return (
    <a
      href={user.html_url}
      target="_blank"
      rel="noreferrer"
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: 8,
        padding: 12,
        textDecoration: "none",
        color: "inherit",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        width="48"
        height="48"
        style={{ borderRadius: "50%" }}
      />
      <div>
        <div style={{ fontWeight: 600 }}>{user.login}</div>
        <div style={{ fontSize: 12, opacity: 0.7 }}>{user.type}</div>
      </div>
    </a>
  );
}
