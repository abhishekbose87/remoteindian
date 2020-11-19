const Testimonials = () => {
  return (
    <section>
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-6 md:py-10">
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
        <h1 className="h2 mb-4">A community that works for you</h1>
        <p className="text-lg text-gray-600">Don’t take our word!</p>
      </div>

      <div className="max-w-screen-xl mx-auto md:grid md:grid-cols-3 md:px-6 lg:px-8 items-center">
        <Testimonial
          content="PSA: If you are in India and are suddenly finding yourself working@home, we
          have a 1000+ people strong remote-indian community that you must join.
          Find some <strong>amazing folks</strong> who have been <strong>doing this for sometime
          now</strong>, are <strong>super helpful</strong> and <strong>know what it takes.</strong>"
          name="Saurabh Jain"
          twitter="saurabhj"
        />
        <Testimonial
          content="<p>+1 to check out @remoteindian!</p>
<br/>
<p>Joined the slack couple of weeks ago. <strong>Fairly low volume</strong> and <strong>interesting conversations</strong> 💯</p>"
          name="Nikhita"
          twitter="TheNikhita"
        />
        <Testimonial
          content="Remote work can be <strong>frustrating and unrewarding but it doesn't have to be</strong>. If you are embracing remote work or just working from home due to recent circumstances, join @abhishekbose87 and <strong>other awesome folks who are here to make it easier for you</strong>"
          name="Sankalp Agarwal"
          twitter="shanky"
        />
      </div>
      </div>
    </div>
    </section>
  );
};

const Testimonial = (props) => {
  return (
    <div className="py-6 px-4 sm:px-6 md:flex md:flex-col md:py-8">
      <blockquote className="mt-8 md:flex md:flex-col p-6 bg-gray-200">
        <div className="relative leading-7 font-medium gray-700 md:flex-grow">
          <svg
            className="absolute top left-0 transform -translate-x-3 -translate-y-10 h-8 w-8 text-indigo-600"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <div
            className="relative"
            dangerouslySetInnerHTML={{
              __html: props.content,
            }}
          ></div>
        </div>
        <footer className="mt-8">
          <div className="flex items-center">
            <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-base leading-6 font-medium gray-700">
                {props.name}
              </div>
              <div className="text-base leading-6 font-medium gray-700">
                @{props.twitter}
              </div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}

export default Testimonials;
