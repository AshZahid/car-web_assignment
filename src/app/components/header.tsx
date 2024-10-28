import Link from "next/link";
import Image from "next/image";
import logo2 from "../images/logo2.jpg";
import logoimg from "../images/logoimg.jpg";
export default function Header() {
    return(
        <div>
            <header>
                <nav className="text-white bg-black">
                    <div className="flex">
                    <Image src={logo2} alt="logo2" className="h-5 w-3 ml-7" 
                    />
                    
                    <p>Download app via SMS</p>
                    
                    <ol className="flex justify-end w-full text-right item-end space-x-5 pr-10">
                    <li className="text-red-600">اردو </li>
                        <li>| Sing Up </li>
                        <li>| Sign In</li>
                        </ol>
                        </div>
                    
                    <hr></hr>
                    <div className="flex space-x-9 pt-8" >
                   <Image src={logoimg} alt="logo" className="h-12 w-28 bg-black text-white ml-7 mb-10"
                   /> 
                   
                 
                   <Link href="">Used Cars</Link>
                   <Link href="">New Cars</Link>
                   <Link href="">Bikes</Link>
                   <Link href="">Auto Store</Link>
                   <Link href="">Videos</Link>
                   <Link href="">Forums</Link>
                   <Link href="">Blog</Link>
                   <Link href="">More</Link>
                   <button className="bg-red-600 mb-12 p-3">Post an Ad</button>
                   </div>
                </nav>
            </header>
        </div>
    );
};