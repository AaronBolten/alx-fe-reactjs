import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { postId } = useParams(); // dynamic segment
  return (
    <>
      <h1>Post #{postId}</h1>
      <p>This page was matched by the dynamic route /posts/:postId.</p>
    </>
  );
}
