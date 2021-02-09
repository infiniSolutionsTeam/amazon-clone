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
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"


const promise = loadStripe('pk_test_51IIyhsL6AhrRiKLem0osTt6yAZftfeTAFEHUnEmxmXbfFJFgjsOMWRIh2FdqvCboRJ9h3ekx3qfNHGCOSrGDEBcz00tZgmjmAh')

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
                <Elements stripe={promise}>
                  <Payment/>
                </Elements>
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
