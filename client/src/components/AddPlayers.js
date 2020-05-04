import React, { Component } from 'react'
import { TextField, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';



class AddPlayers extends Component {
    state = {
      firstName: '',
      lastName: '',
      message: null
  }
  
//this.onChange = this.onChange.bind(this);

add = (e) => {
  e.preventDefault();
  let { addplayer } = this.props
     this.setState({message : 'Player added successfully'});
     //this.props.addPlayer("add")
     addplayer.push('/Leaderboard');
  }


onChange = (e) => {
  this.setState({ [e.target.name]: e.target.value });
}



  render() {
    return (
        <div>
            <Container maxWidth="sm">
            <form style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              width: '300px', 
              margin: 'auto',
              paddingTop: '90px', 
              alignContent: 'center' }}>

               <TextField 
               placeholder="First Name" 
               fullWidth margin="normal" 
               name="firstName" 
               value={this.state.firstName} 
               onChange={this.onChange}
               />

               <TextField 
               placeholder="Last Name" 
               fullWidth margin="normal" 
               name="lastName" 
               value={this.state.lastName} 
               onChange={this.onChange}
               />

               <Button 
               variant="contained" color="primary" padding="150px" onClick={this.add}>Add Player</Button>
            </form>
            </Container>
        </div>
    )
  }
}

export default AddPlayers