import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useDataLayerValue } from './DataLayer';

function App() {

  const[{user}, dispatch] = useDataLayerValue();

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser)=> {
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null,
        })

      }
    });

    return () => {
      //cleanup operations
      unsubscribe();
    }
  },[])
  console.log('USER IS >>>', user);

  return (
    <Router>

      <div className="app">

        <Routes>
          <Route path="/checkout" element={<><Navbar/><Checkout/></>}/>
          <Route path ="/login" element={<><Navbar/><Login/></>}/>
          {/*Default route*/}
          <Route path="/" element={<><Navbar/><Home/></>}/>
        </Routes>
     
      </div>

    </Router>
    
  );
}

export default App;
