const Logo = () => (
  <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-6 md:py-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="header">A community of ambitious individuals</h1>
          <p className="tagline">
            Connect with members who are working in awesome companies around the
            world
          </p>
        </div>

        {/* World illustration */}
        <div className="pt-6 flex flex-col items-center">
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

        <div className="mt-6 flex flex-wrap lg:mt-8 w-full md:w-1/2 mx-auto justify-center text-center">
          <div className="flex flex-col w-24 mb-2 items-center">
            <img src="/homepage/companies/todoist-logo.png" alt="Todoist" />
            <div>Todoist</div>
          </div>
          <div className="flex flex-col w-24 mb-2 items-center">
            <img src="/homepage/companies/gumroad-logo.png" alt="Gumroad" />
            <div>Gumroad</div>
          </div>
          <div className="flex flex-col w-24 mb-2 items-center">
            <img src="/homepage/companies/prisma-logo.png" alt="Prisma" />
            <div>Prisma</div>
          </div>
          <div className="flex flex-col w-16 mb-2 items-center">
            <img src="/homepage/companies/gitlab-logo.png" alt="Gitlab" />
            <div>Gitlab</div>
          </div>
          <div className="flex flex-col w-auto mb-2 items-start">
            <img
              src="/homepage/companies/remo-logo.png"
              alt="Remo"
            />
            <div className="self-center">Remo</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Logo;
