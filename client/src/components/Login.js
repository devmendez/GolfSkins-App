import React, { Component } from 'react'
import { TextField, Button, Card } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import Golfbag from '../images/golfbag.jpg'


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
    //this.props.loginPlayer("loggedin")
    history.push("/addplayers") 
  }

  render() {
    return (
      <body className="App">         
          <img src={Golfbag} alt="golf bag" className="login-background"
              position="relative"
              background-position="center"
              background-size="cover"
              width="100%"
              height="100%"
              z-index="-1"
              />        
        <Card maxWidth="sm">
          <form className="login-form-wrapper" style={{
            position: "absolute",   
            variant: "contained", 
            backgroundColor: "blue", 
            marginBottom: "50px",
            right: "0"
        
          }}
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
              backgroundColor="#1b5e20"
              padding="100px"
              onClick={this.login}
              type="submit"
            >
            LOGIN
            </Button>
          </form>
        </Card>
                
      </body>
    )
  } 
}

export default withRouter(Login)