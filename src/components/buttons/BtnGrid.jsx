import React from "react"
import BtnSmall from "./BtnSmall"

export default function SigninOthersGrid() {
  return (
    <div className="mt-24">
      <div className="mb-4 flex items-center">
        <div className="text-sm font-bold text-gray-500">Or Sign In With</div>
        <div className="ml-2 border-b-2 border-gray-200 border-solid flex-1"></div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <BtnSmall handle={"Zoom"} />
        <BtnSmall handle={"Twitter"} />
        <BtnSmall handle={"Discord"} />
        <BtnSmall handle={"Ethereum"} />
      </div>
    </div>
  )
}
