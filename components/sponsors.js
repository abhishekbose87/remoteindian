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
            A big thanks to ScaleReal (our long-term sponsor) and our patrons
            for their generous support that keeps the RemoteIndian project
            independent and inclusive for everyone 🤗
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:mt-8 items-center justify-center justify-items-center">
          <div className="flex flex-col items-center w-1/2 max-w-md shadow-md p-4">
            <img
              className=""
              src="/homepage/patrons/scalereal.png"
              alt="ScaleReal"
            />
          </div>
          <div className="text-sm text-gray-700 mt-6">
            Build applications that scale beyond reality{" "}
            <a href="https://scalereal.com/" target="_blank">
              <svg
                className="w-6 h-6 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </a>
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
