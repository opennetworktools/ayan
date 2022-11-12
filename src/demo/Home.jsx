import React from "react"
import QuickActions from "../components/dashboard/main/action/QuickActions"
import Dashboard from "../demo/Dashboard"

export default function DemoHome() {
  return (
    <Dashboard>
      <div>
        <div>
          <div className="flex justify-between items-baseline">
            <h1 className="text-[1.75rem] font-bold mb-2 mt-0 leading-[1.2]">
              <div className="mb-1 font-normal text-gray-400">
                Good Morning,
              </div>
              <div>Roopesh</div>
            </h1>
          </div>
        </div>
        <QuickActions />
      </div>
    </Dashboard>
  )
}
