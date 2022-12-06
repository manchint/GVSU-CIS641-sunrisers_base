import React from 'react';
import './Home.css';

import Navbar from '../Navbar/Navbar';
import Search from '../SearchComponent/search';
import ReceipeList from '../ReceipeList/ReceipeList';
import DetailsView from '../DetailsView/DetailsView';

function Home(props) {
   return (
    <div className="main-content">
        <Search />
        <ReceipeList />
        {/* <DetailsView /> */}
    </div>
   )
}

export default Home;