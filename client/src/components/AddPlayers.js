import React, { Component } from "react";
import '../css/styles.css'
import Golfplayer from '../images/golfplayer.jpg'
import PlayerList from './PlayerList'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class AddPlayers extends Component {
  constructor(props){
    super(props);
      this.state = {
    players:[],
      currentPlayer:{
        text:'',
        key:''
      }
    }
    this.addPlayer = this.addPlayer.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deletePlayer = this.deletePlayer.bind(this);
    this.editPlayer = this.editPlayer.bind(this);
  }
    

  handleInput = (e) => {
     this.setState({
       currentPlayer:{
         text: e.target.value,
         key: Date.now()
       }
     })
   }

  addPlayer = (e) => {
    e.preventDefault();
    const newPlayer = this.state.currentPlayer;
    console.log(newPlayer);
    if(newPlayer.text !==""){
      const newPlayers = [...this.state.players, newPlayer];
    this.setState({
      players: newPlayers,
      currentPlayer:{
        text:'',
        key:''
      }
    })
    }
  }
 
  deletePlayer = (key) => {
    const filteredPlayers= this.state.players.filter(player =>
      player.key!==key);
    this.setState({
      players: filteredPlayers
    })
  }

  editPlayer = (text, key) => {
    console.log("players:"+this.state.players);
    const players = this.state.players;
    players.map(player =>{      
      if(player.key===key){
        console.log(player.key +"    "+key)
        player.text= text;
      }
    })
    this.setState({
      players: players
    }) 
  }

  handleSubmit = (e) => {
    e.preventDefault()
   this.setState({
      players: this.state.players
   });
   
    }

render(){
  return (
    <div className="player-container">
      <img src={Golfplayer} alt="golf player" className="player-image"/>   
      <div className="form-container">
        <form className="addplayer-form" onSubmit={this.addPlayer}>
          <input type="text" placeholder="Add Player" 
              value= {this.state.currentPlayer.text} 
              onChange={this.handleInput}>
          </input>
          <button type="submit">Add</button>
        </form>
        <p>{this.state.players.text}</p>              
    
      <PlayerList players={this.state.players} deletePlayer={this.deletePlayer} editPlayer={this.editPlayer} />
        <button className="start"
          onClick={this.handleSubmit}
          type="submit">
            Start Game
        </button>
      </div> 
        
    </div>
 );
}
}

export default AddPlayers;
