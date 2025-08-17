// src/components/HomePage.jsx
import { useEffect, useState } from "react";
import recipesData from "../data.json";
import { Link } from "react-router-dom";
export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulate fetching from a local JSON file
    setRecipes(recipesData);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Page header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600">
              Recipe Sharing Platform
            </span>
          </h1>
          <p className="mt-3 text-gray-600">
            Browse delicious recipes from the community.
          </p>
        </header>

        {/* Grid of recipe cards */}
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recipes.map((r) => (
            <article
              key={r.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={r.image}
                  alt={r.title}
                  className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {r.title}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{r.summary}</p>

                <a
                   // OLD: href={`#/recipes/${r.id}`}
                  // NEW ↓
                  as="span"
                   className="mt-4 inline-flex items-center gap-2 text-emerald-700 font-medium hover:text-emerald-800 transition"
                >
                       <Link to={`/recipe/${r.id}`} className="inline-flex items-center gap-2">
                           View recipe
                           <svg /* ...icon props unchanged... */ />
                      </Link>
                </a>

              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
