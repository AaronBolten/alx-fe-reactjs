
import './App.css'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center space-y-6">
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
      </div>
    </div>
  )
}
