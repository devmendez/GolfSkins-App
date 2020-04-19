import { combineReducers } from 'redux'

const user = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...action.value,
                loggedIn: true
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                loggedIn: false,
            }
        default:
            return state
    }
}

const users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [ ...state, action.value ]
        case 'REMOVE_USER':
            const users = [ ...state ]
            users.splice(action.value, 1)
            return users
        default:
            return state
    }
}

export default combineReducers({ user, users }) 