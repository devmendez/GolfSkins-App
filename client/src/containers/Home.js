import { connect } from 'react-redux'
import Home from '../components/Home'
import { loginUser } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (username) => dispatch(loginUser(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)