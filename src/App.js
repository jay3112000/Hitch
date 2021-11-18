import React from 'react'
import Register from './pages/register';
import './App.css'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import PrimarySearchAppBar from './components/Navbar';
import Home from './pages/home';
import Postpage from './pages/postpage';
function App() {
  return (
    <>
    <Router>
     
         
         <Switch>
         <Route path='/' exact component={Register} />
         <Route path='/home' component={Home} />\
         <Route path='/postpage/:id' component={Postpage} />
        </Switch>       
        
    </Router>
      </>
      
   
  );
}

export default App;
