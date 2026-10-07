import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { toast } from 'react-toastify';
const Card = ({player,setcoin,coin,selectedplayers,setselectedplayers}) => {

    const [isSelected,setIsSelected]=useState(false);

    const handleChosePlayer=()=>{
        


        
            let newcoin=coin-player.price
            if (newcoin>=0){
                toast(`${player.playerName} is selected`);
                setIsSelected(true)
                setcoin(newcoin);
            }
            else{
                toast.error("Not enough coin");
                return;
            }
            
            setselectedplayers([...selectedplayers,player]);
            
    };
    
    return (
           <div className="card bg-base-100 shadow-sm">
        <figure>
       <img
       src={player.playerImg}
      alt="Shoes" 
      className="h-[700px] w-full rounded-md object-cover"/>
      </figure>
       <div className="card-body">
      <h2 className="card-title flex items-center gap-4">
        <FaUserAlt/>
        {player.playerName}
        </h2>

        <div className='flex justify-between'>
            <div className='flex items-center gap-4'>
                <FaFlag />
            <p className='flex gap-2 items-center'>{player.country}</p>
            </div>
        <button className='btn '>{player.type}</button>
        </div>

         <div className="divider"></div>

         <h2 className='font-bold'>({player.rating}) </h2>
         <div className='flex justify-between gap-4'>
            <p>{player.battingStyle}</p>
            <p className='text-right'>{player.bowlingStyle}</p>
         </div>

    
    <div className="card-actions justify-between items-center">
        <p className='font-semibold'>{player.price}</p>
      <button
      onClick={handleChosePlayer}

      disabled={isSelected ? true:false}
      className="btn btn-primary">{isSelected===true? "Selected" :"chose Player"}</button>
    </div>
  </div>
                </div>
    );
};

export default Card;