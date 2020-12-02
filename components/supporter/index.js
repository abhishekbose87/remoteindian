import Modal from "components/modal";

const SupporterSection = ({title, patrons, tier}) => {
    return (
      <div className="my-4 md:m-10 grid justify-items-center">
        <h2 className="h3 mt-8 mb-4">{title}</h2>
        <div className="flex justify-center flex-wrap">
          {patrons.map((supporter) => (
            <div
              className="rounded overflow-show  shadow-lg bg-white m-3 supporter-card grid"
              key={supporter.id}
            >
              <img
                className="rounded-full mx-auto mt-4 w-4/5 h-1/2"
                src={supporter.image_url}
              />
              <div className="font-bold my-2 px-2 text-center text-gray-900">
                {supporter.name}
              </div>
              <div className="mx-auto self-end mb-2">
                <a href={supporter.link}>
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
        <Modal info={tier} />
      </div>
    );
}

export default SupporterSection;


