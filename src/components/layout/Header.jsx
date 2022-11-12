import React from "react"
import { NavLink as Link } from "react-router-dom"
import NavLink from "../dashboard/sidebar/NavLink"

export default function Header() {
  return (
    <header className="bg-zinc-100 flex flex-grow-0 flex-shrink-1 basis-0 items-end flex-col relative lg:z-[10] lg:flex-grow lg:flex-shrink-0 lg:basis-0">
      <div className="w-full h-[3.25rem] sm:w-[4.6rem] md:w-64 sm:h-screen">
        <div
          id="sidebar"
          className="hidden sm:block sm:relative w-[4.6rem] sm:w-64"
        >
          <div className="p-4 md:w-64 fixed h-screen flex flex-col overflow-auto">
            <div>
              <Link
                to={"/demo/home"}
                className="text-xl font-medium inline-block mb-12 rounded-[100px] p-2 hover:bg-gray-200"
              >
                L
              </Link>
            </div>
            <div>
              <NavLink name={"Home"} to={"/demo/home"} />
              <NavLink name={"Events"} to={"/demo/events"} />
              <NavLink name={"Audience"} to={"/demo/audience"} />
            </div>
            <div className="flex-1"></div>
            <div id="link-profile" className="inline-flex min-w-0">
              <div className="flex-1">
                <div className="p-2 rounded-lg cursor-pointer text-neutral-900 flex items-center">
                  <div id="avatar">
                    <div className="bg-avatar rounded-r-full bg-center bg-cover relative bg-white">
                      <div className="w-1/4 h-1/4 min-w-[6px] min-h-[6px] rounded-[100%] bg-white absolute right-0 bottom-0 overflow-hidden">
                        <div className="bg-orange-400"></div>
                      </div>
                    </div>
                  </div>
                  <div id="profile-name">
                    <div className="text-xl font-medium truncate">Roopesh</div>
                    <div className="text-xs flex items-baseline">
                      <div className="text-ellipsis overflow-hidden">
                        lu.ma/me
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="mobile-navbar"
          className="fixed block w-full bg-zinc-100 z-[10000] sm:hidden"
        >
          <div className="px-2 py-4 flex justify-between items-center">
            <div>
              <Link to={"/demo/home"} className="text-xl font-medium">
                Logo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
