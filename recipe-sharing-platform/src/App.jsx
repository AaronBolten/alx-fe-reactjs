import './index.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen grid place-items-center bg-gray-50 p-6">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-6">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="h-16 w-16" alt="React logo" />
          </a>
        </div>

        <h1 className="text-3xl font-bold">Vite + React</h1>

        <div className="space-y-3">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            count is {count}
          </button>
          <p className="text-gray-600">
            Edit <code className="font-mono">src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <p className="text-gray-500">
          Click the logos to learn more
        </p>
      </div>
    </main>
  )
}


