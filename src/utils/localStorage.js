export const saveUserToLocalStorage = (user, token) => {
    window.localStorage.setItem('user', JSON.stringify(user))
    window.localStorage.setItem('token', JSON.stringify(token))
}
export const removeUserFromLocalStorage = () => {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token')
}
