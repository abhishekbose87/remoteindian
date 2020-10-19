
const SupporterSection = ({title, file}) => {
    const supporters = require(`../../content/patrons/${file}.json`);
    return (
      <div class="mt-20 grid gap-4 justify-items-center">
        <h2 class="">{title}</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-5 gap-3 align-middle justify-center items-stretch">
          {supporters.map((supporter) => (
            <div class="max-w-sm rounded overflow-hidden shadow-lg supporter grid justify-items-center items-center grid-rows-auto z-10 bg-white">
              <img
                class="rounded-full mx-auto mt-4"
                src="https://via.placeholder.com/104x104"
              />
              <div class="font-bold text-xl my-2 px-2 text-center">
                <h4 class="text-sm">{supporter.name}</h4>
              </div>
                <p class="text-gray-700 text-base">{supporter.url}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default SupporterSection;


