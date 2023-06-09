
export const initialState = {
    deliveryDetails: {
        email: '',
        dropshipperName: '',
        phoneNumber: '',
        dropshipperPhoneNumber: '',
        address: '',
    },
    paymentDetails: {
        shipment: {
            courier: 'GO-SEND',
            fee: 15000
        },
        paymentMethod: 'e-Wallet',
    },
    summaryDetails: {
        isDropshipper: false,
        textButton: 'Continue To Payment',
        deliveryCourier: 'GO-SEND',
        paymentMethod: 'e-Wallet',
        deliveryFee: 15000,
        totalPrice: 500000,
        goodsPrice: 500000,
        dropshipperFee: 5000,
    },
    step: 1,
    tempArr: [{ type: 'goodsFee', fee: 500000 }],
}

const checkoutReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "UPDATE_SUMMARY":
            return {
                ...state,
                summaryDetails: {
                    ...state.summaryDetails,
                    ...payload,
                }
            }
        case "UPDATE_TOTAL_PAYMENT":
            return {
                ...state,
                tempArr: payload.arr,
                summaryDetails: {
                    ...state.summaryDetails,
                    totalPrice: payload.sum
                }
            }
        case "UPDATE_DELIVERY":
            return {
                ...state,
                deliveryDetails: {
                    ...state.deliveryDetails,
                    isDropShipper: payload
                }
            }
        case "NEXT_STEP":
            return {
                ...state,
                step: payload.step
            }
        default:
            throw new Error(`No case for type ${type} found in checkoutReducer.`);
    }
};

export default checkoutReducer;