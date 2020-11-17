import Link from "next/link";
import { Mark } from "components/mark";
import SignupForm from "components/signup-form.js"

const Hero = () => (
  <div className="relative bg-white overflow-hidden">
    <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
      <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#" aria-label="Home">
              <img className="h-8 w-auto sm:h-10" src="/brand.png" alt="Logo" />
            </a>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="hidden md:block md:ml-10">
            <a
              href="#"
              className="font-medium text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Guides
            </a>
            <a
              href="#"
              className="ml-10 font-medium text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              Interviews
            </a>
            <a
              href="#"
              className="ml-10 font-medium text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out"
            >
              ❤️ Support
            </a>
          </div>
        </div>
        <div className="hidden md:block text-right">
          <span className="inline-flex rounded-md shadow-md">
            <span className="inline-flex rounded-md shadow-xs">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out"
              >
                Join Us
              </a>
            </span>
          </span>
        </div>
      </nav>

      {/* <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    --> */}
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-md">
          <div
            className="rounded-lg bg-white shadow-xs overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="/brand.png" alt="" />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Guides
              </a>
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Interviews
              </a>
              <a
                href="#"
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                role="menuitem"
              >
                ❤️ Support
              </a>
            </div>
            <div>
              <a
                href="#"
                className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                role="menuitem"
              >
                Join us
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h2 className="mt-1 text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-3xl lg:text-4xl xl:text-5xl">
              <span className="text-indigo-600">Remote Indian</span>
              <br className="hidden md:inline" />
              <span>
                is the biggest and most supportive community of folks working
                remotely from India
              </span>
            </h2>
            <div className="mt-4 grid grid-cols-12 justify-end border-b pb-2">
              <div className="col-span-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  height="24px"
                  width="24px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div className="col-span-11 text-base text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
                1200+ Members
              </div>
            </div>

            <div className="mt-4 grid grid-cols-12 justify-end pb-2">
              <div className="col-span-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  height="24px"
                  width="24px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div className="col-span-11 text-base text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
                5000+ Messages exchanged monthly
              </div>
            </div>

            <SignupForm/>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img className="w-full" src="/ri_community.png" alt="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Hero;
