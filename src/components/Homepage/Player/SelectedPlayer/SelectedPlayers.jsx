import React, { useState } from 'react';
import { MdOutlineHourglassEmpty } from "react-icons/md";
import Selectedcard from '../../../UI/Selectedcard';

const SelectedPlayers = ({selectedplayers,setselectedplayers,coin,setcoin}) => {

    const hadledeleteselectedplayer=(player)=>{
        const filteredplayer=selectedplayers.filter(selectedplayer=>selectedplayer.playerName!==player.playerName);

        setselectedplayers(filteredplayer);
        setcoin(coin+player.price)


7
    }


    return (
        <div className='space-y-4'>
            {selectedplayers.length==0? 

                 <div className=' h-[450px] flex items-center justify-center   flex-col gap-4 font-semibold text-xl'>   
                 <MdOutlineHourglassEmpty />
                    <h2>No player selected</h2> 
                    <h2>Go to available to select player</h2>
                    
                    </div>
                  :
                selectedplayers.map((player,ind)=>{

                 return( 
                    <Selectedcard key={ind} player={player} hadledeleteselectedplayer={hadledeleteselectedplayer}></Selectedcard>
                 );

                })
            }
        </div>
    );
};

export default SelectedPlayers;