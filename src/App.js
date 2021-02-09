import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import React, { useEffect, useState } from "react"
import Payment from './Payment';

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>',authUser)

      if(authUser){
        //logged in

        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])
  return (
    //TODO what is BEM convention
    <Router>
        <div className="app">
        
          <Switch>
              <Route path="/payment">
                <Header/>
                <Payment/>
              </Route>
              <Route path="/checkout">
                <Header/>
                <Checkout/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/">
                <Header/>
                <Home/>
              </Route>

              
          </Switch>
          
        </div>
    </Router>
  );
}

export default App;
