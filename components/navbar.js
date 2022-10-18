import Link from "next/link";
import React, { useState } from "react";

export default function Navbar({landing}) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className={"relative flex flex-wrap items-center justify-between px-2 bg-rose-900 mb-3 py-3 shadow-"}>
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="text-sm font-bold leading-relaxed inline-block ml-4 mr-4 py-2 whitespace-nowrap uppercase text-white">
            <Link href="/">MBlog</Link>
          </div>
          <button
            className="flex items-center mr-4 text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg class="fill-current h-5 w-5" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-sm lg:flex-grow">
              <div className="nav-item block ml-4 mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                <Link href="/blog">Blog</Link>
              </div>
              <div className="block ml-4 mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                <Link href="/about">About</Link>
              </div>
            </div>
          </div>
      </nav>
    </>
  );
}
