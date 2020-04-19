import { connect } from 'react-redux'
import AddUsers from '../components/AddUsers'
import { addUsers } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    AddUsers: (user) => dispatch(addUsers(user))
  }
}

export default connect(null, mapDispatchToProps)(AddUsers)