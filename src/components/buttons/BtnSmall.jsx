import React from "react"

export default function BtnSmall({ handle }) {
  return (
    <button className='w-full bg-neutral-100 text-neutral-600 font-medium rounded-lg text-base px-4 py-2 hover:bg-zinc-600 hover:text-white'>
      <div>{handle}</div>
    </button>
  )
}