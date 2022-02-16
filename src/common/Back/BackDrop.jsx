import React from 'react';
import { useModal } from './../../Context/ModalProvider';
import './BackDrop.scss'

const BackDrop = () => {

  const {
    modal,
    closeModal,
  } = useModal();

  return modal ? <div className="back" onClick={closeModal}></div> : null
};

export default BackDrop;
