import { connect } from 'react-redux'
import AddPlayers from '../components/AddPlayers'
import { addPlayers } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    AddPlayers: (player) => dispatch(addPlayers(player))
  }
}

export default connect(null, mapDispatchToProps)(AddPlayers)