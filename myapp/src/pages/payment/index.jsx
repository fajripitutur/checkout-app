import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Title from '../../components/title'
import Layout from '../../containers/Layout'
import StyleWrapper from './style'
import Summary from '../../components/summary'

import useCheckout from '../../context/checkoutContext'

import { formatNumberToThousand } from '../../utils/helpers'
import { shipmentOptions, paymentOptions } from '../../utils/constans'


export default function () {

  const { summaryDetails, updateTotalPayment, updateSummary } = useCheckout()

  useEffect(() => {
    updateTotalPayment({
      type: 'deliveryFee',
      fee: summaryDetails.deliveryFee
    })
  }, [])

  const handleChangeInput = (e, type, data) => {

    updateTotalPayment({
      type: 'deliveryFee',
      fee: data.price
    })

    updateSummary({
      deliveryCourier: data.shipment ? data.shipment : summaryDetails.deliveryCourier,
      deliveryFee: data.price ? data.price : summaryDetails.deliveryFee,
      paymentMethod: data.payment ? data.payment : summaryDetails.paymentMethod,
    })
  }


  return (
    <Layout>
      <StyleWrapper>
        <div className='shipment-box__content'>

          <div className='shipment-box__content-form'>

            <div className='shipment-box' style={{ marginBottom: '20px' }}>
              <Title title='Shipment Details' />
              <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>

                {shipmentOptions.map((el, i) => (
                  <React.Fragment key={el.shipment}>
                    <div className='radio-card'>
                      <input
                        type="radio"
                        id={el.shipment}
                        name="shipment"
                        value={el.shipment}
                        defaultChecked={summaryDetails.deliveryCourier == el.shipment}
                        onChange={(e) => handleChangeInput(e, 'shipment', el)}
                      />
                      <label htmlFor={el.shipment}>
                        <h5>{el.shipment}</h5>
                        <h2><span>Rp.</span>{formatNumberToThousand(el.price)}</h2>
                      </label>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>


            <div className='payment-box'>
              <Title title='Payment Details' />
              <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>

                {paymentOptions.map((el, i) => (
                  <React.Fragment key={el.payment}>
                    <div className='radio-card'>
                      <input
                        type="radio"
                        id={el.payment}
                        name="payment"
                        value={el.payment}
                        defaultChecked={summaryDetails.paymentMethod == el.payment}
                        onChange={(e) => handleChangeInput(e, 'payment', el)}
                      />
                      <label htmlFor={el.payment}>
                        <h5>{el.payment}</h5>
                        {el?.left && <h2>{formatNumberToThousand(el?.left)} Left</h2>}
                      </label>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>


          <div className='shipment-box__content-summary'>
            <Summary />
          </div>

        </div>





      </StyleWrapper>
    </Layout>
  )
}
