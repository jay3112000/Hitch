import React from 'react'
import Register from './pages/register';
import './App.css'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import PrimarySearchAppBar from './components/Navbar';
import Home from './pages/home';
import Postpage from './pages/postpage';
import Timeline from './pages/Timeline';
import Create from './pages/Create';
import Profile from './pages/Profile';
import Edit from './pages/Edit';
function App() {
  return (
    <>
    <Router>
     
         
         <Switch>
         <Route path='/' exact component={Register} />
         <Route path='/home' component={Home} />
         <Route path='/timeline' component={Timeline} />
         <Route path='/create' component={Create} />
         <Route path='/profile' component={Profile} />
         <Route path='/postpage/:id' component={Postpage} />
         <Route path='/edit/:id' component={Edit} />

        </Switch>       
        
    </Router>
      </>
      
   
  );
}

export default App;
