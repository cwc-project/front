import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { 
    Modal, 
    ModalHeader, 
    ModalBody,
} from 'reactstrap'
import './RegModal.css'
import RegTabsContainer from '../../containers/RegTabsContainer'

//использование встроенных стилей bootstrap
const  bsUtilClasses = {
    modalHeader: ['border-bottom-0', 'pb-0'],
    modalBody: ['pt-0'],
}
const modalHeader = classNames(bsUtilClasses.modalHeader)
const modalBody = classNames(bsUtilClasses.modalBody)

export default function RegModal({ modal, toggleModal }) {
    return(
        <div>
            <Modal
                className="reg-modal"
                isOpen={modal}
            >
                <ModalHeader 
                    className={modalHeader}
                    toggle={toggleModal}
                />
                <ModalBody className={modalBody}>
                    <RegTabsContainer />
                </ModalBody>                
            </Modal>
        </div>
    )
}

RegModal.propTypes = {
    modal: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
}