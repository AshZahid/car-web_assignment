import Image from "next/image";
import Link from "next/link";
import civicimg from "../images/civicimg.jpeg"
export default function CarDetail4() {
    return(
        <div className="text-center item-center bg-gray-100 ">
            <h1 className="font-bold text-2xl underline mt-5">Honda Civic 2024 Price In Pakistan,Images,Reviews & Specs</h1>
            <Image src={civicimg} alt="toyota" className="h-64 w-64 mx-96 my-10" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, doloribus consequatur est asperiores repellat ab tempore<br></br> tenetur exercitationem modi officia quaerat eligendi sint facere non quod voluptas alias reiciendis? Quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quo debitis repudiandae <br></br>minus autem obcaecati cumque? Nostrum sequi quia aliquid itaque praesentium eveniet, fugit maxime! Dolores rem sapiente a quasi?</p>
        
           <p className="text-green-800 pt-5">PKR 50,000,00</p>

           <Link href="/checking">
           <button className="rounded text-white bg-blue-900 mb-12 p-3 m-5">Make Payment</button>
         </Link>
        </div>
    )
}