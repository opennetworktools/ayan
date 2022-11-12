import React, { useState } from "react"

export default function SigninInput() {
  const [emailInputView, setEmailInputView] = useState(true)
  const [phoneNumberInputView, setPhoneNumberInputView] = useState(false)
  const [primary, setPrimary] = useState("email")

  function emailViewHandler(e) {
    e.preventDefault()
    setEmailInputView(true)
    setPrimary("email")
    setPhoneNumberInputView(false)
  }

  function phoneNumberViewHandler(e) {
    e.preventDefault()
    setEmailInputView(false)
    setPrimary("phone")
    setPhoneNumberInputView(true)
  }

  return (
    <div>
      <div className="flex align-middle">
        <button
          onClick={emailViewHandler}
          className={`font-medium text-[.8rem] px-2.5 py-1.5 rounded-tl-lg ${
            primary === "email"
              ? `bg-neutral-900 text-white`
              : `bg-zinc-100 text-zinc-500`
          }`}
        >
          <div>Email</div>
        </button>
        <button
          onClick={phoneNumberViewHandler}
          className={`font-medium text-[.8rem] px-2.5 py-1.5 rounded-tr-lg ${
            primary === "email"
              ? `bg-zinc-100 text-zinc-500`
              : `bg-neutral-900 text-white`
          }`}
        >
          <div>Phone Number</div>
        </button>
      </div>
      <div>
        <div className="mb-4">
          {!phoneNumberInputView ? (
            <input
              className="transition ease-in-out duration-300 w-full px-[1.125rem] py-[.6rem] text-base rounded-b-lg rounded-tr-lg border-2 border-gray-100 border-solid hover:border-gray-300 focus:outline-none"
              type="email"
              placeholder="you@email.com"
            />
          ) : (
            <input
              className="transition ease-in-out duration-300 w-full px-[1.125rem] py-[.6rem] text-base rounded-b-lg rounded-tr-lg border-2 border-gray-100 border-solid hover:border-gray-300 focus:outline-none"
              type="text"
              placeholder="+91 81234 56789"
            />
          )}
        </div>
      </div>
    </div>
  )
}
