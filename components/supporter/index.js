
const SupporterSection = ({title, file}) => {
    const supporters = require(`../../content/patrons/${file}.json`);
    return (
      <div class="mt-20 grid gap-4 justify-items-center">
        <h2 class="">{title}</h2>
        <div class="flex justify-center flex-wrap">
          {supporters.map((supporter) => (
            <div class="rounded overflow-hidden shadow-lg bg-white m-3 sm:w-1/3 md:w-1/6 grid">
              <img
                class="rounded-full mx-auto mt-4"
                src="https://via.placeholder.com/104x104"
              />
              <div class="font-bold my-2 px-2 text-center text-gray-900">
                {supporter.name}
              </div>
              <p class="text-gray-700 text-base text-center self-end">{supporter.url}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default SupporterSection;


