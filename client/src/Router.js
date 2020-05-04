import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import AddPlayers from './components/AddPlayers'
import Login from './components/Login'
import Home from './components/Home'


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        render={(props) => checkAuth() 
            ? <Component {...props}/>
        : <Redirect to="/login" />}
        />
        )
     }


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/addPlayers" component={AddPlayers}/>
        </Switch>
    )
}

export default Router