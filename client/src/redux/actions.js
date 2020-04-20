export const addPlayers = () => {
    return (dispatch) => {
        fetch('/players')
        .then(res => res.json())
        .then(response => {
            const action = {
                type: 'ADD_PLAYER',
                value: response.Results
            }
            dispatch(action)
        })        
    }
}

export const removePlayer = (index) => {
    return {
        type: 'REMOVE_PLAYER',
        value: index
    }
}

export const loginPlayer = (player) => {
    return {
        type: 'LOGIN',
        value: player
    }
}

export const logoutPlayer = (username) => {
    return {
        type: 'LOGOUT',
        value: username
    }
}
