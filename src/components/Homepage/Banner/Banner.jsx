import React from 'react';
import BannerImg from '../../../assets/banner-main.png'

import Bgshad from '../../../assets/bg-shadow.png'

const Banner = () => {
    return (
      <div className="relative h-[400px] w-full overflow-hidden">
      
      <img src={Bgshad} alt=""className="absolute inset-0 h-full w-full object-cover"
/>
       

      <div className="relative flex h-full flex-col items-center justify-center text-center">
        
        <img
          src={BannerImg}
          className="mb-4 w-[130px]"
        />

        <h1 className="text-2xl font-bold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>

        <p className="mt-2 text-gray-300">
          Beyond Boundaries Beyond Limits
        </p>

        <button className="mt-5 rounded-lg bg-yellow-300 px-4 py-2 text-sm font-bold text-black">
          Claim Free Credit
        </button>

      </div>
    </div>
    );
};

export default Banner;