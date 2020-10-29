import React from "react";
import Link from "next/link";
import StripeCheckout from "components/StripeCheckout";

export default function Modal({info: {cta, amount, benefits, priceId}}) {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => setShowModal(true)}
      >
        {cta}
      </button>
      <a onClick={() => setShowModal(true)} type="button">
        What are the benefits?
      </a>
      {showModal ? (
        <>
          <div
            className="text-xs md:text-base justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-2  bg-smoke-light"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-lg">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none self-end m-2 cursor-pointer">
                  ×
                </span>
                {/*header*/}
                <div className="flex flex-col items-center justify-center">
                  <h4 className="font-semibold">🏆 Become a sponsor</h4>
                  <p>
                    &#x20B9;{amount}{" "} per month
                  </p>
                </div>
                {/*body*/}
                <div className="px-2 md:px-4 flex-auto">
                  <p className="text-gray-800 leading-relaxed">
                    {benefits.map((benefit) => (
                      <p key={benefit.id}>{benefit.text}</p>
                    ))}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center px-6 py-2">
                  <StripeCheckout priceId={priceId} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
