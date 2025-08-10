import UserProfile from "./components/UserProfile";
import "./App.css";

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl space-y-10">
        {/* Existing hero */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Tailwind + React + Vite
            </span>
          </h1>
          <p className="text-gray-600">
            If this looks styled, Tailwind is working 🎉
          </p>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Test Button
          </button>
        </section>

        {/* The profile card */}
        <UserProfile />
      </div>
    </main>
  );
}
