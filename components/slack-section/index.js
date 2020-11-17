import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition.js";

function SlackSection() {
 
   const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const message= {
    id: 1,  
    text: `How would you go about buying a brand new desktop today? I
                    am seeing All-in-One PCs which aren't very exciting.
                    Lenovo's website makes it really difficult to discover PCs
                    that would serve your needs. Looking for i5 and above, 8GB
                    and above, 128GB SSD, and Windows 10.`,
    userName: "amit" 
  }

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20"></div>

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h2 mb-4">A community of super helpful people</h1>
          <p className="text-xl text-gray-600">
            Remote working can be a solitary endeavor. But, if you can find the
            right support network, it becomes easier, more productive and more
            joyful.
          </p>
        </div>

        {/* Section content */}
        <div className="md:grid md:grid-cols-12 md:gap-6">
          {/* Content */}
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
            data-aos="fade-right"
          >
            {/* <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
              <h3 className="h3 mb-3">A community of super helpful people</h3>
              <p className="text-xl text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa.
              </p>
            </div> */}
            {/* Tabs buttons */}
            <div className="mb-8 md:mb-0">
              <a
                className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                  tab !== 1
                    ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                    : "bg-gray-200 border-transparent"
                }`}
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  setTab(1);
                }}
              >
                <div>
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    #gear
                  </div>
                  <div className="text-gray-600">
                    High quality information to setup a productive workspace
                  </div>
                </div>
                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg
                    className="w-3 h-3 fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                  </svg>
                </div>
              </a>
              <a
                className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                  tab !== 2
                    ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                    : "bg-gray-200 border-transparent"
                }`}
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  setTab(2);
                }}
              >
                <div>
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Building the Simple ecosystem
                  </div>
                  <div className="text-gray-600">
                    Take collaboration to the next level with security and
                    administrative features built for teams.
                  </div>
                </div>
                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg
                    className="w-3 h-3 fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
              </a>
              <a
                className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                  tab !== 3
                    ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                    : "bg-gray-200 border-transparent"
                }`}
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  setTab(3);
                }}
              >
                <div>
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Building the Simple ecosystem
                  </div>
                  <div className="text-gray-600">
                    Take collaboration to the next level with security and
                    administrative features built for teams.
                  </div>
                </div>
                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg
                    className="w-3 h-3 fill-current"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                      fill="#191919"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Tabs items */}
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
            data-aos="zoom-y-out"
            ref={tabs}
          >
            <div className="relative flex flex-col text-center lg:text-right">
              {/* Item 1 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div className="relative inline-flex flex-col">
                  <div className="md:max-w-none mx-auto rounded text-left">
                    {/* <!-- A message --> */}
                    <div className="flex items-start mb-4 text-sm">
                        <img src="https://pbs.twimg.com/profile_images/875010472105222144/Pkt9zqPY_400x400.jpg" className="w-10 h-10 rounded mr-3" />
                        <div className="flex-1 overflow-hidden">
                            <div>
                                <span className="font-bold">Steve Schoger</span>
                                <span className="text-grey text-xs">11:46</span>
                            </div>
                            <p className="text-black leading-normal">The slack from the other side.</p>
                        </div>
                    </div>
                    {/* <!-- A message --> */}
                    <div className="flex items-start mb-4 text-sm">
                        <img src="https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg" className="w-10 h-10 rounded mr-3" />
                        <div className="flex-1 overflow-hidden">
                            <div>
                                <span className="font-bold">Adam Wathan</span>
                                <span className="text-grey text-xs">12:45</span>
                            </div>
                            <p className="text-black leading-normal">How are we supposed to control the marquee space without an utility for it? I propose this:</p>
                        </div>
                    </div>
                    {/* <!-- A message --> */}
                    <div className="flex items-start mb-4 text-sm">
                        <img src="https://pbs.twimg.com/profile_images/929910740156215296/yDEC9GW9_400x400.jpg" className="w-10 h-10 rounded mr-3" />
                        <div className="flex-1 overflow-hidden">
                            <div>
                                <span className="font-bold">David Hemphill</span>
                                <span className="text-grey text-xs">12:46</span>
                            </div>
                            <p className="text-black leading-normal"><a href="#" className="inline-block bg-blue-lightest text-blue no-underline">@Adam Wathan</a> the size of the generated CSS is creating a singularity in space/time, we must stop adding more utilities before it's too late!</p>
                        </div>
                    </div>
                    {/* <!-- A message --> */}
                    <div className="flex items-start mb-4 text-sm">
                        <img src="https://pbs.twimg.com/profile_images/875010472105222144/Pkt9zqPY_400x400.jpg" className="w-10 h-10 rounded mr-3" />
                        <div className="flex-1 overflow-hidden">
                            <div>
                                <span className="font-bold">Steve Schoger</span>
                                <span className="text-grey text-xs">11:46</span>
                            </div>
                            <p className="text-black leading-normal">The slack from the other side.</p>
                        </div>
                    </div>
                  </div>
                </div>
                  {/* <img
              className="md:max-w-none mx-auto rounded"
              src={require("../images/features-home-bg-01.png")}
              width="500"
              height="375"
              alt="Features bg"
            />
            <img
              className="md:max-w-none absolute w-full left-0 transform animate-float"
              src={require("../images/features-home-element-01.png")}
              width="500"
              height="147"
              alt="Element 01"
              style={{ top: "22%" }}
            />
            <img
              className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500"
              src={require("../images/features-home-element-02.png")}
              width="500"
              height="158"
              alt="Element 02"
              style={{ top: "39%" }}
            />
            <img
              className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000"
              src={require("../images/features-home-element-03.png")}
              width="500"
              height="167"
              alt="Element 03"
              style={{ top: "77%" }}
            /> */}
                
              </Transition>
              {/* Item 2 */}
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div className="relative inline-flex flex-col">
                  <div className="md:max-w-none mx-auto rounded">
                    Slack content #2
                  </div>
                  {/* <img
              className="md:max-w-none mx-auto rounded"
              src={require("../images/features-home-bg-01.png")}
              width="500"
              height="375"
              alt="Features bg"
            />
            <img
              className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000"
              src={require("../images/features-home-element-03.png")}
              width="500"
              height="167"
              alt="Element 03"
              style={{ top: "18%" }}
            />
            <img
              className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500"
              src={require("../images/features-home-element-02.png")}
              width="500"
              height="158"
              alt="Element 02"
              style={{ top: "40%" }}
            />
            <img
              className="md:max-w-none absolute w-full left-0 transform animate-float"
              src={require("../images/features-home-element-01.png")}
              width="500"
              height="147"
              alt="Element 01"
              style={{ top: "79%" }}
            /> */}
                </div>
              </Transition>
              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div className="relative inline-flex flex-col">
                  <div className="md:max-w-none mx-auto rounded">
                    Slack content #3
                  </div>
                  {/* <img
              className="md:max-w-none mx-auto rounded"
              src={require("../images/features-home-bg-01.png")}
              width="500"
              height="375"
              alt="Features bg"
            />
            <img
              className="md:max-w-none absolute w-full left-0 transform animate-float"
              src={require("../images/features-home-element-01.png")}
              width="500"
              height="147"
              alt="Element 01"
              style={{ top: "22%" }}
            />
            <img
              className="md:max-w-none absolute w-full left-0 transform animate-float animation-delay-500"
              src={require("../images/features-home-element-02.png")}
              width="500"
              height="158"
              alt="Element 02"
              style={{ top: "39%" }}
            />
            <img
              className="md:max-w-none absolute w-full left-0 bottom-0 transform animate-float animation-delay-1000"
              src={require("../images/features-home-element-03.png")}
              width="500"
              height="167"
              alt="Element 03"
              style={{ top: "77%" }}
            /> */}
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );};

export default SlackSection;