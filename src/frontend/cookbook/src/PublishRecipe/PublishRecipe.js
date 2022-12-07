import React, { useState } from 'react';
import './PublishRecipe.css';

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addReceipe } from '../redux/receipe';
import { useSelector } from 'react-redux';
function PublishRecipe() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const list = useSelector(state =>  state.receipe.list)
    const [receipeDetails, setReceipeDetails] = useState({
        'name' : '',
        'publishedBy': '',
        'description': '',
        'ingredients' : '',
        'calories' : '',
        'procedureOfTheRecepie' : '',
        'imageOfTheRecepie' : null,
        'id' : '',
        'likes' : 0
    });
    const [srcImage, setSrcImage] = useState('');
    const triggerBrowseFile = (e) => {
        document.querySelector('.browse-file').click();
        var image = URL.createObjectURL(e.target.files[0])
        setSrcImage(image);
        setReceipeDetails({...receipeDetails, imageOfTheRecepie: e.target.files[0].name})
    }
    const publishReceipe = () => {
        //dispatch(setUserDetails(user));
        navigate("/")
        setReceipeDetails({...receipeDetails, id: list.length})
        dispatch(addReceipe(receipeDetails));
        
        //     const data = axios.post('http://localhost:8081/api/recepies', receipeDetails
        //     ).then(res => {
        //         console.log(res)
        //         dispatch(setUserDetails(user));
        //         navigate("/")
        //     })
            

    }
  return (
    <div className='publish-recipe'>
        <h4>Publish Your Recipe</h4>
         <form>
                <div className='mb-3'>
                    <div className='upload-image'>
                        <img id = 'output' src = {srcImage} />       
                    </div>
                    <input className='browse-file' type="file" accept="image/jpeg" onChange={(e) =>  triggerBrowseFile(e)} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputUsername" className="form-label">Recipe Name</label>
                    <input type="text" className="form-control" id="exampleInputUsername" 
                        onChange={(e) => setReceipeDetails({...receipeDetails, name: e.target.value})}
                        value = {receipeDetails.name}/>
                </div>               
                <div className="mb-3">
                    <label for="exampleInputCPassword" className="form-label">Calories</label>
                    <input type="number" className="form-control" id="exampleInputCPassword" 
                        onChange={(e) => setReceipeDetails({...receipeDetails, calories: e.target.value})}
                        value = {receipeDetails.calories}/>                       
                </div>
                <div className="mb-3">
                    <label for="exampleInputCPassword" className="form-label">Ingredients</label>
                    <textarea type="text" row="5" className="form-control" id="exampleInputCIngredients" 
                        onChange={(e) => setReceipeDetails({...receipeDetails, ingredients: e.target.value})}
                        value = {receipeDetails.ingredients}/>                       
                </div>
                <div className="mb-3">
                    <label for="exampleInputCPassword" className="form-label">Procedure</label>
                    <textarea type="text" row="5" className="form-control" id="exampleInputCprocedure" 
                        onChange={(e) => setReceipeDetails({...receipeDetails, procedureOfTheRecepie: e.target.value})}
                        value = {receipeDetails.procedureOfTheRecepie}/>                       
                </div>  
                <div className='f-right'>
                    <button type="button" className="btn btn-cancel" 
                        onClick={() => navigate("/")}>Cancel</button>
                    <button type="submit" className="btn btn-primary f-right" 
                        onClick={() => publishReceipe()}>Publish</button>
                </div>              
                
            </form>
    </div>
  )
}

export default PublishRecipe