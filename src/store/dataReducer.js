const initialState = {
    error: false,
    movies: null
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
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
        // no default
    }
    return state;
};

export default dataReducer;

