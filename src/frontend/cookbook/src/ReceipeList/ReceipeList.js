import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardComponent from '../CardComponent/CardComponent';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setReceipeList } from '../redux/receipe';
import receipeList from '../redux/receipes.js'
function ReceipeList(props) {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const list = useSelector(state =>  state.receipe.list)

    const [receipesList, setReceipesList] = useState([])
    useEffect(() => {
        //REAL
        const data = axios.get('http://localhost:8081/api/recepies').then(res => setReceipeList(res.data))

        //dispatch(setReceipeList(receipeList))
    }, [])
    useEffect(() => {
        setReceipesList(list);
    }, [list])
    
    return (
        <div>
            <h2 className='header'>Latest Recipes</h2>
            <div className='items-list'>
            {receipesList.length != 0 ? 
                <>{
                    receipesList.map((item) => {
                    return (<CardComponent id={item.id} name={item.name} likes={item.likes}/> )
                })
                }</>
             :
                <h5 >No Items Found</h5>
            }
            </div>
        </div>
    )
}

export default ReceipeList;