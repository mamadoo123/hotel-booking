const INITIAL_STATE = {
    token: '',
    userData: null,
    isLogged: false,
}

export default authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return{
                ...state,
                token: action.payload.token, 
                userData: action.payload.userData,
                isLogged: true,
            }
    
        case 'LOGOUT':
            return{
                ...state,
                token: '',
                userData: null,
                isLogged: false,
            }
        case 'REGISTER':
            const {token, userData } = action.payload;
            return{
                ...state, 
                token: action.payload.token, 
                userData: action.payload.userData,
                isLogged: true,
            }
        
        default:
            return{...state}
    }
}