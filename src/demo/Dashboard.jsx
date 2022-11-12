import React from "react"
import Header from "../components/layout/Header"

export default function Dashboard({ children }) {
  return (
    <div className="relative sm:flex sm:items-stretch h-full min-h-screen">
      <Header />
      <main className="flex-grow relative min-w-0">
        <div className="p-6 w-auto max-w-full lg:w-[46.25rem] lg:px-6 lg:py-8">
          <div>{children}</div>
        </div>
      </main>
    </div>
  )
}
