import { useQuery } from "react-query";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
  const res = await fetch(POSTS_URL);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export default function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isFetching,
    refetch,
    status,
  } = useQuery(["posts"], fetchPosts, {
    // keep data in cache even if component unmounts, for quick remounts
    cacheTime: 5 * 60 * 1000, // 5 minutes
    // show old data while fetching new data
    keepPreviousData: true,
  });

  return (
    <section className="rounded-xl bg-white shadow-sm p-4 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Posts</h2>
        <button
          onClick={() => refetch()}
          className="rounded-md border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50 transition"
        >
          Refetch
        </button>
      </div>

      {/* Status line */}
      <div className="mb-4 text-sm text-gray-600">
        status: <span className="font-medium">{status}</span>
        {isFetching ? " • updating…" : ""}
      </div>

      {/* Loading / Error / Data */}
      {isLoading && <p className="text-gray-600">Loading posts…</p>}

      {error && (
        <p className="text-red-600">
          Failed to load posts: {error.message}
        </p>
      )}

      {data && (
        <ul className="grid gap-4 sm:grid-cols-2">
          {data.slice(0, 10).map((post) => (
            <li
              key={post.id}
              className="rounded-lg border border-gray-200 p-4 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-900 mb-1">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
