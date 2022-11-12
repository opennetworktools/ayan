import React from "react"
import { NavLink as Link } from "react-router-dom"

export default function QuickAction({ name, to }) {
  return (
    <Link
      to={to}
      className="py-2 px-4 bg-gray-100 rounded-lg relative overflow-hidden cursor-pointer hover:bg-brand hover:text-white"
    >
      <div className="font-medium text-[1.1rem] mb-4 hover:text-white">
        {name}{" "}
        <span className="text-gray-300 text-inherit after:inline-block transition-all ease-in-out duration-300 hover:translate-x-2/4">
          -&gt;
        </span>
      </div>
      <svg
        className="w-12 h-12 text-gray-200 absolute -right-4 -bottom-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 111 111"
      >
        <path
          fill="currentColor"
          d="M85.065 101.45c10.596 0 16.065-5.47 16.065-15.919V26.107c0-10.449-5.469-15.918-16.065-15.918h-59.13c-10.547 0-16.065 5.42-16.065 15.918v59.424c0 10.45 5.518 15.918 16.065 15.918h59.13Zm2.002-10.06C82.673 80.112 70.32 72.349 55.524 72.349c-14.795 0-27.197 7.763-31.591 19.043-2.832-.782-4.346-3.028-4.346-6.739V26.986c0-4.736 2.49-7.08 6.982-7.08h57.862c4.443 0 6.982 2.344 6.982 7.08v57.666c0 3.662-1.562 5.909-4.346 6.739ZM55.524 64.536c9.327.049 16.602-7.861 16.602-18.213 0-9.717-7.324-17.87-16.602-17.87-9.326 0-16.699 8.153-16.65 17.87.049 10.352 7.275 18.115 16.65 18.213Z"
        ></path>
      </svg>
    </Link>
  )
}
