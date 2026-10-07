import React from 'react';
import { MdAutoDelete } from "react-icons/md";
import { FaUserInjured } from "react-icons/fa";
import { MdOutlineHourglassEmpty } from "react-icons/md";

const Selectedcard = ({player,hadledeleteselectedplayer}) => {
    return (
        <div>
             <div  className='flex items-center gap-6 justify-between py-3 px-4 rounded-2xl border'> 
                   
                   <div className='flex items-center gap-4 py-2'>

                    <img src={player.playerImg} alt="" className='h-[100px] w-auto rounded-md  ' />
                    <div>
                        <h2 className='flex items-center gap-2  text-2xl'> 
                            
                         <FaUserInjured />
                         <p className='font-semibold'>{player.playerName}</p>


                        
                        </h2>
                        <p>{player.type}</p>
                    </div>

                   </div>

                   <button  className='btn text-red-300 ' onClick={()=>
                    hadledeleteselectedplayer(player)}>
                     <MdAutoDelete />
                   </button>
                 
                 </div>
                 
        </div>
    );
};

export default Selectedcard;