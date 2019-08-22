import * as actions from './types'
import axios from 'axios'
import { URL } from '../utils/webconfig'

export const changeLoginUsername = username => {
    return {
        type: actions.CHANGE_LOGIN_USERNAME,
        payload: {
            user_username: username
        }
    }
}

export const changeLoginPassword = password => {
    return {
        type: actions.CHANGE_LOGIN_PASSWORD,
        payload: {
            user_password: password
        }
    }
}

export const login = user => async dispatch => {
    try {
        let res = await axios.request({
            responseType: 'json',
            url: URL + '/user/login',
            method: 'post',
            data: user
        })
        return res.data
    } catch (error) {
        if (error.response && error.response.data) {
            dispatch({
                type: actions.ERROR_IN_USER_LOGIN,
                payload: {
                    notConfirmedError: error.response.data.notConfirmed ? 'El correo electrónico no ha sido confirmado.' : '',
                    usernameError: error.response.data.username ? 'El usuario no es correcto.' : '',
                    passwordError: error.response.data.password ? 'La contraseña no es correcta.' : '',
                    messageError: error.response.data.error || ''
                }
            })
        }
        if (!error.response && error.message) {
            dispatch({
                type: actions.ERROR_IN_NEW_USER,
                payload: {
                    messageError: error.message
                }
            })
        }
        throw error
    }
}

export const restoreLoginError = () => {
    return {
        type: actions.RESTORE_LOGIN_ERROR
    }
}

export const resendConfirmationFormMessageHandler = () => {
    return {
        type: actions.RESEND_CONFIRMATION_EMAIL_FORM_MESSAGE_HANDLER
    }
}

export const changeLoginEmail = email => {
    return {
        type: actions.CHANGE_LOGIN_EMAIL,
        payload: {
            user_email: email
        }
    }
}

export const sendConfirmationEmail = email => async dispatch => {
    try {
        await axios.request({
            responseType: 'json',
            url: URL + '/user/confirmation/email',
            method: 'post',
            data: { email }
        })
    } catch (error) {
        throw error
    }
}
