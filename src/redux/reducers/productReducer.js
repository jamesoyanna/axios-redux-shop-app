import {ActionTypes } from '../constants/action-types';
const intialState = {
  products: [
    {
      id: 1,
      title: "Dipesh",
      category: "programmer",
    },
  ],
};
export const productReducer = (state = intialState, {type, payload}) => {
    switch (type) {
      case ActionTypes.SET_PRODUCTS:
        return state;
      default:
        return state;
    }
}