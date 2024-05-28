const initialState = {
    user: {}
};
// UserReducer.js
export const setUser = (user) => ({
    type: 'SET_USER',
    payload: user
});

// Le reste de votre reducer


function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload // Utilisez action.payload au lieu de action.value
            };
        default:
            return state;
    }
}

export default userReducer;
