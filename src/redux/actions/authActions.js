export const login = (token, userData) => ({
    type: "LOGIN",
    payload: {
        token, userData
    }
});

export const register = (token, userData) => ({
    type: "REGISTER",
    payload: {
        token, userData,
    }
});