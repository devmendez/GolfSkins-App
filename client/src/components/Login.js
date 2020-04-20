import React, { Component } from 'react'
import { TextField, Button, Container } from '@material-ui/core'
import { withRouter } from 'react-router-dom'


class App extends Component {
  state = {
    username: "",
    password: ""
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
    history.push("/players")
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form-wrapper" onSubmit={this.login}>
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
              backgroundColor="Gray"
            >
            LOGIN
            </Button>
          </form>
        </Container>
      </div>
    )
  }
}

export default withRouter(App)