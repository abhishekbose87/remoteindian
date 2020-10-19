import SupporterSection from "components/supporter";

export default function Support() {
  return (
    <div>
      <div class="grid justify-center text-center bg-gray-400 p-4">
        <div class="max-w-lg">
          <h3>A big Thank You to all our supporters 🙏</h3>
          <p>
            Your contribution keeps the RemoteIndian project independent and
            inclusive for everyone. Companies interested in sponsoring the
            RemoteIndian project, can reach out here! Individuals can support us
            via Patreon and RazorPay subscription links 🙌
          </p>
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
        <div class="row-start-4 row-end-6 col-span-full  max-w-xl text-center bg-black text-white p-10 m-10 mt-20">
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
