import {
    UPDATE_FORM_DATA
} from '../utils/actionTypes'

export function updateFormData(payload) {
    return dispatch => dispatch({
        type: UPDATE_FORM_DATA,
        payload
    })
}