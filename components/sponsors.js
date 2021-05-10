const Sponsors = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-10"></div>
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
          <h1 className="header">A community that is</h1>
          <h1 className="header"> accessible for everyone</h1>
          <p className="tagline">
            A big thanks to ScaleReal and Appsmith (our long-term sponsors) and our patrons
            for their generous support that keeps the RemoteIndian project
            independent and inclusive for everyone 🤗
          </p>
        </div>

        <div className="section flex flex-col items-center mt-20">
          <h2 className="h3 mb-4">🌟 Sponsors</h2>
          <div className="flex justify-center flex-wrap">
            <div className="rounded overflow-show  shadow-lg bg-white m-3 sponsor-card grid">
              <img
                className="mx-auto mt-4 h-24 md:h-64 object-contain p-4 md:p-10"
                src="/sponsors/scalereal.png"
              />
              <div className="font-bold my-2 px-2 text-center text-gray-900">
                Build applications that scale beyond reality
              </div>
              <div className="mx-auto self-end mb-2">
                <a href="https://scalereal.com/" target="_blank">
                  <svg
                    className="fill-current w-4 h-4 mr-2"
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

            <div className="rounded overflow-show  shadow-lg bg-white m-3 sponsor-card grid">
              <img
                className="mx-auto mt-4 h-24 md:h-64 object-contain p-4 md:p-10"
                src="/sponsors/appsmith.png"
              />
              <div className="font-bold my-2 px-2 text-center text-gray-900">
                Open source framework to build internal tools
              </div>
              <div className="mx-auto self-end mb-2">
                <a href="https://appsmith.com/" target="_blank">
                  <svg
                    className="fill-current w-4 h-4 mr-2"
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

          <a href="/support" target="_blank">
          <div className="flex justify-center items-center my-10 mt-20">
            <img
              className=""
              src="/homepage/patrons/patrons-image.png"
              alt="Patrons"
            />
            <h2 className="text-xl font-medium gray-700 ml-4 inline-block mr-4">
              and 40+ patrons
            </h2>
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
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Sponsors;
