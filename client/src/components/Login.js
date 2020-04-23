import React, { Component } from 'react'
import { TextField, Button, Container } from '@material-ui/core'
import { withRouter } from 'react-router-dom'


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
    this.props.loginPlayer("loggedin")
    history.push("/addplayers")
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form-wrapper" style={{
            display: 'flex',
            flexDirection: 'column',
            width: '250px',
            margin: 'auto',
            paddingTop: '70px', 
            alignContent: 'center',            
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
            <Button
              onClick={this.login}
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
              padding="100px"
            >
            LOGIN
            </Button>
          </form>
        </Container>
      </div>
    )
  }
}

export default withRouter(Login)