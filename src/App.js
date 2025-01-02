
import './App.css';
import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import {Routes,BrowserRouter as Router, Route} from "react-router-dom"
import React from 'react';
import RecipeDetails from './components/RecipeDetails';
function App() {
  return (
    
    <Router>   
       <NavBar/> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/recipes/:recipeId" element={<RecipeDetails/>}/>
        </Routes>        
       
       
    </Router>
    
  );
}

export default App;
