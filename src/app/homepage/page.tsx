export default function HomePage() {
    return(
        <div>
            <h1 className="text-center mt-7 text-lg font-bold">Sell Your Car on PakWheels and Get the Best Price</h1>
            <div className="flex m-7 ">
                <div className="ml-12 ">
                <h2 className="text-center font-bold text-blue-800">Post Your Ad on PakWheels</h2>
                <ol className="list-disc">
                    <li>Post Your Ad For Free in 3 Easy Step</li>
                    <li>Get Genuine Offer From Verified Buyers</li>
                    <li>Sell Your Car Fast at the Best Price</li>
                </ol>
                <button className="text-white bg-red-600 mb-12 p-3 m-5 rounded">Post your Ad</button>
               </div>

                  
                <h2 className="pt-10 ml-24 text-slate-400">OR</h2>
                
               <div className="ml-44">
                <h2 className="text-center font-bold text-blue-800">Try PakWheels Sell It For Me</h2>
                <ol className="list-disc">
                    <li>Dedicated Sales Expert to Sell Your Car</li>
                    <li>We Bargain For You And Share The Best Offer</li>
                    <li>We Ensure Safe & Secure Transaction</li>
                </ol>
                <button className="text-white bg-blue-600 mb-12 p-3 m-5 rounded">Register Your Car</button>
                </div>
            </div>
            <hr></hr>
        </div>
    );
};