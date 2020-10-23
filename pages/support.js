import SupporterSection from "components/supporter";
import SupportHeader from "components/support-header";
import { Mark } from "components/mark";

import { supabase } from "../lib/supabase/api";

export default function Support({
  top_supporters,
  supporters,
  contributors,
  bmc
}) {
  return (
    <div className="text-sm md:text-base">
      <SupportHeader />
      <div className="grid grid-rows-auto mt-48 md:mt-32">
        <div className="row-start-2 row-end-4 col-span-full bg-gray-200 w-full"></div>
        <div className="row-start-1 row-end-3 flex justify-center items-center col-span-full">
          <div className="bg-white mt-4 p-8 pb-4 rounded-lg shadow-md w-10/12 md:w-3/4 border-t-2 border-l-2 border-red-600 border-solid">
            <h1 className="text-xl font-bold">Goal</h1>
            <div className="mt-4 mb-4">
              <p>
                $310 of $500 <span className="text-gray-600">per month</span>
              </p>
              <div className="bg-gray-400 w:30 md:w-64 h-3 rounded-lg mt-2">
                <div className="bg-pink-500 w-3/5 h-full rounded-lg shadow"></div>
              </div>
            </div>
            <div className="tracking-wide">
              A steady income, where I can live comfortably, will allow me to
              execute the ideas that will create more value for everyone in the
              tribe.
            </div>
            <blockquote className="p-2 md:p-4 mt-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
              For example, I will{" "}
              <strong>
                build a bespoke coffee shop like digital space for the RI
                community to hangout
              </strong>
              . Something like GetMakerlog or IndieHackers. Slack is a solid
              tool for building online communities, but it feels limiting in
              many ways and the experience is similar to what you would get in a
              Starbucks
            </blockquote>
          </div>
        </div>

        <div className="row-start-3 row-end-4 col-span-full grid justify-center text-center bg-gray-200 p-10  items-center">
          <svg className="heart mx-auto my-3" viewBox="0 0 32 29.6">
            <path
              d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
            />
          </svg>
          <div className="">
            <h3>A big Thank You to all our current supporters 🙏</h3>
            <p>
              Your contribution keeps the RemoteIndian project independent and
              inclusive for everyone 🤗
            </p>
          </div>
        </div>
      </div>
      {/* Sponsors */}
      <div className="section grid gap-4 container justify-items-center m-20">
        <h2 className="">🌟 Sponsors</h2>
        <div className="grid md:grid-cols-2 items-stretch">
          <img src="https://via.placeholder.com/552x270" />
          <div className="grid sm:text-center md:text-left bg-gray-100 px-5 py-2 items-center">
            <h3>ScaleReal Technologies</h3>
            <p>
              ScaleReal is a team of like minded people building high quality
              products. They believe in Open, Remote and Agile work culture
              apart from Technology, People, Process and Strategy.
            </p>
            <div className="self-end mb-2 sm:mx-auto md:mx-0 ">
              <a href="#">
                <svg
                  className="fill-current w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-auto justify-items-center">
        <div className="bg-gray-200 row-start-2 row-end-5 col-span-full w-full"></div>

        {/* Top Supporter */}
        <div className="row-start-1 row-end-3 container col-span-full">
          <SupporterSection
            title="🥇 Top Supporters"
            patrons={top_supporters}
          />
        </div>

        {/* Others */}
        <div className="row-start-3 row-end-4 grid col-span-full container">
          {/* Supporter */}
          <SupporterSection title="🙌  Supporters" patrons={supporters} />

          {/* Contributor */}
          <SupporterSection title="🥤 Contributors" patrons={contributors} />

          {/* Buy me a Coffee */}
          <SupporterSection title="☕️ Buy me a Coffee" patrons={bmc} />
        </div>

        {/* End  */}
      </div>
    </div>
  );
}

function filter_function(patrons, type){
  patrons.filter(elem, function(elem) {
      return elem.plan === type
    })
}

const asyncFilter = async (type) => {
  let { body: patrons } = await supabase.from("patrons").select("*").eq('plan', type);
  return patrons;
};

export async function getStaticProps() {
  try {
    
    
    let top_supporters = await asyncFilter('Become a TOP supporter');
    let supporters = await asyncFilter("Become a supporter");
    let contributors = await asyncFilter("Become a contributor");
    let bmc = await asyncFilter("Buy me a coffee");


    return {
      props: {
        top_supporters: top_supporters,
        supporters: supporters,
        contributors: contributors,
        bmc: bmc,
      }
    };
  } catch (error) {
    console.log("Error: ", error);
  }
}