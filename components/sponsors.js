const Sponsors = () => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-10"></div>
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
          <h1 className="h2 mb-4">
            A community that is accessible for everyone
          </h1>
          <p className="text-lg text-gray-600">
            A big thanks to our sponsors and patrons for supporting the
            development of the RemoteIndian project.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-0.5 lg:mt-8 items-center justify-center justify-items-center">
          <div className="flex flex-col items-center">
            <img
              className=""
              src="/homepage/patrons/scalereal.png"
              alt="Todoist"
            />
          </div>
          <div className="flex flex-col items-center flex-grow">
            <img
              className=""
              src="/homepage/patrons/vertistudio.png"
              alt="Todoist"
            />
          </div>
          <div className="h4 text-base mt-2">
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
          <div className="h4 text-base mt-2">
            Home of real people who love WordPress and beyond{" "}
            <a href="https://vertistudio.com/">
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
          <img className="" src="/homepage/patrons/patrons.png" alt="Todoist" />
          <h2 className="h4 text-md">&nbsp;and 30+ patrons</h2>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
