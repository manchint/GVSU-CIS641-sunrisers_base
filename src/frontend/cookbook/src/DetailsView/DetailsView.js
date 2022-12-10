import React, {useEffect, useState} from 'react';
import './DetailsView.css';

import axios from 'axios';
import { useSelector } from 'react-redux';
import item1 from '../../src/Assets/images/item1.jpeg';
import {useLocation, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setComments } from '../redux/comments';
function DetailsView() {
    const location = useLocation();
    let navigate = useNavigate();
    const list = useSelector(state =>  state.receipe.list)
    const dispatch = useDispatch()
    const comments = useSelector(state =>  state.comments.comments)
    const user = useSelector(state =>  state.user.user)
    const [comm, setComm] = useState([])
    const [msg, setMsg] = useState('')
    const [detail, setDetails] = useState({});
    const [ingredients, setIngredient] = useState([])
    useEffect(() => {
        const data = axios.get('http://localhost:8081/api/recepies').then(res => setReceipeList(res.data))
    }, [])
    useEffect(() => {
        setComm(comments);
    }, [comments])
  return (
      <>
    <div className='recipe-details mt-40'>
        <div className='image-block'>
            <img src= {item1}/>
        </div>
        <div className='details-block'>
            <h3>{detail.name}</h3>
            <button onClick={() => navigate("/publish", {state:{id:location.state.id}})}>EDIT</button>
            <div><i className='icon-like'></i> <span className='like-count'>{detail.likes}</span></div>
            <hr />
            <div className='mt-10'>
                <div className='d-flex'><div className='sub-header'>User Name </div><div className='sub-value'>{detail.publishedBy}</div></div>
                <div className='d-flex'><div className='sub-header'>Calories </div><div className='sub-value'>{detail.calories}</div></div>
            </div>
            <hr />
            <div className='mt-10'>
                <div className='sub-header'>Ingredients</div>
                <ul className='list'>
                {ingredients.map((ingredient) => {return (<li>{ingredient}</li>)})}
                </ul>
            </div>
            <hr />
            <div className='mt-10'>
                <div className='sub-header'>Procedure</div>
                <p className='mt-10'>
                    {detail.procedureOfTheRecepie}
                </p>
            </div>
        </div>
    </div>
    <div>
        <h3>Comments</h3>
        <div className='mt-10'>
            {comm.map((comment) => { return (<div className='d-flex ml-20'><div className='sub-value'>{comment.name + ' : ' + comment.msg}</div></div>)})}
            <div className='d-flex ml-20'><input type = 'text' placeholder='Enter your comments....' onChange={(e) => setMsg(e.target.value)}/>
                <button onClick={() => dispatch(setComments({name: user.firstName, msg : msg}))}>Comment</button></div>
        </div>
    </div>
    </>
  )
}

export default DetailsView