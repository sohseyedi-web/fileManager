import React from 'react';
import logo from '../../logo.svg'
import { FiGithub } from 'react-icons/fi'
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth, useAuthDispatch } from '../../Context/AuthContextProvider';
import './Navbar.scss'


const Navbar = () => {

    const userData = useAuth();
    const setAuth = useAuthDispatch();
    const navigate = useNavigate()
    const handleLogOut = () => {
        setAuth('')
        navigate("/")
        localStorage.clear();
    }


    return (
        <nav className='navbars'>
            <div className="navbars-item container">
                <img className="navbars-item__logo" src={logo} alt='filemanager' />
                <div className="navbars-item__links">
                    {
                        userData ?
                            (
                                <>
                                    <span className='navbars-item__links-text'>{userData.email}</span>
                                    <button className='navbars-item__links-btn' onClick={handleLogOut}>Logout</button>
                                </>
                            ) : (
                                <>
                                    <NavLink className={({ isActive }) => isActive ? 'activeLinks' : ''} to="/">Home</NavLink>
                                    <NavLink className={({ isActive }) => isActive ? 'activeLinks' : ''} to="/auth">Login/Register</NavLink>
                                    <a href='https://github.com/sohseyedi-web' target={'_blank'}><FiGithub size={25} /></a>
                                </>
                            )
                    }
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
