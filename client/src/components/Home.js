import React, { Component } from 'react'
import { AppBar, Toolbar, ListItem, List,
    Typography } from '@material-ui/core';
import { Link } from '@material-ui/core'
import Banner from '../components/Banner'


class Home extends Component {

logOut = (e) => {
        e.preventDefault()
        document.cookie = "loggedIn=true;max-age=0*0"
        window.location.replace("/login")
        }
    

    render (){
         return (
              <div>
                <AppBar style={{ background: "#1b5e20", position: "relative"}}>
                  <Toolbar>
                    <Typography variant="h5" style={{ flexGrow: "1" }}>
                      Golf Skins
                    </Typography>
                    <List className="nav-list">
                    <ListItem className="nav-list-item">
                        {document.cookie === "loggedIn=true" ? (null) : (<Link style={{ textDecoration: 'none', color: "white"}} to="/Login">Login</Link>)}
                    </ListItem>
                    <ListItem className="nav-list-item">
                    {document.cookie === "loggedIn=true" ? (<Link style={{ textDecoration: 'none' }} to="/logout" onClick={this.logOut}>Logout</Link>):(null)}
                    </ListItem>
                    </List>
                  </Toolbar>
                </AppBar>
                <Banner />
              </div>
            );
          }
        }

export default Home