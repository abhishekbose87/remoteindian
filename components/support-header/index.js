import Modal from "components/modal";
import Link from "next/link";
import StripeCheckout from "components/StripeCheckout";

const SupporterHeader = () => {

 return (
   <div className="bg-gray-400 p-2 mt-0 fixed w-full z-10 top-0">
     <div className="flex flex-col md:flex-row items-center p-2 md:p-4 justify-center space-x-4">
       <div>
         <a href="#" className="flex">
           <img
             className="h-10 md:h-12 w-auto rounded-full"
             src="https://gravatar.com/avatar/44b0a8e0642abcaef47c43de389a0dca?size=200"
             alt="Abhishek's image"
           />
         </a>
       </div>
       <div className="flex flex-col md:flex-row items-center justify-between align-middle gap-2">
         <nav className="text-center md:text-left text-sm md:text-base">
           <span>
             Abhishek is creating an encouragement network for remote workers in
             India
           </span>
           &nbsp;
           <div className="sm:block md:inline">👨‍💻&nbsp;🇮🇳&nbsp;👩‍💻</div>
         </nav>
         <div className="flex flex-col md:flex-row items-center justify-center place-items-center px-8 text-sm md:text-base">
           {/* <a
             href="mailto:abhishek@remoteindian.com?subject=I'd like to support the RI project"
             target="_blank"
           >
             <button className="bg-orange-400 hover:bg-orange-500 py-2 px-2 rounded-lg text-black text-extrabold">
               Become a patron
             </button>
           </a> */}
           {/* <Modal /> */}
           {/* <Link href="/donate-with-checkout">
             <a className="card checkout-style-background">
               <h2 className="bottom">Donate with Checkout</h2>
               <img src="/checkout-one-time-payments.svg" />
             </a>
           </Link> */}
           <StripeCheckout/>
         </div>
       </div>
     </div>
   </div>
 );
}


export default SupporterHeader;