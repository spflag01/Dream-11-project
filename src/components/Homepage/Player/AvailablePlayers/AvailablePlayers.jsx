import React from 'react';
import Card from '../../../UI/Card';

const AvailablePlayers = ({players,setcoin,coin,selectedplayers,setselectedplayers}) => {

    //console.log("players:.",players)
   
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 gap-3'>

            {
                players.map((player,ind)=>{
                    //console.log(player)
                    return   (
                        <Card 
                        key={ind}
                        player={player} 
                        setcoin={setcoin} 
                        coin={coin} 
                        setselectedplayers={setselectedplayers} selectedplayers={selectedplayers}>
                            
                        </Card>
                 
                    );
                })
            }
            
        </div>
        </div>
    );
};

export default AvailablePlayers;