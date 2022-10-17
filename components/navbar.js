import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <nav className="bg-rose-500 flex items-center justify-between border-b border-rose-400 py-8">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">MBS</span>
      </div>
      <section className="MOBILE-MENU flex lg:hidden">
        <div
          class="block lg:hidden"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <button class="flex items-center px-3 py-2 border rounded text-rose-200 border-rose-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          {" "}
          <div
            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <div className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            <p class="block mt-4 lg:inline-block lg:mt-0 text-rose-200 hover:text-white mr-4">
              <Link href="/">Docs</Link>
            </p>

            <p class="block mt-4 lg:inline-block lg:mt-0 text-rose-200 hover:text-white mr-4">
              <Link href="/">Docs</Link>
            </p>

            <p class="block mt-4 lg:inline-block lg:mt-0 text-rose-200 hover:text-white mr-4">
              <Link href="/">Docs</Link>
            </p>
          </div>
        </div>
      </section>

      <ul className="DESKTOP-MENU hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <p class="block mt-4 lg:inline-block lg:mt-0 text-rose-200 hover:text-white mr-4">
          <Link href="/">Docs</Link>
        </p>

        <p class="block mt-4 lg:inline-block lg:mt-0 text-rose-200 hover:text-white mr-4">
          <Link href="/">Docs</Link>
        </p>

        <p class="block mt-4 lg:inline-block lg:mt-0 text-rose-200 hover:text-white mr-4">
          <Link href="/">Docs</Link>
        </p>
      </ul>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </nav>
  );
}
