import React, {useEffect} from 'react';
import './DetailsView.css';

import axios from 'axios';
import item1 from '../../src/Assets/images/item1.jpeg';
import {useLocation} from 'react-router-dom';
function DetailsView() {
    const location = useLocation();
    console.log(location.state.id)
    useEffect(() => {
        //REAL
        // const data = axios.get('http://localhost:8081/api/recepies').then(res => setReceipeList(res.data))
    }, [])
  return (
      <>
    <div className='recipe-details mt-40'>
        <div className='image-block'>
            <img src= {item1}/>
        </div>
        <div className='details-block'>
            <h3>Chicken Tikka Masala</h3>
            <div><i className='icon-like'></i> <span className='like-count'>231</span></div>
            <hr />
            <div className='mt-10'>
                <div className='d-flex'><div className='sub-header'>User Name </div><div className='sub-value'>Ashu Toast</div></div>
                <div className='d-flex'><div className='sub-header'>Calories </div><div className='sub-value'>321 Kcal</div></div>
            </div>
            <hr />
            <div className='mt-10'>
                <div className='sub-header'>Ingredients</div>
                {/* <p className='mt-10'>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently<br/>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                </p> */}
                <ul className='list'>
                    <li>Salt</li>
                    <li>Butter</li>
                    <li>Pepper 1Tbsp</li>
                    <li>Curd 1cup</li>
                    <li>Mirchi</li>
                    <li>Chilli Powder</li>
                    <li>Ginger</li>
                    <li>Cloves</li>
                    <li>Cinnamon</li>
                    <li>Turmaric</li>
                    <li>Curry Leaves</li>
                </ul>
            </div>
            <hr />
            <div className='mt-10'>
                <div className='sub-header'>Procedure</div>
                <p className='mt-10'>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently<br/>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                </p>
            </div>
        </div>
    </div>
    <div>
        <h3>Comments</h3>
        <div className='mt-10'>
            <img /><div className='d-flex ml-20'><div className='sub-value'>Ashu Toast : Great taste</div></div>
            <img /><div className='d-flex ml-20'><div className='sub-value'>Ashu Toast : Great taste</div></div>
            <img /><div className='d-flex ml-20'><div className='sub-value'>Ashu Toast : Great taste</div></div>
            <img /><div className='d-flex ml-20'><div className='sub-value'>Ashu Toast : Great taste</div></div>
            <img /><div className='d-flex ml-20'><div className='sub-value'>Ashu Toast : Great taste</div></div>
            <img /><div className='d-flex ml-20'><div className='sub-value'>Ashu Toast : Great taste</div></div>

        </div>
    </div>
    </>
  )
}

export default DetailsView