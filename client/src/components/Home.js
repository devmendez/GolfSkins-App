import React, { Component } from "react";
import { AppBar, Toolbar, ListItem, List, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Golfsunset from "../images/golfsunset.jpg";



class Home extends Component {
  logOut = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn=true;max-age=0*0";
    window.location.replace("/login");
  };

  render() {
    return (
      <section>
        <AppBar style={{ background: "#687C71", position: "relative" }}>
          <Toolbar>
            <Typography variant="h5" style={{ flexGrow: "1" }}>
              Golf Skins
            </Typography>
            <List className="nav-list">
              <ListItem className="nav-list-item">
                {document.cookie === "loggedIn=true" ? null : (
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/login"
                  >
                    Login
                  </Link>)}
              </ListItem>
              <ListItem className="nav-list-item">
                {document.cookie === "loggedIn=true" ? (
                  <Link
                    style={{ textDecoration: "none" }}
                    onClick={this.logOut}
                  >
                    Logout
                  </Link>
                ) : null}
              </ListItem>
            </List>
          </Toolbar>
        </AppBar>
        <div className="home-background">
          <img src={Golfsunset} alt="golf sunset"
              position="fixed"
              background-position="center"
              width="100%"
              height="690px"
              />        
        </div>
      </section>
    );
  }
}

export default Home;
