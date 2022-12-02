import './App.css';

//required components
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import PublishRecipe from './PublishRecipe/PublishRecipe';
import DetailsView from './DetailsView/DetailsView';
const recipeList = [
  { id:1, itemName: 'Chicken Tikka'},
  { id:2, itemName: 'Chicken Masala'},
  { id:3, itemName: 'Tandoori Chicken'},
  { id:4, itemName: 'BUtter Chicken'},
  { id:5, itemName: 'Chicken Role'},   
]

function App() {
  return (
    <div className='main-container'>
      <Router>
        <Navbar />
        <Routes >
          <Route path = "/" element = {<Home />} />
          <Route path = "/login" element = {<Login />}/>
          <Route path = "/signup" element = {<Signup />}/>
          <Route path = "/publish" element = {<PublishRecipe />}/>
          <Route path = "/viewdetails" element = {<DetailsView />}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
