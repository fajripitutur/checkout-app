import React from 'react'
import { Link } from 'react-router-dom'

import leftArrow from '../../assets/arrow.png'

import Summary from '../../components/summary'
import Title from '../../components/title'
import Layout from '../../containers/Layout'
import StyleWrapper from './style'

import useCheckout from '../../context/checkoutContext'

import { generateRandomString } from '../../utils/helpers'

export default function () {
  const { summaryDetails } = useCheckout()
  return (
    <Layout>
      <StyleWrapper>
        <div className='finish-box'>

          <div className='finish-box__content'>
            <div className='finish-box__content-detail'>
              <Title title='Thank You' />
              <p>Order Id: {generateRandomString(5)}</p>
              <p>Your order will be delivered today with {summaryDetails.deliveryCourier}</p>
              <a href='/delivery' className='finish-box__content-detail__text'>
                <img src={leftArrow} alt="" />
                <span >Go to homepage</span>
              </a>
            </div>
          </div>

          <div className='finish-box__summary'>
            <Summary />
          </div>

        </div>
      </StyleWrapper>
    </Layout >
  )
}
