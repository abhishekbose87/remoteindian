import React from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function StripeCheckout({priceId}) {

    const handleClick = async (event) => {
      // Get Stripe.js instance

      const stripe = await stripePromise;

      // Call your backend to create the Checkout Session
      const response = await fetch(`/api/create-checkout-session/${priceId}`,
        {
          method: "POST",
        }
      );

      const session = await response.json();

      // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      }
    };

    return (
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white  active:bg-blue-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-2"
        type="button"
        style={{ transition: "all .15s ease" }}
        role="link"
        onClick={handleClick}
      >
        Support the RI project
      </button>
    );
}