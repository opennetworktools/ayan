import React from "react"

export default function Home() {
  return (
    <div className="px-4 py-4 min-h-screen flex justify-center items-center">
      <h1 className="text-center leading-relaxed">
        <span className="text-3xl text-neutral-800 font-medium">
          Component Library made with
        </span>
        <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 ">
          TailwindCSS
        </span>
        <span className="mx-2 text-3xl text-neutral-800 font-medium">and</span>
        <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 ">
          React
        </span>
      </h1>
    </div>
  )
}
