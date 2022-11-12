import React from "react"
import QuickAction from "./QuickAction"

export default function QuickActions() {
  return (
    <div className="mt-8 pt-8 border-t-2 border-solid border-gray-100">
      <div>
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-bold text-xl">Quick Actions</h2>
          <div className="-my-1 mx-0"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <QuickAction name={"View My Profile"} to={"#"} />
        <QuickAction name={"Create New Event"} to={"#"} />
        <QuickAction name={"Send Newsletter"} to={"#"} />
        <QuickAction name={"Sell Credit Packs"} to={"#"} />
      </div>
    </div>
  )
}
