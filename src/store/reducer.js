const initialState = {
        error: false,
        movies: null,
    	reservations: null,
		activeDay: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][new Date().getDay()],
		activeHour: null,
        activeTitle: null,
        activeSeats: [],
        reservedSeats: [],
        reservationName: null,
        reservationSurname: null,
        reservationEmail: null,
        reservationPhone: null,
        summaryVisible: false,
        booked: false,
        bookable: false,
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        contactMessage: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HIDE_MODAL':
            return {
                ...state,
                modalVisible: false,
                activeSeats: [],
                reservedSeats: [],
                reservationName: null,
                reservationSurname: null,
                reservationEmail: null,
                reservationPhone: null,
                summaryVisible: false,
                booked: false,
                bookable: false
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
        case 'TOGGLE_ACTIVATED_SEAT':
            let newActiveSeats = [...state.activeSeats];
            if (!state.booked) {
                if (state.activeSeats.includes(action.seat)) {
                    newActiveSeats = newActiveSeats.filter(item => item !== action.seat);
                } else {
                    newActiveSeats.push(action.seat);
                }
            }
            return {
                ...state,
                activeSeats: newActiveSeats
            }
        case 'UPDATE_NAME':
            return {
                ...state,
                reservationName: action.name
            }
        case 'UPDATE_SURNAME':
            return {
                ...state,
                reservationSurname: action.surname
            }
        case 'UPDATE_PHONE':
            return {
                ...state,
                reservationPhone: action.phone,
                bookable: true
            }
        case 'UPDATE_EMAIL':
            return {
                ...state,
                reservationEmail: action.email
            }
        case 'SHOW_SUMMARY':
            action.e.preventDefault();
            return {
                ...state,
                summaryVisible: true
            }
        case 'RESERVE_SEATS':
            return {
                ...state,
                reservedSeats: action.seats,
                booked: true
            }
        case 'SET_BOOKABLE':
            return {
                ...state,
                bookable: true
            }
        case 'UNSET_BOOKABLE':
            return {
                ...state,
                bookable: false
            }
        case 'SET_RESERVED_SEATS':
            return {
                ...state,
                reservedSeats: action.data
            }
        case 'UPDATE_CONTACT_NAME':
            return {
                ...state,
                contactName: action.name
            }
        case 'UPDATE_CONTACT_EMAIL':
            return {
                ...state,
                contactEmail: action.email
            }
        case 'UPDATE_CONTACT_PHONE':
            return {
                ...state,
                contactPhone: action.phone
            }
        case 'UPDATE_MESSAGE':
            return {
                ...state,
                contactMessage: action.message
            }
    }
    return state;
}

export default reducer;