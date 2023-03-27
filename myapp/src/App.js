import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { Link, Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Delivery from './pages/delivery';
import Finish from './pages/finish';
import Payment from './pages/payment';

import { CheckoutProvider } from './context/checkoutContext';


export const routes = [
  {
    name: 'Delivery',
    key: 1,
    path: '/delivery',
    component: <Delivery />
  },
  {
    name: 'Payment',
    key: 2,
    path: '/payment',
    component: <Payment />
  },
  {
    name: 'finish',
    key: 3,
    path: '/finish',
    component: <Finish />
  },
]

function App() {
  return (
    <React.Fragment>
      <CheckoutProvider>
        <Router>
          <Routes>

            {routes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={route.component}
              />
            ))}

          </Routes>
        </Router>
      </CheckoutProvider>
    </React.Fragment>
  );
}

export default App;
