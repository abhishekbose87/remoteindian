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
            A big thanks to ScaleReal and our patrons for their generous support
            that keeps the RemoteIndian project independent and inclusive for
            everyone 🤗
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
            <a href="https://scalereal.com/">
              <svg
                className="fill-current w-6 h-6 mr-2 inline-block"
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
        <div className="flex justify-center items-center my-10 mt-20">
          <img
            className=""
            src="/homepage/patrons/patrons-image.png"
            alt="Patrons"
          />
          <h2 className="text-xl font-medium gray-700 ml-4 inline-block mr-4">
            and 30+ patrons
          </h2>
          <a href="/support">
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
