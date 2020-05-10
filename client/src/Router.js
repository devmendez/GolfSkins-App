import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import AddPlayers from "./components/AddPlayers";
import Login from "./components/Login";
import Home from "./components/Home";
import Leaderboard from "./components/Leaderboard";
import Strokes from "./components/Strokes";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

// class component
// const Router = () => {
//   state = {
//     currPlayers: [],
//   };

  //handleAddPlayer = () => {};
  const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/login/" render={() => <Login />}/>
        {/* create a game, consume both skins and strokes, holes component */}
        <ProtectedRoute path="/addPlayers" component={AddPlayers} />
        <Route path="strokes" component={Strokes}></Route>
        <Route path="leaderboard" component={Leaderboard}></Route>
        
    </Switch>
    )
  }

export default Router;
