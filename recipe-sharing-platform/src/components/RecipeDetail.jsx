import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const numId = Number(id);
    const found = data.find((r) => r.id === numId);
    setRecipe(found || null);
    // optional: scroll to top when navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!recipe) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link
            to="/"
            className="text-emerald-700 hover:text-emerald-800 font-medium"
          >
            ← Back to recipes
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-gray-900">
            Recipe not found
          </h1>
          <p className="mt-2 text-gray-600">
            We couldn’t locate that recipe. It may have been moved or removed.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Back link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H6.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 1 1 1.06 1.06L6.56 9.25h9.69A.75.75 0 0 1 17 10Z"
                clipRule="evenodd"
              />
            </svg>
            Back to recipes
          </Link>
        </div>

        {/* Title */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600">
              {recipe.title}
            </span>
          </h1>
          {recipe.summary && (
            <p className="mt-3 text-gray-600">{recipe.summary}</p>
          )}
        </header>

        {/* Hero image */}
        <div className="rounded-xl overflow-hidden shadow-sm mb-8">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900">
                Ingredients
              </h2>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
                {recipe.ingredients?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900">
                Instructions
              </h2>
              <ol className="mt-4 list-decimal list-inside space-y-3 text-gray-700">
                {recipe.steps?.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
