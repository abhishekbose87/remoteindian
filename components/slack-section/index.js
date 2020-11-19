import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition.js";

function SlackSection() {
 
   const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const finance_messages = [
    {
      id: 1,
      text: `Hi guys, I just left my job and started freelancing.
I am using PayPal and the fees are really horrible, how do you guys accept payments from foreign clients (Mostly US based companies)?
Also I don’t know anything about legalities of paperwork and taxes necessary, any suggestions of what’s necessary?
`,
      userName: "Abhishek",
    },
    {
      id: 2,
      text: `We used Xoom for the first payment but then client’s account was blocked as it is for personal use only. Not commercially. Then we used transferwise. It has lowest fees and also trustworthy. As for the taxes part, if you’re planning to continue this only then I suggest consult a CA, it will come a long way. He will suggest ways to save taxes and everything.
`,
      userName: "Dhanraj",
    },
    {
      id: 3,
      text: `Welcome to the group! There are a couple of good threads on #finance regarding your queries.
The general consensus on this group has been: 1) Bank wire transfers are best if your client agrees to it. You should set up an EEFC account. ICICI generally has good conversion rates.
Transferwise is probably the other best option. But client needs to have an account as well.
The other thing people have tried and liked (me included) is Payoneer. That gives you a US / UK bank account - so your client can pay locally and money gets converted to your Indian bank account.
`,
      userName: "Saurabh",
    },
  ];

  const gear_messages = [
    {
      id: 1,
      text: `How would you go about buying a brand new desktop today? I am seeing All-in-One PCs which aren't very exciting. Lenovo's website makes it really difficult to discover PCs that would serve your needs. Looking for i5 and above, 8GB and above, 128GB SSD, and Windows 10.
`,
      userName: "Amit",
    },
    {
      id: 2,
      text: `I would order components from amazon or flipkart and assemble it on my own. I recently ordered some components from mdcomputers. If you're looking for pre-built pc then ant-pc.com or easypc.in would be suitable. You can refer this website https://assembleyourpc.net/ for choosing a configuration
`,
      userName: "Muzammil",
    },
    {
      id: 3,
      text: `I use https://pcpartpicker.com/, make my part list and assemble. Assembled ones are way better value than branded, all-in-one ones. Here's a part list for something i assembled a few years back and that i use for work now
https://pcpartpicker.com/user/abhikrk/saved/#view=vh9sJx`,
      userName: "Abhik",
    },
    {
      id: 4,
      text: `Some amazing links here. @Amit S. which city are you based out of? If you are in one of the larger cities, you may even get better pricing from physical stores compared to online retailers.
If you are in Pune, can send you the number of my wholesale person in Pune - he generally has quite good prices.`,
      userName: "Saurabh",
    },
  ];

  const job_messages = [
    {
      id: 1,
      text: `Hi Folks, Hiring for multiple roles at Remo. Please let me know if anyone is interested. We are looking to hire people who have proven to be the best in their respective fields.

This is the list of openings: https://angel.co/company/remo-co/jobs

Can DM me if you have any questions.
`,
      userName: "Ashwin",
    },
    {
      id: 2,
      text: `Tribe, Small announcement and a big shoutout to RI 🙏 I’ve recently signed a full time contract with Remo. This wouldn’t have been possible otherwise. I have been a part of the community since an year now, the amount of knowledge and consciousness one could gain from RI is priceless (I’m sure almost every other post made across channels has something in store for someone ❤). It’s very hard to settle for less along with consistent discomfort from the toxic work culture and pay I have been through in Consulting and Product companies across in non-remote jobs. With one of the best cultures I’ve ever experienced I could definitely say with current remote gig I overcame those issues i have faced. Excited about the future 🚀
`,
      userName: "Bharadwaj P",
    },
    {
      id: 3,
      text: `Hi everyone, I have also joined in Remo as a full stack developer for full time contract. Big thanks to this community (great place to learn about remote culture)`,
      userName: "Chandravadanan",
    },
  ];

  return (
    <section className="relative my-12 mb-20">
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
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 md:mt-6"
            data-aos="fade-right"
          >
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
                    Find jobs before they are advertised on a job board
                  </div>
                  <div className="text-gray-600 text-sm">
                    High quality leads shared by members who are working in
                    awesome remote companies
                  </div>
                </div>
                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
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
                <div className="flex-grow">
                  <div className="font-bold leading-snug tracking-tight mb-1">
                    Get help on setting up a productive workspace
                  </div>
                  <div className="text-gray-600 text-sm">
                    Find useful tools and info to make remote work work for you.
                  </div>
                </div>
                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
                    Overcome lack of information on taxation and getting paid
                  </div>
                  <div className="text-gray-600 text-sm">
                    For eg. How to accept payment from foreign clients?
                  </div>
                </div>
                <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg
                    className="object-fill"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Tabs items */}
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 mb-8 md:mb-0 md:order-1"
            data-aos="zoom-y-out"
            ref={tabs}
          >
            <div className="relative flex flex-col">
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
                  <div className="md:max-w-none mx-auto rounded">
                    {job_messages.map((message) => (
                      <SlackMessage id={message.id} message={message} />
                    ))}
                  </div>
                </div>
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
                    {gear_messages.map((message) => (
                      <SlackMessage id={message.id} message={message} />
                    ))}
                  </div>
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
                    {finance_messages.map((message) => (
                      <SlackMessage id={message.id} message={message} />
                    ))}
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );};

const SlackMessage = ({message}) => {
  return (
    <div className="flex items-start mb-4 text-sm">
      <img
        src="https://pbs.twimg.com/profile_images/875010472105222144/Pkt9zqPY_400x400.jpg"
        className="w-10 h-10 rounded mr-3"
      />
      <div className="flex-1 overflow-hidden">
        <div>
          <span className="font-bold">{message.userName}</span>
        </div>
        <p className="text-black leading-normal">{message.text}</p>
      </div>
    </div>
  );
}

export default SlackSection;