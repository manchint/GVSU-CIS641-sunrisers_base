import React, { useState } from 'react';
import './Login.css';

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserDetails } from '../redux/user.js'
import { useSelector } from 'react-redux';

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const user = useSelector(state =>  state.user.user)

    const headers = {
        'Content-Type': 'application/json'
      }
    function onClickLogin(){
        axios.post('http://localhost:8081/api/user/signin',{
            "email": email,
            "password": password
        },{
            headers: headers
        }).then (res => {
            console.log(res)
            // dispatch(setUserDetails(res.data));
            // navigate('/');
        });
    }

    return (
        <div className='login-form'>
            <form>
                <div className="mb-3">
                    <label for="exampleInputUsername" className="form-label">Email</label>
                    <input type="text" className="form-control" id="exampleInputUsername" 
                        onChange={(e) => setEmail(e.target.value)}
                        value = {email} />
                </div>               
                <div className="mb-3">
                    <label for="exampleInputCPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputCPassword" 
                        onChange={(e) => setPassword(e.target.value)}
                        value = {password}/>
                </div>
                <button type="submit" className="btn btn-primary f-right" 
                    onClick={() => onClickLogin()}>Login</button>
            </form>
        </div>

    )
}

export default Login