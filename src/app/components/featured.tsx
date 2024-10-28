import Link from "next/link";
import Image from "next/image";
import toyotaimg from "../images/toyotaimg.jpeg";
import altoimg from "../images/altoimg.jpeg";
import honda2img from "../images/honda2img.jpeg";
import civicimg from "../images/civicimg.jpeg";
export default function FeaturedCar() {
    return(
        <div className="bg-gray-100">
            <h1 className="font bold text-2xl mt-10 ml-10">Featured New Cars</h1>
            <h2 className="text-blue-800 text-right">View All Cars</h2>
          
            <ol className=" flex gap-x-7 pl-10 mt-10 mb-5">
                <li>Popular</li>
                <li>Upcoming</li>
                <li>Newly Launched</li>
            </ol>
            
              <div className=" bg-gray-100 flex gap-x-7 item-center text-center ml-12 mb-7">
                <div>
                    <Link href="/cardetail1">
                    <Image src={toyotaimg} alt="toyota" className="h-56 w-56 item-center"
                     
                    /><br></br>
                    </Link>
                    <p className="text blue-800">Toyota Corolla</p>
                     <p className="text-green-800">PKR 59.7-75.5 lacs</p>
                    
                </div>

                <div>
                    <Link href="/cardetail2">
                    <Image src={altoimg} alt="alto" className="h-52 w-52"/><br></br>
                    <p className="text blue-800">Suzuki Alto</p>
                     <p className="text-green-800">PKR 23.3-30.5 lacs</p>
                     </Link>
                </div>

                <div>
                    <Link href="/cardetail3">
                    <Image src={honda2img} alt="honda" className="h-56 w-56"/><br></br>
                    <p className="text blue-800">Honda City</p>
                     <p className="text-green-800">PKR 46.5-58.5 lacs</p>
                     </Link>
                </div>

                <div>
                    <Link href="/cardetail4">
                    <Image src={civicimg} alt="civic" className="h-56 w-56"/><br></br>
                    <p className="text blue-800">Honda Civic</p>
                     <p className="text-green-800">PKR 86.6-99.0 lacs</p>
                    </Link>
                     </div>
            
                         </div>
                
              </div>
              
        
    );
};