import React from "react"
import { NavLink as Link } from "react-router-dom"

export default function NavLink({ name, to }) {
  let activeClassName = "text-brand"
  return (
    <Link
      to={to}
      className={({ isActive }) => (isActive ? activeClassName : undefined)}
    >
      <div className="nav-item rounded-[100px] md:rounded-lg cursor-pointer hover:bg-gray-200 text-xl p-2 font-medium mb-2 flex items-center">
        <svg
          className={`h-7 w-7`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 90 90"
        >
          <path
            fill=""
            d="M66.063 78.188c4.75 0 7.562-2.75 7.562-7.376V41.594l3.75 3.156c.75.625 1.625 1.156 2.594 1.156 1.844 0 3.25-1.156 3.25-2.968 0-1.063-.406-1.907-1.219-2.594l-8.375-7.063V19.97c0-1.407-.906-2.282-2.313-2.282H67c-1.375 0-2.313.875-2.313 2.282v5.812L49.47 13c-2.719-2.281-6.157-2.281-8.875 0L8.03 40.344c-.844.687-1.25 1.625-1.25 2.531 0 1.625 1.25 3.031 3.25 3.031.969 0 1.844-.531 2.625-1.156l3.563-3v29.063c0 4.624 2.781 7.374 7.562 7.374h42.282Zm-30.032-6.22H25.438c-1.938 0-3-1.093-3-3.062V36.531L43.656 18.72c.875-.75 1.875-.75 2.75 0l20.969 17.625v32.562c0 1.969-1.063 3.063-3 3.063H54V51.5c0-1.469-.938-2.406-2.406-2.406H38.469c-1.469 0-2.438.937-2.438 2.406v20.469Z"
          ></path>
        </svg>
        <div className="hidden invisible md:visible md:block ml-5 mr-2">
          {name}
        </div>
      </div>
    </Link>
  )
}
