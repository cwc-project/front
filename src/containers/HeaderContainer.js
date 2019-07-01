import { connect } from 'react-redux'
import Header from '../components/Header'
import { toggleModal, toggleTab } from '../actions'

const mapDispatchToProps = dispatch => ({
    onToggle: activeTab => {
        dispatch(toggleTab(activeTab));
        dispatch(toggleModal())                     
    }
})

export default connect(null, mapDispatchToProps)(Header)