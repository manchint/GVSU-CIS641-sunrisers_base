import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { logOut } from '../redux/user.js';
function Navbar() {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateTo = (item) =>{
        navigate('/'+item)
    }
    const user = useSelector(state =>  state.user.user)
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h3 className="navbar-brand" onClick={() => navigate('/')} >Cook Book</h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img id = 'output' src = {user.profPicture}/> 
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">                    
                       {user.userName == undefined ? 
                        <>
                                <li className="nav-item mr-20 ml-20">
                                    <span onClick={() => navigateTo('login')} >Login</span>
                                </li>
                                <li className="nav-item">
                                    <span onClick={() => navigateTo('signup')} >Signup</span>
                                </li>
                            </> 
                            :
                            <>
                                <li className="nav-item mr-20 ml-20">
                                    <span >{'Hello ' + user.userName}</span>
                                </li>
                                <li className="nav-item mr-20 ml-20" onClick={() => dispatch(logOut({}))}>
                                    <i className='icon-user' ></i> 
                                </li>
                                
                                <li className="nav-item ml-20">
                                    <span onClick={() => navigateTo('publish')} >Pulish</span>
                                </li>
                            </> 
                            
                        }                     
                </div>
            </div>
        </nav>
    )
}

export default Navbar