import { useQuery } from "@tanstack/react-query";

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
    isPending: isLoading,   
    isFetching, 
    isError,     
    refetch,     
    status,     
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 30_000,          
    gcTime: 5 * 60_000,         
    placeholderData: (prev) => prev,
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

      <div className="mb-4 text-sm text-gray-600">
        status: <span className="font-medium">{status}</span>
        {isFetching ? " • updating…" : ""}
      </div>

      {isLoading && <p className="text-gray-600">Loading posts…</p>}

      {isError && (                                   // ✔ use isError
        <p className="text-red-600">
          Failed to load posts: {error?.message}
        </p>
      )}

      {Array.isArray(data) && (
        <ul className="grid gap-4 sm:grid-cols-2">
          {data.slice(0, 10).map((post) => (
            <li
              key={post.id}
              className="rounded-lg border border-gray-200 p-4 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-900 mb-1">{post.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
