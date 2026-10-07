import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayer/SelectedPlayers';

const Players = ({playersPromise,setcoin,coin}) => {
    //console.log(playersPromise);
    const players=use(playersPromise)
    //console.log(players)
     
    const [selectedType,setSelectedType]=useState("available");
     const [selectedplayers,setselectedplayers]=useState([]);

     //console.log("selectedplayers:", selectedplayers);


    return (
        <div  className='container mx-auto my-[60px]'>

            <div className='flex justify-between gap-4 items-center mb-[20px]'>
                {selectedType==="available"?  <h2 className='font-bold text-3xl '>available players</h2>:
                
                
                <h2 className='font-bold text-3xl'>Selected player  ({selectedplayers.length}/{players.length})

                </h2> }
                <div>
                    <button 
                    
                    onClick={()=>setSelectedType("available")}
                    className={`btn ${selectedType==="available"? "bg-[#E7FE29]":"" }  rounded-r-none rounded-r-xl`}>Available</button>


                    <button 
                    
                    onClick={()=>setSelectedType("selected")}
                    className={`btn ${selectedType==="selected"? "bg-[#E7FE29]":"" } rounded-l-none  rounded-r-xl`}>
                        Selected({selectedplayers.length})
                        
                        </button>
                </div>
                
                </div>
           

           {selectedType==="available"?  

           <AvailablePlayers  
           players={players} 
           setcoin={setcoin} 
           coin={coin} 
           setselectedplayers={setselectedplayers} 
           selectedplayers={selectedplayers}>

           </AvailablePlayers>: (
            
            <SelectedPlayers selectedplayers={selectedplayers} setselectedplayers={setselectedplayers} setcoin={setcoin}  coin={coin}>

            </SelectedPlayers>
        )
           }
        </div>
    );
};

export default Players;