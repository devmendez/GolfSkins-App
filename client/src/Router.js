import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import AddUsers from './containers/AddUsers'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'

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
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/addUsers" component={AddUsers}/>
        </Switch>
    )
}

export default Router