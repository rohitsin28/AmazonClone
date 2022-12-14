import './App.css';
import React,{ useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout"
import Login from './Login';
import Orders from "./Orders";
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51MA8eASDYE1NlBc2jI5Uwdwt4KDD6ciFDOhXHNomBUyCDg2Q1hKHGqVaQ87krtC4TLRuDeoJmgjvcYrcCC2Qgxjz00rqScoel6');

function App() {
  const [{},dispatch]=useStateValue();

  useEffect(()=>{
  auth.onAuthStateChanged(authUser=>{
    console.log('THE USER IS >>> ',authUser);
    
    if(authUser){
      dispatch({
        type:'SET_USER',
        user:authUser
      })
    }else{
      dispatch({
        type:'SET_USER',
        user: null
      })
    }
  })
},[])
  
  return (
    <Router>
      <div className="app">
      
        <Switch>
          <Route path="/checkout">
          <Header />
          <Checkout/>
          </Route>
          <Route path="/orders">
          <Header/>
          <Orders/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
             <Payment/>
          </Elements>
          </Route>
          <Route path="/">
          <Header />
          <Home />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
