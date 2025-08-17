import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredientsText, setIngredientsText] = useState("");
  const [stepsText, setStepsText] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function splitLines(str) {
    return str
      .split(/\r?\n|,/g)            // newline or comma separated
      .map(s => s.trim())
      .filter(Boolean);
  }

  function validate() {
    const next = {};
    if (!title.trim()) next.title = "Please enter a recipe title.";
    const ingredients = splitLines(ingredientsText);
    if (ingredients.length < 2)
      next.ingredients = "Add at least two ingredients (newline or comma separated).";
    if (!stepsText.trim())
      next.steps = "Please provide preparation steps.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    const newRecipe = {
      title: title.trim(),
      ingredients: splitLines(ingredientsText),
      steps: splitLines(stepsText),
      image: "https://via.placeholder.com/640x360?text=New+Recipe"
    };

    // For now we just log it; later you can POST to an API or append to state.
    console.log("New recipe:", newRecipe);
    setSubmitted(true);
    setTitle("");
    setIngredientsText("");
    setStepsText("");
    setErrors({});
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600">
              Submit a Recipe
            </span>
          </h1>
          <Link
            to="/"
            className="text-emerald-700 hover:text-emerald-800 font-medium"
          >
            Back to Home
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {submitted && (
              <div className="rounded-md border border-emerald-200 bg-emerald-50 text-emerald-800 px-4 py-3">
                Recipe submitted (logged to console). Wire this up to your API or app state next.
              </div>
            )}

            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Recipe Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                  ${errors.title ? "border-red-400 focus:ring-red-500 focus:border-red-500" : "border-gray-300"}`}
                placeholder="e.g., Classic Carbonara"
                aria-invalid={Boolean(errors.title)}
                aria-describedby={errors.title ? "title-error" : undefined}
              />
              {errors.title && (
                <p id="title-error" className="mt-1 text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Ingredients */}
            <div>
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
                Ingredients <span className="text-gray-400">(newline or comma separated)</span>
              </label>
              <textarea
                id="ingredients"
                rows="5"
                value={ingredientsText}
                onChange={(e) => setIngredientsText(e.target.value)}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                  ${errors.ingredients ? "border-red-400 focus:ring-red-500 focus:border-red-500" : "border-gray-300"}`}
                placeholder={"Spaghetti\nEggs\nPancetta\nParmesan\nBlack pepper"}
                aria-invalid={Boolean(errors.ingredients)}
                aria-describedby={errors.ingredients ? "ingredients-error" : undefined}
              />
              {errors.ingredients && (
                <p id="ingredients-error" className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
              )}
            </div>

            {/* Steps */}
            <div>
              <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
                Preparation Steps
              </label>
              <textarea
                id="steps"
                rows="6"
                value={stepsText}
                onChange={(e) => setStepsText(e.target.value)}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500
                  ${errors.steps ? "border-red-400 focus:ring-red-500 focus:border-red-500" : "border-gray-300"}`}
                placeholder={"Boil pasta until al dente.\nCrisp pancetta.\nCombine with egg/cheese off heat.\nSeason and serve."}
                aria-invalid={Boolean(errors.steps)}
                aria-describedby={errors.steps ? "steps-error" : undefined}
              />
              {errors.steps && (
                <p id="steps-error" className="mt-1 text-sm text-red-600">{errors.steps}</p>
              )}
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
              >
                Submit Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
