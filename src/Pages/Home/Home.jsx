import React from 'react';
import Container from '../../Container/Container';
import home from '../../assets/home.svg'
import './Home.scss'
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <header className='home container' >
        <div className="home-details">
          <div className="home-details__title">Need For Speed?</div>
          <div className="home-details__subtitle">Join us for faster access to files</div>
          <Link to={"/auth"}>
            <button type='submit' className="home-details__btn">Create Account </button>
          </Link>
        </div>
        <div className="home-image">
          <img src={home} alt='file' />
        </div>

      </header>
      {/* end home */}
      <section className='intro'>
        <div className="container">
          <div className="intro-content">
            <div className="intro-content__title">Newsletters</div>
            <div className="intro-content__subtitle">Enter your email to receive the latest changes</div>
            <div className="intro-content__box">
              <input type="email" placeholder='Example@gmail.com' className='intro-content__box-input' />
              <button type='submit' className='intro-content__box-btn'>
                <span className='intro-content__box-btn__text'><FiArrowRight size={20} /></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Home;
