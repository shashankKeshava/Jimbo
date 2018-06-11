import initialState from '../utils/initialState'
import {
  setIn
} from 'timm'

import {
  UPDATE_FORM_DATA
} from '../utils/actionTypes'


const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      {
        const {
          type,
          value
        } = action.payload
        const newState = setIn(prevState, ['data', type], value);
        return newState;
      }
    default:
      return prevState;
  }
};

export default reducer;