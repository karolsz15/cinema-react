const initialState = {
        modalVisible: false,
        error: false,
        movies: null,
    	reservations: null,
		activeDay: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][new Date().getDay()],
		activeHour: null,
		activeTitle: null
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
        case 'SET_RESERVATIONS':
            return {
                ...state,
                reservations: action.data
            }
        case 'ERROR':
            return {
                ...state,
                error: true
            }
        case 'SHOW_BOOKING_MODAL':
            return {
                ...state,
                modalVisible: true,
                activeHour: action.hour,
                activeTitle: action.title
            }
        case 'CHANGE_ACTIVE_DAY':
            return {
                ...state,
                activeDay: action.day
            }
    }
    return state;
}

export default reducer;