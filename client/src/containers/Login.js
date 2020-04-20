import Login from "../components/Login"
import { connect } from 'react-redux'
import { loginPlayer } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        player: state.player
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginPlayer: (username) => dispatch(loginPlayer(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)