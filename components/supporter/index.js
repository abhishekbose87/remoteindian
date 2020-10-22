
const SupporterSection = ({title, file}) => {
    const supporters = require(`../../content/patrons/${file}.json`);
    return (
      <div className="mt-20 grid gap-4 justify-items-center">
        <h2 className="">{title}</h2>
        <div className="flex justify-center flex-wrap container">
          {supporters.map((supporter) => (
            <div className="rounded overflow-auto  shadow-lg bg-white m-3 sm:w-1/3 md:w-1/5 grid">
              <img
                className="rounded-full mx-auto mt-4 w-3/4"
                src="https://via.placeholder.com/104x104"
              />
              <div className="font-bold my-2 px-2 text-center text-gray-900">
                {supporter.name}
              </div>
              <div className="mx-auto self-end mb-2">
                <a href={supporter.url}>
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
          ))}
        </div>
      </div>
    );
}

export default SupporterSection;


