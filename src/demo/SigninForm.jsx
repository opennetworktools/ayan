import React from "react"
import SigninInput from "../components/inputs/SigninInput"
import BtnGrid from "../components/buttons/BtnGrid"
import BtnLarge from "../components/buttons/BtnLarge"

export default function SigninForm() {
  return (
    <div className="py-4 px-12">
      <form className="max-w-[400px]">
        <h1 className="font-bold text-3xl text-neutral-900 mb-16">Sign in</h1>
        <SigninInput />
        <BtnLarge />
        <div className="text-sm text-gray-600 mt-4">
          New to Luma?&nbsp;
          <a className="text-red-500" href="/">
            Sign up
          </a>
          &nbsp;for free.
        </div>
        <BtnGrid />
      </form>
    </div>
  )
}
