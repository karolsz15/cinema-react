const initialState = {
        modalVisible: false,
        error: false,
        movies: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                ...state,
                modalVisible: true
            }
        case 'HIDE_MODAL':
            return {
                ...state,
                modalVisible: false
            }
        case 'SET_MOVIES':
            return {
                ...state,
                movies: action.data
            }
        case 'ERROR':
            return {
                ...state,
                error: true
            }
    }
    return state;
}

export default reducer;