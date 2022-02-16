import React, { useEffect, useState } from 'react';
import https from './../../Services/https';
import Modal from './../../common/Modal/Modal';
import Container from './../../Container/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '../../common/hooks/useQuery';
import { useModal } from './../../Context/ModalProvider';
import { useAuth } from '../../Context/AuthContextProvider';
import { MdAdd, MdFolder, MdOpenInNew, MdDelete } from 'react-icons/md';
import './Panel.scss'


const Panel = () => {

  const [directory, setDirectory] = useState([]);
  const [selected, setSelected] = useState(null);
  const { openModal } = useModal();
  const navigate = useNavigate();

  const auth = useAuth();
  const query = useQuery();
  const redirect = query.get("redirect") || "/auth"

  useEffect(() => {
    if (!auth) navigate(redirect)
  }, [redirect, auth])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await https.get("/documents");
        setDirectory(data)
      } catch (error) { }
    }

    getData();
  }, [])

  const activeAccordion = (id) => {
    if (selected === id) return setSelected(null)

    setSelected(id)
  }
  const handleDeleteItem = async (id) => {
    try {
      await https.delete(`/documents/${id}`)
      const removeItem = directory.filter(d => d.id !== id);
      setDirectory(removeItem)
    } catch (error) { }
  }



  return (


    <>
      <Container>
        <section className='panel container'>
          <div className="panel-content">
            <div className="panel-content__directory">
              {
                directory.map((item) => (
                  <div className="panel-content__directory-list" key={item.id}>
                    <div className="panel-content__directory-list__box" onClick={() => activeAccordion(item.id)}>
                      <div className='panel-content__directory-list__box-icon'><MdFolder size={90} /></div>
                      <div className='panel-content__directory-list__box-text'>{item.title}</div>
                    </div>
                    <div className={selected === item.id ? "panel-content__directory-list__bars active-bars" : "panel-content__directory-list__bars"}>
                      <Link to={`/panel/${item.title}`} className='panel-content__directory-list__bars-open'>open <MdOpenInNew /></Link>
                      <span className='panel-content__directory-list__bars-trash' onClick={() => handleDeleteItem(item.id)}>delete <MdDelete /></span>
                    </div>
                  </div>
                ))
              }
            </div>
            <button type='submit' className="panel-content__add" onClick={openModal}><MdAdd size={50} /></button>
            <Modal />
          </div>
        </section>

      </Container>

    </>

  );
};

export default Panel;


{/* <div className="panel-content__directory-list">
              <div className="panel-content__directory-list__box" onClick={() => activeAccordion(1)}>
                <div className='panel-content__directory-box__icon'><MdFolder size={90} /></div>
                <div className='panel-content__directory-box__text'>File</div>
              </div>
              <div className={selected === 1 ? "panel-content__directory-list__bars active-bars" : "panel-content__directory-list__bars"}>
                <span className='panel-content__directory-list__bars-open'>open <MdOpenInNew /></span>
                <span className='panel-content__directory-list__bars-trash'>delete <MdDelete /></span>
              </div>
            </div> */}
