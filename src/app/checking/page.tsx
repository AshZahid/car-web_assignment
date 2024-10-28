import Link from "next/link";
export default function Form() {
    return(
         <div className="bg-gray-100">
             <h1 className="text-4xl font-semibold text-center uppercase">Enter Your Details</h1>
             <div>
             <form className="flex gap-5 justify-center items-center flex-col border mt-5">

               <input type="text" className="rounded-2xl p-2 border border-red-800 w-2/5" placeholder="Enter Your Name"/>
                 <input type="email" className="rounded-2xl p-2 border border-red-800 w-2/5" placeholder="Enter Your Email"/>
                 <input type="password" className="rounded-2xl p-2 border border-red-800 w-2/5" placeholder="Enter Your Password"/>
                 <input type="number" className="rounded-2xl p-2 border border-red-800 w-2/5" placeholder="Card Number"/>
                 <input type="text" className="rounded-2xl p-2 border border-red-800 w-2/5" placeholder="Address"/>

               <Link href="/thankyou">
                 <button className="text-white bg-blue-800 p-3 rounded-lg">Place Your Order</button>
                 </Link>
             </form>
           </div>
        </div>

      
    );
};