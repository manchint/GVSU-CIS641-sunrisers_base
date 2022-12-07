import React from 'react';
import './CardComponent.css';
import { useNavigate } from 'react-router-dom'

import item1 from '../../src/Assets/images/item1.jpeg';
import item2 from '../../src/Assets/images/item2.webp';
import item3 from '../../src/Assets/images/item3.jpeg';
import item4 from '../../src/Assets/images/item4.jpeg';
import item5 from '../../src/Assets/images/item5.jpeg';

function CardComponent(props) {
    let navigate = useNavigate();

    const images = [item1, item2, item3, item4, item5]
    return (
        <div className="card" onClick={() => navigate('/viewdetails', {state:{id:props.id}})}>
                <img src= {images[props.id-1]}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <div><i className='icon-like'></i> <span className='like-count'>231</span></div>
                </div>                               
        </div>
    )
}

export default CardComponent