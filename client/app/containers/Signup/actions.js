/*
 *
 * Signup actions
 *
 */

import { success } from 'react-notification-system-redux';
import axios from 'axios';

import {
  SIGNUP_CHANGE,
  SIGNUP_RESET,
  SET_SIGNUP_LOADING,
  SET_SIGNUP_SUBMITTING,
  SUBSCRIBE_CHANGE,
  SET_SIGNUP_FORM_ERRORS
} from './constants';

import { setAuth } from '../Authentication/actions';
import setToken from '../../utils/token';
import handleError from '../../utils/error';
import { allFieldsValidation } from '../../utils/validation';
import { API_URL } from '../../constants';

export const signupChange = (name, value) => {
  let formData = {};
  formData[name] = value;

  return {
    type: SIGNUP_CHANGE,
    payload: formData
  };
};

export const subscribeChange = () => {
  return {
    type: SUBSCRIBE_CHANGE
  };
};

export const signUp = () => {
  return async (dispatch, getState) => {
    try {
      const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/;

      const rules = {
        email: 'required|email',
        phoneNumber: ['required', `regex:${phoneno}`],
        password: 'required|min:6',
        firstName: 'required',
        lastName: 'required'
      };

      const newUser = getState().signup.signupFormData;
      const isSubscribed = getState().signup.isSubscribed;

      const { isValid, errors } = allFieldsValidation(newUser, rules, {
        'required.email': 'Email is required.',
        'required.phoneNumber': 'Phone number is required.',
        'required.password': 'Password is required.',
        'required.firstName': 'First Name is required.',
        'required.lastName': 'Last Name is required.'
      });

      if (!isValid) {
        return dispatch({ type: SET_SIGNUP_FORM_ERRORS, payload: errors });
      }

      dispatch({ type: SET_SIGNUP_SUBMITTING, payload: true });
      dispatch({ type: SET_SIGNUP_LOADING, payload: true });

      const user = {
        isSubscribed,
        ...newUser
      };

      // Log the user object before sending the request to verify the data
      console.log('User data being sent:', user);

      const response = await axios.post(`${API_URL}/auth/register`, user);

      const successfulOptions = {
        title: `You have signed up successfully! You will be receiving an email as well. Thank you!`,
        position: 'tr',
        autoDismiss: 1
      };

      localStorage.setItem('token', response.data.token);

      setToken(response.data.token);

      dispatch(setAuth());
      dispatch(success(successfulOptions));
      dispatch({ type: SIGNUP_RESET });
    } catch (error) {
      const title = `Please try to signup again!`;
      handleError(error, dispatch, title);
    } finally {
      dispatch({ type: SET_SIGNUP_SUBMITTING, payload: false });
      dispatch({ type: SET_SIGNUP_LOADING, payload: false });
    }
  };
};

