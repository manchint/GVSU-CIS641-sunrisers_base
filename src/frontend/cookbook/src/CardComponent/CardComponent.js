import React from 'react';
import './CardComponent.css';
import { useNavigate } from 'react-router-dom'

function CardComponent(props) {
    let navigate = useNavigate();

    const navigateTo = (item) =>{
        navigate('/'+item)
    }
    return (
        <div className="card" onClick={() => navigateTo('viewdetails')}>
            <div className='item-img'></div>
            {/* <img src='../chicke-tikka.jpg' className="card-img-top" alt="tikka" /> */}
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>  
                    <div className='mt-10'> 
                        <span class="fa fa-star mr-10 checked"></span>
                        <span class="fa fa-star mr-10 checked"></span>
                        <span class="fa fa-star mr-10 checked"></span>
                        <span class="fa fa-star mr-10"></span>
                        <span class="fa fa-star mr-10"></span> 
                    </div>
                </div>                               
        </div>
    )
}

export default CardComponent