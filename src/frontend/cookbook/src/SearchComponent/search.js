import React, { useState, useEffect } from 'react';
import './search.css';
import { useDispatch } from 'react-redux';
import { setSearchText } from '../redux/search.js';
import { setReceipeList } from '../redux/receipe.js';
import { useSelector } from 'react-redux';
import receipeList from '../redux/receipes.js'
function Search() {
  const dispatch = useDispatch()
  const [searchText, setText]= useState('')
  const list = useSelector(state =>  state.receipe.list)
  useEffect(() => {
    const data = axios.get('http://localhost:8081/api/recepies/home/search', {
     "keyword": searchText
    }).then(res => dispatch(setReceipeList(res.data)))
   
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