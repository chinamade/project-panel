import Cookies from 'js-cookie'

const isDev = process.env.NODE_ENV !== "production"

const TokenKey = 'msandbox-' + process.env.PANEL_TOKEN_NAME + '-jwt'

export function getToken() {
    if (!isDev) {
        return Cookies.get(TokenKey)
    } else {
        return process.env.bridge.access_token
    }
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}