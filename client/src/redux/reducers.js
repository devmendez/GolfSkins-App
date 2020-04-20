import { combineReducers } from 'redux'

const player = (state = null, action) => {
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

const players = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PLAYER':
            return [ ...state, action.value ]
        case 'REMOVE_PLAYER':
            const players = [ ...state ]
            players.splice(action.value, 1)
            return players
        default:
            return state
    }
}

export default combineReducers({ player, players }) 