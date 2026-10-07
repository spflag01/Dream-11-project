import React from 'react';
import currencyImg from "../../assets/Currency.png"
import logo from "../../assets/logo.png"
const Navbar = ({coin}) => {
  console.log("Navbar coin:", coin);

    return (
         <div className="container mx-auto  navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
      <img src={logo} alt="" />
    </a>
  </div>
  <div className="flex-none">
    <button className="flex items-center gap-2 font-bold text-xl">
        {coin} coins
      <img src={currencyImg} alt="" />
    </button>
    
  </div>
</div>
    );
};

export default Navbar;