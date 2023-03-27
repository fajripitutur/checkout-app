import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import useCheckout from '../context/checkoutContext'
import { formatNumberToThousand } from '../utils/helpers'

import { useFormContext } from 'react-hook-form'

export default function () {
  const location = useLocation()
  const navigate = useNavigate();
  const methods = useFormContext()

  const {
    changeStep,
    summaryDetails,
  } = useCheckout();

  const handleClick = () => {

    switch (location.pathname) {
      case '/delivery':
        changeStep(2)
        navigate('/payment')
        break;
      case '/payment':
        navigate('/finish')
        changeStep(3)
        break;
      default:
        break;
    }
  };

  const renderSummaryTextButton = (route) => {
    switch (route) {
      case '/delivery':
        return `Continue To Payment`;
      case '/payment':
        return `Pay With ${summaryDetails.paymentMethod}`;
      default:
        break;
    }
  }

  const ButtonType = () => {
    switch (location.pathname) {
      case '/delivery':
        return <button className='summary-box__button' type="submit" onClick={methods.handleSubmit}>{renderSummaryTextButton(location.pathname)}</button>
      case '/payment':
        return <button className='summary-box__button' onClick={() => handleClick()}>{renderSummaryTextButton(location.pathname)}</button>
      default:
        break;
    }
  }

  return (
    <div className='summary-box'>
      <span style={{ color: '#FF8A00', fontSize: '24px', fontWeight: 700 }}>Summary</span>
      <p>10 items purchased</p>

      {
        location.pathname !== '/delivery' && (
          <div className='summary-box__content' >
            <p>Delivery Estimation</p>
            <p className='summary-box__content-val'>Today by {summaryDetails.deliveryCourier}</p>
          </div>
        )
      }

      {
        location.pathname !== '/delivery' && (
          <div className='summary-box__content' >
            <p>Payment Method</p>
            <p className='summary-box__content-val'>{summaryDetails.paymentMethod}</p>
          </div>
        )
      }

      <div className='summary-box__footer'>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>Cost of Goods</p>
          <p>{formatNumberToThousand(summaryDetails.goodsPrice)}</p>
        </div>

        {
          summaryDetails.isDropshipper && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>Dropshipping Fee</p>
              <p>{formatNumberToThousand(summaryDetails.dropshipperFee)}</p>
            </div>
          )
        }

        {
          location.pathname !== '/delivery' && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>{summaryDetails.deliveryCourier} Shipment</p>
              <p>{formatNumberToThousand(summaryDetails.deliveryFee)}</p>
            </div>
          )
        }

        <div className='summary-box__footer-totalorder'>
          <p>Total</p>
          <p>{formatNumberToThousand(summaryDetails.totalPrice)}</p>
        </div>

        {
          location.pathname !== '/finish' && (

            <ButtonType />
          )
        }

      </div>
    </div>
  )
}
