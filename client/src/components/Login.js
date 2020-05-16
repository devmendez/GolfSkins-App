import React, { Component } from 'react'
import { TextField, Button, Card } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import '../css/styles.css'



class Login extends Component {
  state = {
    username: "",
    password: "", 
    loggedIn: false
  }
      

  handleTextChange = e => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = e => {
    e.preventDefault()
    const { history } = this.props
    document.cookie = "loggedIn=true;max-age = 60*1000"
    history.push("/addplayers") 
  }

  render() {
    return (
      <div className="Login">           
        <Card maxWidth="sm">
          <form className="login-form" 
          onSubmit={this.login}>
            <TextField
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text"
            />
            <br/>
            <TextField
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password"
            />
            <br/>
            <Button className="login-button"  
              variant="contained"
              color="white"
              padding="150px"   
              onClick={this.login}
              type="submit"
            >
            LOGIN
            </Button>
          </form>
        </Card>
      </div>  
    )
  } 
}

export default withRouter(Login)