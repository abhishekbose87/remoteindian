import supporters from "content/supporters";

export default function Support() {
  return (
    <div>
      <div class="grid justify-center text-center bg-gray-400 p-4">
        <div class="max-w-lg">
          <h3>A big Thank You to all our supporters 🙏</h3>
          <p>
            Your contribution keeps the RemoteIndian project independent and
            inclusive for everyone. Companies interested in sponsoring the
            RemoteIndian project, can reach out here! Individuals can support us
            via Patreon and RazorPay subscription links 🙌
          </p>
        </div>
      </div>

      {/* Sponsors */}
      <div class="section grid grid-flow-row gap-4 container">
        <h2 class="">Top Sponsor</h2>
        <div class="grid md:grid-cols-2 gap-3 items-start">
          <div>
            <img src="https://via.placeholder.com/552x270" />
          </div>
          <div class="grid md:text-left">
            <h3>ScaleReal Technologies</h3>
            <p>
              ScaleReal is a team of like minded people building high quality
              products. They believe in Open, Remote and Agile work culture
              apart from Technology, People, Process and Strategy.
            </p>
            <div>Icon</div>
          </div>
        </div>
      </div>

      <div class="grid grid-rows-auto justify-items-center">
        <div class="bg-gray-200 row-start-2 row-end-5 col-span-full w-full"></div>

        {/* Top Supporter */}
        <div class="row-start-1 row-end-3 container col-span-full section grid gap-4 justify-items-center">
          <h2 class="">Top Supporter</h2>
          <div class="grid md:grid-cols-6 sm:grid-cols-2 gap-3 align-middle justify-center items-stretch">
            {supporters.map((supporter) => (
              <div class="supporter grid gap-1 justify-items-center items-center">
                <div class="">
                  <img
                    class="rounded-full"
                    src="https://via.placeholder.com/104x104"
                  />
                </div>
                <h4 class="text-sm">{supporter.name}</h4>
                <p class="self-end">{supporter.url}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Others */}
        <div class="row-start-3 row-end-4 grid col-span-full container">
          {/* Supporter */}
          <div class="section grid gap-4 justify-items-center">
            <h2 class="">Supporter</h2>
            <div class="grid md:grid-cols-6 sm:grid-cols-2 gap-3 align-middle justify-center items-stretch">
              {supporters.map((supporter) => (
                <div class="supporter grid gap-1 justify-items-center">
                  <div class="">
                    <img
                      class="rounded-full"
                      src="https://via.placeholder.com/104x104"
                    />
                  </div>
                  <h4 class="text-sm text-center">{supporter.name}</h4>
                  <p class="self-end">{supporter.url}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contributor */}
          <div class="section grid gap-4 justify-items-center">
            <h2 class="">Contributor</h2>
            <div class="grid md:grid-cols-6 sm:grid-cols-2 gap-3 align-middle justify-center items-stretch">
              {supporters.map((supporter) => (
                <div class="supporter grid gap-1 justify-items-center">
                  <div class="">
                    <img
                      class="rounded-full"
                      src="https://via.placeholder.com/104x104"
                    />
                  </div>
                  <h4 class="text-sm text-center">{supporter.name}</h4>
                  <p class="self-end">{supporter.url}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Buy me a Coffee */}
          <div class="section grid gap-4 justify-items-center">
            <h2 class="">Buy me a Coffee</h2>
            <div class="grid md:grid-cols-6 sm:grid-cols-2 gap-3 align-middle justify-center items-stretch">
              {supporters.map((supporter) => (
                <div class="supporter grid gap-1 justify-items-center">
                  <div class="">
                    <img
                      class="rounded-full"
                      src="https://via.placeholder.com/104x104"
                    />
                  </div>
                  <h4 class="text-sm text-center">{supporter.name}</h4>
                  <p class="self-end">{supporter.url}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div class="row-start-4 row-end-6 col-span-full  max-w-xl text-center bg-black text-white p-10 m-10">
          <h3>A big Thank You to all our supporters 🙏</h3>
          <p>
            Your contribution keeps the RemoteIndian project independent and
            inclusive for everyone. Companies interested in sponsoring the
            RemoteIndian project, can reach out here! Individuals can support us
            via Patreon and RazorPay subscription links 🙌
          </p>
        </div>

        {/* End  */}
      </div>
    </div>
  );
}
