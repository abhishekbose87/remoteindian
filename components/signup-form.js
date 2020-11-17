const SignupForm = () => {
  return (
    <div className="mt-3 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
  <form action="#" method="POST" className="mt-3 sm:flex">
    <input
      aria-label="Email"
      className="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1 "
      placeholder="Enter your email"
    />
    <button
      type="submit"
      className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:border-white-900 focus:shadow-outline-gray active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
    >
      Join Us
    </button>
  </form>
  <p className="mt-1 text-sm leading-5 text-left text-gray-500">
    You'll receive slack invite link on this email.
  </p>
</div>
  );
};

export default SignupForm;



