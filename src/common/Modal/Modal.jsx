import React, { useState } from 'react';
import https from './../../Services/https';
import { useModal } from './../../Context/ModalProvider';
import BackDrop from './../Back/BackDrop';
import './Modal.scss'
import { useNavigate } from 'react-router-dom';


const Modal = () => {

  const { modal } = useModal();
  const [title, setTitle] = useState('');

  const handleSubmit = async () => {
    const users = { title }

    try {
      if (!users) {
        alert('please complete form')
      } else {
        await https.post('/documents', users)
      }
    } catch (error) { }

  }

  return (
    <>
      <BackDrop />
      {
        modal ? <div className='box'>
          <div className="box-title">Create Directroy</div>
          <form className="box-form" onSubmit={handleSubmit}>
            <input type="text" placeholder='Name ...' onChange={(e) => setTitle(e.target.value)} value={title} />
            <button type='submit' className='box-form__btn'>Create</button>
          </form>
        </div> : null
      }
    </>
  );
};

export default Modal;
