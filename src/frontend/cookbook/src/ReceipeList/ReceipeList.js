import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardComponent from '../CardComponent/CardComponent';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSearchText } from '../redux/search.js';
import { setReceipeList } from '../redux/receipe';
function ReceipeList(props) {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const list = useSelector(state =>  state.receipe.list)

    const [receipesList, setReceipesList] = useState([])
    useEffect(() => {
        //REAL
        // const data = axios.get('http://localhost:8081/api/recepies').then(res => setReceipeList(res.data))

        //FAKE
        if(list.length == 0) {
        dispatch(setReceipeList([
            { id:1, itemName: 'Chicken Tikka Masala', likes: 231},
            { id:2, itemName: 'Potato Fry', likes : 32},
            { id:3, itemName: 'Lamb fry', likes: 541},
            { id:4, itemName: 'Biryani', likes : 543},
            { id:5, itemName: 'Frozen Ice Cream', likes : 532},   
          ]))
        }
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
                    return (<CardComponent id={item.id} /> )
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