import React, { useEffect, useState, useSyncExternalStore } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../redux/user.js'
function Signup() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        'lastName' : '',
        'firstName': '',
        'password': '',
        'profPicture': '',
        'email' : '',
        'profPicture' : null
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errmsgs, setErrMsgs] = useState({
        lastName: '',
        firstName: '',
        password: ''
    })
    const signUpUser = () => {
        

        //API
        if(user.password != confirmPassword) {
            alert("Passwords donot match")
        } else {
            
            const data = axios.post('http://localhost:8081/api/user/register', user
            ).then(res => {
                console.log(res)
                dispatch(setUserDetails(user));
                navigate("/")
            })
        }

    }
    const triggerBrowseFile = (e) => {
        document.querySelector('.browse-file').click();
        var image = URL.createObjectURL(e.target.files[0])
        setUser({...user, profPicture: image})
    }
    return (
        <div className='signup-form'>
            <form>
                <div className='mb-3'>
                    <div className='upload-image'>
                        <img id = 'output' src = {user.profPicture}/>       
                    </div>
                    <input className='browse-file' type="file" accept="image/jpeg" onChange={(e) =>  triggerBrowseFile(e)} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        onChange={(e) => {
                            setUser({...user, email: e.target.value})
                        }}
                        value = {user.email}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputFirstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="exampleInputFirstName" 
                        onChange={(e) => {
                            if( e.target.value === '') {
                                setErrMsgs({...errmsgs, firstName: 'First Name Cannot be Empty'})
                            } else {
                                setErrMsgs({...errmsgs, firstName: ''})
                                setUser({...user, firstName: e.target.value})
                            }
                        }}
                        value = {user.firstName}/>
                        {errmsgs?.firstName && <div class="error-message">{errmsgs.firstName}</div>}
                </div>
                <div className="mb-3">
                    <label for="exampleInputLastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="exampleInputLastName" 
                        onChange={(e) => {
                            if( e.target.value === '') {
                                setErrMsgs({...errmsgs, lastName: 'last Name Cannot be Empty'})
                            } else {
                                setErrMsgs({...errmsgs, lastName: ''})
                                setUser({...user, lastName: e.target.value})}
                            }
                        }
                        value = {user.lastName}/>
                        {errmsgs?.lastName && <div class="error-message">{errmsgs.lastName}</div>}
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" 
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        value = {user.password}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputCPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputCPassword"
                        onChange={(e) => {
                            if(user.password != e.target.value) {
                                setErrMsgs({...errmsgs, password: 'Passwords do not match'})
                            } else {
                                setErrMsgs({...errmsgs, password: ''})
                                setConfirmPassword(e.target.value)
                            }
                        }}
                        value = {confirmPassword}/>
                        {errmsgs?.password && <div class="error-message">{errmsgs.password}</div>}
                </div>
                <div className='f-right'>
                    <span className='mr-30 mt-5 di-block' onClick={() => navigate('/login')}>Already have an account <a href="#">Login</a></span><button type="submit" className="btn btn-primary f-right" onClick={() => signUpUser()}>Register</button>
                </div>
            </form>
        </div>

    )
}

export default Signup