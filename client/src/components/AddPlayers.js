import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core'


class AddPlayers extends Component {
    state = {
        name: ''
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newPlayer = { ...this.state }
        newPlayer.id = this.props.newPlayer + 1
        this.props.AddPlayers(newPlayer)
        this.props.history.push("/players")
    }


    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                Name: '',
            })
        }
    }

    render() {
        return (
            <div>
            <form 
                onSubmit={this.handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', width: '300px', alignContent: 'center' }}>
            <TextField 
                id="Name" 
                placeholder="Name" 
                value={this.state.Name} 
                onChange={this.handleTextChange} 
                required
                />
            
            <Button variant="contained" color="primary" type="submit">SAVE</Button>
            </form>
        </div>
        )
    }
    }
    

export default AddPlayers