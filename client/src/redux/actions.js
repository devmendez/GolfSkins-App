export const addUsers = () => {
    return (dispatch) => {
        fetch('/users')
        .then(res => res.json())
        .then(response => {
            const action = {
                type: 'ADD_USER',
                value: response.Results
            }
            dispatch(action)
        })        
    }
}

export const removeUser = (index) => {
    return {
        type: 'REMOVE_USER',
        value: index
    }
}

export const loginUser = (user) => {
    return {
        type: 'LOGIN',
        value: user
    }
}

export const logoutUser = (username) => {
    return {
        type: 'LOGOUT',
        value: username
    }
}
