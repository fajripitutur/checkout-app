import React from "react";

import { useLocation, NavLink } from "react-router-dom";
import useCheckout from "../context/checkoutContext";
import arrowPNG from '../assets/arrow.png'
import { routes } from "../App";

export default function ({ children }) {

  const location = useLocation();

  const { stepForm, } = useCheckout();

  function renderBackButton() {

    switch (location.pathname) {
      case '/delivery':
        return `<a href="" className="back-box_title">Back To Cart</a>`
      case '/payment':
        return `<a href="/delivery" className="back-box_title">Back To Delivery</a>`
      default:
        break;
    }
  }


  return (
    <>
      <div className="container">
        <div className="stepper">
          {
            routes.map((route, i) => (
              <React.Fragment key={route.key}>
                <div className="stepper-group" >
                  <div className={`step ${stepForm >= i + 1 ? 'active' : 'inactive'}`}>
                    <span>{i + 1}</span>
                  </div>
                  <span className="stepper-group__text stepper-group__arrow" >
                    {route.name}
                  </span>
                </div>
              </React.Fragment>
            ))
          }
        </div>

        <div className="card">
          <div className="back-box">
            {
              location.pathname !== '/finish' && (
                <>
                  <img className="back-box_arrow" src={arrowPNG} style={{}} />
                  <span dangerouslySetInnerHTML={{ __html: renderBackButton() }}></span>
                </>
              )
            }
          </div>
          <div className="card-content" >
            <div className="card-content__details" style={{}}>
              <div className="card-content__details-box" style={{}}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}