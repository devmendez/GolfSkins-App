import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core'


class AddPlayers extends Component {
    state = {
        name: '', 
        playerList: []
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     const newPlayer = { ...this.state }
    //     newPlayer.id = this.props.newPlayer + 1
    //     this.props.AddPlayers(newPlayer)
    //     //this.props.history.push("/Skins")
    //     this.setState({ playerList: newPlayer })
    // }
    handleSubmit = () => {
        const players = [ ...this.state.playerList ]
        players.push(this.state.text)
        this.setState({ playerList: players })
    }


    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                //Name: '',
                playerList: []
            })
        }
    }

    render() {
        return (
            <div>
            <form className="player-form-wrapper" style={{
            display: 'flex',
            flexDirection: 'column',
            width: '250px',
            margin: 'auto',
            paddingTop: '100px', 
            alignContent: 'center',  
          }}            
            onSubmit={this.handleSubmit}>            
            <TextField 
                id="Name" 
                placeholder="Name" 
                value={this.state.Name} 
                onChange={this.handleTextChange} 
                required
                />
             {
                this.state.playerList.map(value => {
                    return <p>{value}</p>
                })
            }
            <Button 
            onClick={this.handleSubmit}
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
            padding="100px"
          >
            ADD PLAYER
          </Button>
            </form>
        </div>
        )
    }
    }
    

export default AddPlayers