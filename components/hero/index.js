import Link from "next/link";
import { Mark } from "components/mark";
import SignupForm from "components/signup-form.js"

const Hero = () => (
  <main className="mt-4 mx-auto max-w-screen-xl px-4 sm:mt-6 sm:px-6 md:mt-10 xl:mt-12">
    <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
      <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        <h2 className="mt-1 text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-3xl lg:text-4xl xl:text-5xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            RemoteIndian
          </span>
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

        <SignupForm />
      </div>

      {/* World illustration */}
      <div className="col-span-6 -mt-20">
        <div className="flex flex-col items-center">
          <div className="relative">
            {/* Halo effect */}
            <svg
              className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              width="800"
              height="800"
              viewBox="0 0 800 800"
              style={{ maxWidth: "200%" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="fill-current text-gray-400 opacity-75">
                <circle className="pulse" cx="400" cy="400" r="200" />
                <circle className="pulse pulse-1" cx="400" cy="400" r="200" />
                <circle className="pulse pulse-2" cx="400" cy="400" r="200" />
              </g>
            </svg>
            {/* Globe image */}
            <img
              className="relative rounded-full shadow-xl"
              src="/homepage/planets/planet.png"
              width="400"
              height="400"
              alt="Planet"
            />

            <img
              className="absolute max-w-full transform"
              src="/homepage/planets/Group.png"
              alt="You are in good company"
              style={{ bottom: "6%", right: "17%" }}
            />

            {/* Dots */}
            <svg
              className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              width="416"
              height="158"
              viewBox="0 0 366 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <ellipse
                  cx="18"
                  cy="13.8409"
                  rx="6"
                  ry="5.84091"
                  fill="#0070F4"
                />
              </g>

              {/* <g filter="url(#filter1_d)">
                <path
                  d="M251 108C251 112.301 247.418 115.788 243 115.788C238.582 115.788 235 112.301 235 108C235 103.699 238.582 100.212 243 100.212C247.418 100.212 251 103.699 251 108Z"
                  fill="#0070F4"
                />
              </g> */}
              {/* <g filter="url(#filter2_d)">
                <ellipse
                  cx="240"
                  cy="135.841"
                  rx="6"
                  ry="5.84091"
                  fill="#0070F4"
                  fill-opacity="0.64"
                />
              </g> */}
              <path
                d="M251 108C251 108 493.066 67.8148 380.005 38"
                stroke="url(#paint0_linear)"
                strokeWidth="2"
                strokeDasharray="2"
              />
              <path
                d="M24 14C24 14 208.211 23.4419 234 130"
                stroke="url(#paint1_linear)"
                strokeWidth="2"
                strokeDasharray="2"
              />
              <defs>
                <filter
                  id="filter0_d"
                  x="0"
                  y="0"
                  width="36"
                  height="35.6818"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="6" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.439216 0 0 0 0 0.956863 0 0 0 0.32 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d"
                  x="223"
                  y="92.2119"
                  width="40"
                  height="39.5758"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="6" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.439216 0 0 0 0 0.956863 0 0 0 0.32 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d"
                  x="222"
                  y="122"
                  width="36"
                  height="35.6818"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="6" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0.439216 0 0 0 0 0.956863 0 0 0 0.32 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear"
                  x1="251"
                  y1="38"
                  x2="251"
                  y2="108"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0070F4" stopOpacity="0.01" />
                  <stop
                    offset="0.524493"
                    stopColor="#0070F4"
                    stopOpacity="0.64"
                  />
                  <stop offset="1" stopColor="#0070F4" stopOpacity="0.01" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="24"
                  y1="14"
                  x2="24"
                  y2="130"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0070F4" stopOpacity="0.01" />
                  <stop
                    offset="0.524493"
                    stopColor="#0070F4"
                    stopOpacity="0.64"
                  />
                  <stop offset="1" stopColor="#0070F4" stopOpacity="0.01" />
                </linearGradient>
              </defs>
            </svg>

            {/* Dynamic dots */}
            <svg
              className="absolute max-w-full"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              style={{ width: "12%", top: "52%", left: "60%" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="fill-current text-blue-600">
                <circle
                  className="pulse pulse-mini pulse-1"
                  cx="24"
                  cy="24"
                  r="8"
                />
                <circle
                  className="pulse pulse-mini pulse-2"
                  cx="24"
                  cy="24"
                  r="8"
                />
                <circle cx="24" cy="24" r="8" />
              </g>
            </svg>
            <svg
              className="absolute max-w-full"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              style={{ width: "12%", top: "58%", left: "58%" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className="fill-current text-blue-600">
                <circle className="pulse pulse-mini" cx="24" cy="24" r="8" />
                <circle
                  className="pulse pulse-mini pulse-2"
                  cx="24"
                  cy="24"
                  r="8"
                />
                <circle cx="24" cy="24" r="8" />
              </g>
            </svg>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap lg:mt-8 w-full justify-center text-center">
          <div className="flex flex-col w-16 mb-2 items-center">
            <img src="/homepage/companies/todoist-logo.png" alt="Todoist" />
            <div className="text-sm justify-self-end">Todoist</div>
          </div>
          <div className="flex flex-col w-16 mb-2 items-center">
            <img src="/homepage/companies/gumroad-logo.png" alt="Gumroad" />
            <div className="text-sm justify-self-end">Gumroad</div>
          </div>
          <div className="flex flex-col w-16 mb-2 items-center">
            <img src="/homepage/companies/prisma-logo.png" alt="Prisma" />
            <div className="text-sm justify-self-end">Prisma</div>
          </div>
          <div className="flex flex-col w-16 mb-2 items-center">
            <img
              src="/homepage/companies/gitlab-logo.png"
              alt="Browser Stack"
            />
            <div className="text-sm justify-self-end">Gitlab</div>
          </div>
          <div className="flex flex-col w-1/5 mb-2 items-center">
            <img
              className="self-center"
              src="/homepage/companies/remo-logo.png"
              alt="Remo"
            />
            <div className="text-sm justify-self-end">Remo</div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Hero;
