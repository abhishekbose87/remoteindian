const Sponsors = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          A community that is accessible for everyone
        </h2>
        <p className="text-base leading-6 font-semibold uppercase text-gray-600 tracking-wider">
          The RemoteIndian project is made possible because of the support of
          sponsors and patrons.
        </p>
        <div className="mt-6 grid grid-cols-12  gap-0.5 lg:mt-8">
          <div className="col-span-6 flex flex-col items-center">
            <img
              className="self-center"
              src="/homepage/patrons/scalereal.png"
              alt="Todoist"
            />
            <div>Build applications that scale beyond reality</div>
          </div>
          <div className="col-span-6 flex flex-col items-center">
            <img
              className="self-center"
              src="/homepage/patrons/vertistudio.png"
              alt="Todoist"
            />
            <div>Home of real people who love WordPress and beyond</div>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <img className="" src="/homepage/patrons/patrons.png" alt="Todoist" />
          <h2>&nbsp;and 40+ Patrons</h2>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
