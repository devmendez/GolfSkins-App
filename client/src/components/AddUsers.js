import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core'


class AddUsers extends Component {
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
        const newUser = { ...this.state }
        newUser.id = this.props.newUser + 1
        this.props.addUsers(newUser)
        this.props.history.push("/users")
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
    

export default AddUsers