import React, { Component } from "react";
import ReactDOM from "react-dom";

class SignupForm extends Component {

  componentDidMount(){
    var loadScript = function (src) {
      var tag = document.createElement("script");
      tag.async = false;
      tag.src = src;
      var body = document.getElementsByTagName("body")[0];
      body.appendChild(tag);
    };

    loadScript(
      "https://emailoctopus.com/bundles/emailoctopuslist/js/1.6/form-recaptcha.js"
    );
    loadScript(
      "https://emailoctopus.com/bundles/emailoctopuslist/js/1.6/form-embed.js"
    );
  }

  render(){
    return (
      <div className="mt-3 sm:max-w-lg sm:mx-auto sm:text-center md:text-left lg:mx-0">
        <p className="emailoctopus-success-message text-white"></p>
        <p className="emailoctopus-error-message text-white"></p>
        <form
          action="https://emailoctopus.com/lists/1ea3c5aa-7d64-11e9-9307-06b4694bee2a/members/embedded/1.3s/add"
          method="POST"
          className="mt-3 sm:flex emailoctopus-form"
          data-message-success="Thanks for subscribing!"
          data-message-missing-email-address="Your email address is required."
          data-message-invalid-email-address="Your email address looks incorrect, please try again."
          data-message-bot-submission-error="This doesn't look like a human submission."
          data-message-consent-required="Please check the checkbox to indicate your consent."
          data-message-invalid-parameters-error="This form has missing or invalid fields."
          data-message-unknown-error="Sorry, an unknown error has occurred. Please try again later."
          data-sitekey="6LdYsmsUAAAAAPXVTt-ovRsPIJ_IVhvYBBhGvRV6"
        >
          <input
            aria-label="Email"
            className="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1 "
            placeholder="Enter your email"
            name="field_0"
            id="field_0"
            type="email"
            required
          />
          <div aria-hidden="true" class="emailoctopus-form-row-hp">
            <input
              type="text"
              name="hpc4b27b6e-eb38-11e9-be00-06b4694bee2a"
              tabindex="-1"
              autocomplete="nope"
            />
          </div>
          <input type="hidden" name="successRedirectUrl"></input>
          <button
            type="submit"
            className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
          >
            Join Us
          </button>
        </form>
        <p className="mt-1 text-sm leading-5 text-left text-gray-500">
          You'll receive slack invite link on this email.
        </p>
      </div>
    );
  }
};

export default SignupForm;



