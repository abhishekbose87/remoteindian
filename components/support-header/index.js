import Modal from "components/modal";
import Link from "next/link";
import StripeCheckout from "components/StripeCheckout";

const SupporterHeader = () => {

 return (
   <div className="bg-gray-200 p-2 mt-0 w-full">
     <div className="flex flex-col md:flex-row items-center p-2 md:p-4 justify-center space-x-4">
       <div>
         <a href="#" className="flex">
           <img
             className="w-12 md:w-24 lg:w-20 rounded-full"
             src="https://gravatar.com/avatar/44b0a8e0642abcaef47c43de389a0dca?size=200"
             alt="Abhishek's image"
           />
         </a>
       </div>
       <div className="flex flex-col md:flex-row items-center justify-between align-middle gap-2">
         <nav className="text-center md:text-left text-sm md:text-base">
           <span>
             Abhishek is creating a community that enables Indian engineers and
             product professionals to help each other navigate, balance and grow
             in a remote career.
           </span>
           &nbsp;
           <div className="sm:block md:inline">👨‍💻&nbsp;🇮🇳&nbsp;👩‍💻</div>
         </nav>
       </div>
     </div>
   </div>
 );
}


export default SupporterHeader;