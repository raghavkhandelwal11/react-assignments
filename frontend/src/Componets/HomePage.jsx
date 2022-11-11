import React from "react";
import img1 from '../manOnPhone.png';

const HomePage = () => {
    return(
        <div className="flex bg-purple-100">
            <div className="main bg-purple-100 pb-12">
            <div className="text-5xl h-44 pt-14 pl-12">
                The best phones in the town
            </div>
            <p className="py-3 mx-12 w-4/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odit esse sint officiis! Nam, reprehenderit. Delectus vel est quidem, excepturi minima tempora asperiores, quibusdam culpa iste sequi nulla eligendi ullam.
            </p>
            <button className="bg-purple-500 rounded-md w-1/5 py-3 mx-12 text-white hover:bg-purple-900 hover:text-slate-300">Buy Now</button>
            <button className="bg-purple-500 rounded-md w-1/5 py-3 text-white hover:bg-purple-900 hover:text-slate-300">Contact US</button>

            
        </div>

        <div>
            <img className="w-4/5 relative right-1/4 top-5" src={img1} alt="" />
        </div>
        </div>
        
    );
}

export default HomePage;