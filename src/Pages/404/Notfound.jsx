import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Container/Container';
import './Notfound.scss'

const Notfound = () => {
    return (
        <Container>
            <section className="nothing container">
                <h3 className="nothing-title">404</h3>
                <div className="nothing-subtitle">PAGE NOT FOUND</div>
                <Link to="/">
                    <button className='nothing-button'>Back to Home</button>
                </Link>
            </section>
        </Container>
    );
};

export default Notfound;
