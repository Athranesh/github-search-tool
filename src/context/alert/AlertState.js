import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = null;

  //Since we have only 1 state for alert, it being true or false, instead of turing initial state to {
  //      alert: false
  //   }
  //We can simply put the entire state as null and later turn it to an object.

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT
        }),
      3000
    );
  };
  //Remove Alert
  const removeAlert = () => {
    dispatch({
      type: REMOVE_ALERT
    });
  };

  return (
    <AlertContext.Provider
      value={{
        //since we have only one state value and it is not an object, we can put the alert as the entire state.
        alert: state,
        setAlert,
        removeAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
