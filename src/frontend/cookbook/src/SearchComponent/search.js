import React, { useState, useEffect } from 'react';
import './search.css';
import { useDispatch } from 'react-redux';
import { setSearchText } from '../redux/search.js';
import { setReceipeList } from '../redux/receipe.js';
import { useSelector } from 'react-redux';
function Search() {
  const dispatch = useDispatch()
  const [searchText, setText]= useState('')
  const list = useSelector(state =>  state.receipe.list)
  useEffect(() => {
    //REAL
    // const data = axios.get('http://localhost:8081/api/recepies/home/search', {
    //  "keyword": searchText
    //}).then(res => dispatch(setReceipeList(res.data)))
    if(searchText !== '') {
      let searchList = list.filter((item) => item.itemName.toLowerCase().includes(searchText))
      dispatch(setReceipeList(searchList))
    } else {
      dispatch(setReceipeList([
        { id:1, itemName: 'Chicken Tikka Masala', likes: 231},
        { id:2, itemName: 'Potato Fry', likes : 32},
        { id:3, itemName: 'Lamb fry', likes: 541},
        { id:4, itemName: 'Biryani', likes : 543},
        { id:5, itemName: 'Frozen Ice Cream', likes : 532},   
      ]))
    }
  }, [searchText])
  return (
    <div className='search-recipe'>
        <input className="form-control me-2" type="search" placeholder="Search Recipe Here" aria-label="Search"
          onChange={(e) => setText(e.target.value)}
          value={searchText}/>
        <i className='icon-search' onClick={() => dispatch(setSearchText(searchText))}></i>
    </div>
  )
}

export default Search