import React from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
