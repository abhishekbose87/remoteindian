import Link from "next/link";
import { Mark } from "components/mark";
import SignupForm from "components/signup-form.js"

const Hero = () => (
  <main className="mt-4 mx-auto max-w-screen-xl px-12 md:px-24 sm:mt-6 md:mt-10 xl:mt-12">
    <div className="grid grid-cols-6 md:grid-cols-12 gap-8 items-center">
      <div className="sm:text-center md:max-w-2xl md:mx-auto col-span-6 md:text-left">
        <h2 className="mt-1 pb-4 text-2xl tracking-tight leading-10 font-bold text-gray-800 sm:leading-none sm:text-3xl lg:text-4xl xl:text-5xl">
          RemoteIndian
          <br className="hidden md:inline" />{" "}
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
          <div className="col-span-11 text-base text-gray-700 sm:text-xl lg:text-lg xl:text-xl text-left">
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
          <div className="col-span-11 text-base text-gray-700 sm:text-xl lg:text-lg xl:text-xl text-left">
            5000+ Messages exchanged monthly
          </div>
        </div>

        {/* <SignupForm /> */}
      </div>

      <div className="mt-12 relative sm:max-w-lg lg:mt-0 lg:max-w-none col-span-6 flex mx-auto md:mx-0 md:justify-end ">
        <div className="relative w-full lg:max-w-md">
          <img className="w-full" src="/homepage/ri_community.png" alt="" />
        </div>
      </div>
    </div>
  </main>
);

export default Hero;
