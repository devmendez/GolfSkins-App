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

export const loginPlayer = (username) => {
    return {
        type: 'LOGIN',
        value: username
    }
}

export const logoutPlayer = (username) => {
    return {
        type: 'LOGOUT',
        value: username
    }
}

