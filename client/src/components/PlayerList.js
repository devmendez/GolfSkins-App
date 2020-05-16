import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function PlayerList(props){
    const players = props.players;
    const playerList = players.map(player =>
        {
            return <div className="list" key={player.key}>
            <p>
                <input type="text" id={player.key} value={player.text} onChange={(e)=>{
                    props.editPlayer(e.target.value, player.key)}}/>
                <span>            
                <FontAwesomeIcon className="icons" onClick={() => {
                    props.deletePlayer(player.key)
                }} icon="trash" />
                </span>
            </p>
     
    </div>})
    return <div>
        {playerList}    
         </div>;
  }

  export default PlayerList;