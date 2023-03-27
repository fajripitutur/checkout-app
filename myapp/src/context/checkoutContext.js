import { createContext, useReducer, useContext } from "react";
import checkoutReducer, { initialState } from "./checkoutReducer";

const CheckoutContext = createContext(initialState);

export const CheckoutProvider = ({ children }) => {
    const [state, dispatch] = useReducer(checkoutReducer, initialState);

    const updateSummary = (payload) => {

        dispatch({
            type: 'UPDATE_SUMMARY',
            payload: payload
        })
    }

    const updateTotalPayment = (payload) => {

        let arr = [...state.tempArr]

        const hasSameKey = arr.some(obj => {
            return obj.type == payload.type;
        });

        if (!hasSameKey) {
            arr.push(...[payload])
        } else {
            arr.find((o, i) => {
                if (o.type === payload.type) {
                    arr[i] = { type: 'deliveryFee', fee: payload.fee };
                    return true;
                }
            });
        }

        const sumOfPayment = arr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.fee;
        }, 0);

        dispatch({
            type: 'UPDATE_TOTAL_PAYMENT',
            payload: {
                arr: arr,
                sum: sumOfPayment
            }
        })
    }

    const updateDelivery = (payload) => {
        dispatch({
            type: 'UPDATE_DELIVERY',
            payload: payload
        })
    }

    const changeStep = (payload) => {
        dispatch({
            type: 'NEXT_STEP',
            payload: {
                step: payload
            }
        })
    }



    const value = {
        stepForm: state.step,
        deliveryDetails: state.deliveryDetails,
        paymentDetails: state.paymentDetails,
        summaryDetails: state.summaryDetails,
        updateSummary,
        updateTotalPayment,
        updateDelivery,
        changeStep,
    };
    return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
};

const useCheckout = () => {
    const context = useContext(CheckoutContext);

    if (context === undefined) {
        throw new Error("useCheckout must be used within CheckoutContext");
    }

    return context;
};

export default useCheckout;
