import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import Title from '../../components/title';
import Layout from '../../containers/Layout'
import Summary from '../../components/summary';
import StyleWrapper from './style'
import { useForm, FormProvider } from "react-hook-form";
import SubmitButton from '../../components/submitButton';
import useCheckout from '../../context/checkoutContext'

export default function () {
  const navigate = useNavigate()
  const { changeStep, updateTotalPayment, updateSummary, summaryDetails } = useCheckout();
  const methods = useForm();

  function onSubmit(data) {
    if (methods.formState.errors) {
      // alert("Form submitted successfully!");
      changeStep(2)
      navigate('/payment')
    }
  }

  const watchDropshipper = methods.watch("dropsipperName");


  function onChangeDropshipper(value) {

    updateSummary({
      isDropshipper: !summaryDetails.isDropshipper,
    })

    updateTotalPayment({
      type: 'dropshipperFee',
      ...(value ? { fee: summaryDetails.dropshipperFee } : {})
    })
  }

  return (
    <Layout>
      <StyleWrapper>

        <div className='delivery-box'>

          <FormProvider {...methods} >

            <form className='delivery-box__content' onSubmit={methods.handleSubmit(onSubmit)}>

              <div className='delivery-box__content-form'>

                <div className='delivery-box__header'>
                  <Title title='Delivery Details' />
                  <div>
                    <input
                      type="checkbox"
                      checked={summaryDetails.isDropshipper}
                      id="isDropshipper"
                      name="isDropshipper"
                      value={summaryDetails.isDropshipper}
                      onChange={(e) => onChangeDropshipper(e.target.checked)}
                    />
                    <label htmlFor="isDropshipper"> Send as Dropshipper</label>
                  </div>
                </div>

                {
                  !summaryDetails.isDropshipper && (
                    <div style={{ borderRadius: '4px', padding: ' 5px', border: '1px solid #FF8A00', margin: '10px 0', backgroundColor: '#FFFAE6', color: '#FF8A00' }}>
                      <span>Lewati isian dropshipper jika anda bukan sebagai dropshipper</span>
                    </div>
                  )
                }

                <div className='form'>
                  <div className='form-common'>
                    <div className='form-group'>
                      <input
                        type="email"
                        placeholder='Email'
                        {...methods.register('email', { required: true, pattern: /^\S+@\S+(\.\S+)*\.\S{2,}$/i })}
                        aria-invalid={methods.formState?.errors?.email ? "true" : "false"}
                        // className={(methods.formState?.errors?.email ? 'input-error' : 'input-valid')}
                        className={
                          `input-field 
                          ${methods.formState?.errors?.email && 'error'}
                          ${methods.formState?.dirtyFields.email && !methods.formState?.errors?.hasOwnProperty('email') && 'success'}`
                        }
                      />
                      {methods.formState?.errors?.email?.type === "required" && <span className='form-error-input'>Email field is required</span>}
                      {methods.formState?.errors?.email?.type === "pattern" && (
                        <span className='form-error-input'>Invalid Email</span>
                      )}
                    </div>

                    <div className='form-group'>
                      <input
                        placeholder='Phone Number'
                        {...methods.register("phoneNumber", {
                          required: true,
                          pattern: /^[0-9()+-]*$/,
                          minLength: 6,
                          maxLength: 20,
                        })}
                        aria-invalid={methods.formState?.errors?.phoneNumber ? "true" : "false"}
                        className={`input-field 
                        ${methods.formState?.errors?.phoneNumber && 'error'}
                        ${methods.formState?.dirtyFields.phoneNumber && !methods.formState?.errors?.hasOwnProperty('phoneNumber') && 'success'}`}
                      />
                      {methods.formState?.errors?.phoneNumber?.type === 'required' && (
                        <span className='form-error-input'>Phone Number is required</span>
                      )}
                      {methods.formState?.errors?.phoneNumber?.type === 'pattern' && (
                        <span className='form-error-input'>Please enter a valid phone number</span>
                      )}
                      {methods.formState?.errors?.phoneNumber?.type === "minLength" && (
                        <span className='form-error-input'>Phone number must be at least 6 digits</span>
                      )}
                      {methods.formState?.errors?.phoneNumber?.type === "maxLength" && (
                        <span className='form-error-input'>Phone number can be at most 20 digits</span>
                      )}
                    </div>

                    <div className='form-group'>
                      <textarea
                        style={{
                          fontFamily: 'Open-Sans, Helvetica, sans-serif', height: '100px', fontSize: '16px'
                        }}
                        placeholder='Delivery Address'
                        {...methods.register("deliveryAddress", {
                          required: true,
                          maxLength: 120,
                        })}
                        aria-invalid={methods.formState?.errors?.deliveryAddress ? "true" : "false"}
                        className={`input-field 
                        ${methods.formState?.errors?.deliveryAddress && 'error'}
                        ${methods.formState?.dirtyFields.deliveryAddress && !methods.formState?.errors?.hasOwnProperty('deliveryAddress') && 'success'}`}
                      />
                      <span className='' style={{ fontSize: '8px', }}>
                        {methods.watch("deliveryAddress")?.length} / 120
                      </span>
                      {methods.formState?.errors?.deliveryAddress?.type === "required" && (
                        <span className='form-error-input'>This field is required</span>
                      )}
                      {methods.formState?.errors?.deliveryAddress?.type === "maxLength" && (
                        <span className='form-error-input'>Max length is 120 characters</span>
                      )}
                    </div>
                  </div>

                  <div className='form-dropshipper'>

                    <div className='form-group'>
                      <input
                        placeholder='Dropshipper Name'
                        {...methods.register("dropsipperName", { required: summaryDetails.isDropshipper, })}
                        aria-invalid={methods.formState?.errors?.dropsipper ? "true" : "false"}
                        disabled={!summaryDetails.isDropshipper}
                        className={`input-field 
                        ${methods.formState?.errors?.dropsipperName && 'error'}
                        ${methods.formState?.dirtyFields.dropsipperName && !methods.formState?.errors?.hasOwnProperty('dropsipperName') && 'success'}`}
                      />
                      {/* {!summaryDetails.isDropshipper && !watchDropshipper && (
                        <span>{!summaryDetails.isDropshipper && methods.formState?.errors?.dropsipperName?.type === "required" && <span className='form-error-input'>This field is required</span>}</span>
                      )} */}
                      {methods.formState?.errors?.dropsipperName?.type === "required" && <span className='form-error-input'>Dropshipper Name is required</span>}
                    </div>

                    <div className='form-group'>
                      <input
                        placeholder='Dropshipper Phone Number'
                        {...methods.register("dropshipperPhone", {
                          required: summaryDetails.isDropshipper,
                          pattern: /^[0-9()+-]*$/,
                          minLength: 6,
                          maxLength: 20,
                        })}
                        aria-invalid={methods.formState?.errors?.dropshipperPhone ? "true" : "false"}
                        disabled={!summaryDetails.isDropshipper}
                        className={`input-field 
                        ${methods.formState?.errors?.dropshipperPhone && 'error'}
                        ${methods.formState?.dirtyFields.dropshipperPhone && !methods.formState?.errors?.hasOwnProperty('dropshipperPhone') && 'success'}`}
                      />
                      {methods.formState?.errors?.dropshipperPhone?.type === 'required' && <span className='form-error-input'>Dropshipper Phone Number is required</span>}
                      {methods.formState?.errors?.dropshipperPhone?.type === 'pattern' && <span className='form-error-input'>Please enter a valid phone number</span>}
                      {methods.formState?.errors?.dropshipperPhone?.type === "minLength" && (
                        <span className='form-error-input'>Dropshipper Phone number must be at least 6 digits</span>
                      )}
                      {methods.formState?.errors?.dropshipperPhone?.type === "maxLength" && (
                        <span className='form-error-input'>Dropshipper Phone number can be at most 20 digits</span>
                      )}
                    </div>

                  </div>

                </div>
              </div>

              <div className='delivery-box__content-summary'>
                <Summary />
              </div>

            </form>

          </FormProvider>
        </div>


      </StyleWrapper>

    </Layout>
  )
}
