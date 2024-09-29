import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51Pf1svCAtEXmHOBehcCeyvE25gcpbLWiDtmXmIQkYmAnsdVV49X5HACh7DXZquNucjIri7gAbRvfMWY68kwUlgWs004mXizo0u");

const App = () => {
  const [{}, dispatch] = useStateValue();
  const location = useLocation(); // Use the location hook
  const noHeaderPaths = ['/checkout', '/payment', '/login']; // Include login path

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {/* Conditionally render the header based on the path */}
      {!noHeaderPaths.includes(location.pathname) && <Header />}
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/payment">
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
};

// Wrap the App component in Router
const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
