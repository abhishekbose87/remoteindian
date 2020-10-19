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
        <div class="grid md:grid-cols-2 gap-3 items-start">
          <div>
            <img src="https://via.placeholder.com/552x270" />
          </div>
          <div class="grid md:text-left">
            <h3>ScaleReal Technologies</h3>
            <p>
              ScaleReal is a team of like minded people building high quality
              products. They believe in Open, Remote and Agile work culture
              apart from Technology, People, Process and Strategy.
            </p>
            <div>Icon</div>
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
