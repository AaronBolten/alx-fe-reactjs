import { useState } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // keep data "fresh" for 30s to demonstrate caching
      staleTime: 30 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen bg-gray-50 p-6">
        <div className="mx-auto max-w-3xl space-y-4">
          <header className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">React Query Demo</h1>
            <button
              onClick={() => setShow((s) => !s)}
              className="rounded-md bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700 transition"
            >
              {show ? "Unmount Posts" : "Mount Posts"}
            </button>
          </header>

          {show ? <PostsComponent /> : (
            <p className="text-gray-600">
              Posts unmounted. Remount within 30s to see cached data instantly.
            </p>
          )}
        </div>
      </main>
    </QueryClientProvider>
  );
}
