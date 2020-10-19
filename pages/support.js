import SupporterSection from "components/supporter";
import { Mark } from "components/mark";

export default function Support() {
  return (
    <div>
      <div class="grid grid-rows-auto">
        <div class="row-start-2 row-end-4 col-span-full bg-gray-200 w-full"></div>
        <div class="row-start-1 row-end-3 flex justify-center items-center col-span-full">
          <div class="bg-white mt-4 p-10 rounded-lg shadow-md w-3/4 border-t-2 border-l-2 border-red-600 border-solid">
            <h1 class="text-xl font-bold">
              Help me reach a Minimum Viable Income goal of <Mark>500$</Mark>
            </h1>
            <div class="mt-4 mb-10">
              <p class="text-gray-600">60% completed</p>
              <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2">
                <div class="bg-pink-500 w-3/5 h-full rounded-lg shadow"></div>
              </div>
            </div>

            <h2 class="tracking-wide">
              Your contribution keeps the RemoteIndian project independent and
              inclusive for everyone
            </h2>

            <a href="mailto: abhishek@remoteindian.com">
              <button class="bg-orange-400 hover:bg-orange-500 py-3 px-8 mt-4 rounded-lg text-black">
                Support me
              </button>
            </a>
          </div>
        </div>

        <div class="row-start-3 row-end-4 col-span-full grid justify-center text-center bg-gray-200 p-10  items-center">
          <svg class="heart mx-auto my-3" viewBox="0 0 32 29.6">
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
          <div class="">
            <h3>A big Thank You to all our current supporters 🙏</h3>
          </div>
        </div>
      </div>
      {/* Sponsors */}
      <div class="section grid gap-4 container justify-items-center m-20">
        <h2 class="">🌟 Sponsors</h2>
        <div class="grid md:grid-cols-2 items-stretch">
          <img src="https://via.placeholder.com/552x270" />
          <div class="grid sm:text-center md:text-left bg-gray-100 px-5 py-2 items-center">
            <h3>ScaleReal Technologies</h3>
            <p>
              ScaleReal is a team of like minded people building high quality
              products. They believe in Open, Remote and Agile work culture
              apart from Technology, People, Process and Strategy.
            </p>
            <div class="self-end mb-2 sm:mx-auto md:mx-0 ">
              <a href="#">
                <svg
                  class="fill-current w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-rows-auto justify-items-center">
        <div class="bg-gray-200 row-start-2 row-end-5 col-span-full w-full"></div>

        {/* Top Supporter */}
        <div class="row-start-1 row-end-3 container col-span-full">
          <SupporterSection title="🥇 Top Supporters" file="top_supporters" />
        </div>

        {/* Others */}
        <div class="row-start-3 row-end-4 grid col-span-full container">
          {/* Supporter */}
          <SupporterSection title="🙌  Supporters" file="supporters" />

          {/* Contributor */}
          <SupporterSection title="🥤 Contributors" file="contributors" />

          {/* Buy me a Coffee */}
          <SupporterSection title="☕️ Buy me a Coffee" file="bmc" />
        </div>

        {/* Footer */}
        <div class="row-start-4 row-end-6 col-span-full  w-4/5 md:w-2/5 text-center bg-black text-white p-10 m-10 mt-20">
          <h3>Like what we are doing?</h3>
          <a href="/signup">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
              Come join us!
            </button>
          </a>
        </div>

        {/* End  */}
      </div>
    </div>
  );
}
