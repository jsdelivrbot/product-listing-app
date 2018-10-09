import _ from "lodash";
import { SUBTRACT_FROM_CART, ADD_TO_CART } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case SUBTRACT_FROM_CART:
      let ss = action.payload.all || state.find(item => item.id === action.payload.productId).count === 1 ? state.filter(item => item.id !== action.payload.productId) : state.map(item => {
        item.id === action.payload.productId ? item.count-- : ''
        return item
      });
      return ss
    case ADD_TO_CART:
      return Boolean(state.find(item => item.id === action.payload.id)) ? state.reduce((acc, curr) => {
        curr.count = curr.id === action.payload.id ? ++curr.count : curr.count
        acc.push(curr)
        return acc
      }, []) : [...state, Object.assign({}, action.payload, {count: 1})]
  }
  return state;
}
