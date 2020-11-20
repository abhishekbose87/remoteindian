import SupporterSection from "components/supporter";
import SupportHeader from "components/support-header";
import Modal from "components/modal";
import { Mark } from "components/mark";
import DefaultLayout from "layouts/default/index";
import Nav from "components/nav";
import PageFooter from "components/page-footer/index";

import { supabase } from "../lib/supabase/api";
import Helmet from "../components/helmet";

export default function Support({
  top_supporters,
  supporters,
  contributors,
  bmc
}) {

  const patron_benefits = [
        {
          id: 1,
          text:
            "💌 Receive monthly insider emails - Let’s talk about the RemoteIndian project and make sure you get the best from it",
        },
        { id: 2, text: "📹 Unlock recordings of 20+ Zoom calls - Dive into topics like Personal Finance for Remote workers, Health Insurance or revisit AMAs with folks working in Doist, Zeit etc" },
        {
          id: 3,
          text:
            "❤️ Enter our Hall of Fame - You’ll be part of a page on our website dedicated to Patrons",
        },
      ]

  const tiers = {
    sponsor: {
      cta: "Sponsor the RI project",
      headline: "🌟 Sponsor the RI Project",
      amount: "7,000",
      benefits: [
        {
          id: 1,
          text:
            "📸 Your company logo will be displayed in the Sponsors section on the RemoteIndian website",
        },
        { id: 2, text: "📣 Shout-out on Twitter and in our Slack group" },
        {
          id: 3,
          text:
            "💌 I will share your product link, blog post or job posting in our newsletter once every month (This weekly newsletter gets delivered to 1300+ email subscribers with average open rates of 30% and click rates of 4-7%)",
        },
      ],
      priceId: "price_1HhpsrELWWA5un1p6JYcsryh",
    },
    top_supporter: {
      cta: "Become a Top supporter",
      headline: "🥇 Become a Top supporter",
      amount: "1,400",
      benefits: patron_benefits,
      priceId: "price_1HhpszELWWA5un1peNIfdTRy",
    },
    supporter: {
      cta: "Become a supporter",
      headline: "🙌 Become a supporter",
      amount: "700",
      benefits: patron_benefits,
      priceId: "price_1Hhpt5ELWWA5un1pVsvoRcOD",
    },
    contributor: {
      cta: "Become a contributor",
      headline: "🥤 Become a contributor",
      amount: "350",
      benefits: patron_benefits,
      priceId: "price_1HhpsiELWWA5un1pBV2oQ5wh",
    },
    bmc: {
      cta: "Buy me a coffee",
      headline: "☕ Buy me a coffee",
      amount: "150",
      benefits: patron_benefits,
      priceId: "price_1HhptBELWWA5un1p5wUVH82q",
    },
  };

  return (
    <DefaultLayout>
      <Helmet
        title="🙏 Please consider supporting the RemoteIndian Project"
        description="Your contribution keeps the community independent and inclusive for everyone 🤗"
      />
      <Nav />
      <div className="text-sm md:text-base">
        <SupportHeader />
        <div className="grid grid-rows-auto mt-4">
          <div className="row-start-2 row-end-4 col-span-full bg-gray-200 w-full"></div>
          <div className="row-start-1 row-end-3 flex justify-center items-center col-span-full">
            <div className="bg-white mt-4 p-8 pb-4 rounded-lg shadow-md w-10/12 md:w-3/4 border-2 border-red-600 border-solid">
              <h1 className="text-xl font-bold">Goal</h1>
              <div className="mt-4 mb-4">
                <p>
                  &#x20B9;27.5k of &#x20B9;35k{" "}
                  <span className="text-gray-600">per month</span>
                </p>
                <div className="bg-gray-400 w:30 md:w-64 h-3 rounded-lg mt-2">
                  <div
                    className="bg-red-600 h-full rounded-lg shadow"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="tracking-wide">
                When I reach a minimum viable income, I will build a new
                community space for the community to hangout.&nbsp;
                <strong>
                  It will be a bespoke coffee shop like digital experience with
                  all the slack archives migrated to this website.
                </strong>
                Something like GetMakerlog or IndieHackers.
              </div>
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
        <div className="section grid gap-4 container justify-items-center mt-20">
          <h2 className="h3 mb-4">🌟 Sponsors</h2>
          <div className="flex flex-col w-1/4">
            <img className="object-cover" src="/sponsors/scalereal.png" />
            <div className="flex flex-col sm:text-center md:text-left bg-gray-100 px-5 py-2 items-center">
              <h3>ScaleReal Technologies</h3>
              <div className="mb-2 sm:mx-auto md:mx-0 ">
                <a href="https://scalereal.com/">
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
          <Modal info={tiers.sponsor} />
        </div>
        <div className="grid grid-rows-auto justify-items-center">
          <div className="bg-gray-200 row-start-2 row-end-5 col-span-full w-full"></div>

          {/* Top Supporter */}
          <div className="row-start-1 row-end-3 container col-span-full">
            <SupporterSection
              title="🥇 Top Supporters"
              patrons={top_supporters}
              tier={tiers.top_supporter}
            />
          </div>

          {/* Others */}
          <div className="row-start-3 row-end-4 grid col-span-full container">
            {/* Supporter */}
            <SupporterSection
              title="🙌  Supporters"
              patrons={supporters}
              tier={tiers.supporter}
            />

            {/* Contributor */}
            <SupporterSection
              title="🥤 Contributors"
              patrons={contributors}
              tier={tiers.contributor}
            />

            {/* Buy me a Coffee */}
            <SupporterSection
              title="☕️ Buy me a Coffee"
              patrons={bmc}
              tier={tiers.bmc}
            />
          </div>

          {/* End  */}
        </div>
      </div>
      <PageFooter />
    </DefaultLayout>
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