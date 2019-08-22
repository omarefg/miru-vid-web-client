import * as actions from './types'
import axios from 'axios'
import { URL } from '../utils/webconfig'

export const drawerOpenStatusHandler = () => {
    return {
        type: actions.CHANGE_DRAWER_OPEN_STATUS
    }
}

export const hasSessionStatusHandler = hasSession => {
    return {
        type: actions.CHANGE_HAS_SESSION_STATUS,
        payload: {
            hasSession
        }
    }
}

export const getAllSections = () => async () => {
    try {
        const sections = await axios.request({
            responseType: 'json',
            url: URL + '/section',
            method: 'get'
        })
        return sections.data
    } catch (error) {
        throw error
    }
}
