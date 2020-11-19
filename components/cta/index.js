import SignupForm from "components/signup-form.js";

const CTA = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                <span className="block">Ready to join the tribe?</span>
              </h2>
              <p className="mt-4 text-md leading-6 text-indigo-200">
                Also, unlock perks from our awesome partners - Krisp.ai,
                RemoteLeaf and Brain.fm
              </p>
              <SignupForm />
            </div>
          </div>
          <div className="relative pb-3/5 -mt-6 md:pb-1/2">
            <img
              className="absolute inset-0 w-full h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="/homepage/slack_screenshot.png"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
