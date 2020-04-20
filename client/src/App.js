import React from "react";
import Home from "./components/Home";
import Banner from "./components/Banner/Banner";
import AddPlayers from "./components/AddPlayers";
import Login from "./components/Login";
import "./App.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Home />
        <Banner />
        <AddPlayers />
        <Login />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
