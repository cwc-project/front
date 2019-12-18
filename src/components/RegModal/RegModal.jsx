import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './RegModal.css';

import RegTabsContainer from '../../containers/RegTabsContainer';

// использование встроенных стилей bootstrap
const bsUtilClasses = {
  modalHeader: ['border-bottom-0', 'pb-0'],
  modalBody: ['pt-0'],
};
const modalHeader = classNames(bsUtilClasses.modalHeader);
const modalBody = classNames(bsUtilClasses.modalBody);

const RegModal = ({ modalReg, toggleModalReg }) => (
  <div>
    <Modal className="reg-modal" isOpen={modalReg}>
      <ModalHeader className={modalHeader} toggle={toggleModalReg} />
      <ModalBody className={modalBody}>
        <RegTabsContainer />
      </ModalBody>
    </Modal>
  </div>
);

RegModal.propTypes = {
  modalReg: PropTypes.bool.isRequired,
  toggleModalReg: PropTypes.func.isRequired,
};

export default memo(RegModal);
