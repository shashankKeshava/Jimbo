import {
    UPDATE_FORM_DATA,
    SEND_FORM_DATA,
    SUBMIT_SUCCESS
} from '../utils/actionTypes'

export function updateFormData(payload) {
    return dispatch => dispatch({
        type: UPDATE_FORM_DATA,
        payload
    })
}

export function sendFormData() {
    return dispatch => dispatch({
        type: SEND_FORM_DATA
    })
}

export function formSubmitSuccess() {
    return dispatch => dispatch({
        type: SUBMIT_SUCCESS
    })

}