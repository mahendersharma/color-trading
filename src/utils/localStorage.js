export const saveUserToLocalStorage = (user, token) => {
    try {
        window.localStorage.setItem('user', JSON.stringify(user));
        window.localStorage.setItem('token', token); // Store token as a string
    } catch (error) {
        console.error("Failed to save user to local storage:", error);
    }
}

export const removeUserFromLocalStorage = () => {
    try {
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('token');
    } catch (error) {
        console.error("Failed to remove user from local storage:", error);
    }
}
