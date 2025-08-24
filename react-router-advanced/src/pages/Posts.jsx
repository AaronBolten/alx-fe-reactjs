import { Link } from "react-router-dom";

const mock = [
  { id: 1, title: "Hello Router" },
  { id: 2, title: "Nested Routes FTW" },
  { id: 3, title: "Protected Routes" },
];

export default function Posts() {
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {mock.map((p) => (
          <li key={p.id}>
            <Link to={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
