import * as TYPES from './types';

const initialState = {
  reservations: null,
  activeDay: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][
    new Date().getDay()
  ],
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
  modalVisible: false,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_RESERVATIONS:
      return {
        ...state,
        reservations: action.data,
      };
    case TYPES.HIDE_MODAL:
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
        bookable: false,
      };
    case TYPES.SHOW_BOOKING_MODAL:
      return {
        ...state,
        modalVisible: true,
        activeHour: action.hour,
        activeTitle: action.title,
      };
    case TYPES.CHANGE_ACTIVE_DAY:
      return {
        ...state,
        activeDay: action.day,
      };
    case TYPES.TOGGLE_ACTIVATED_SEAT:
      let newActiveSeats = [...state.activeSeats];
      if (!state.booked) {
        if (state.activeSeats.includes(action.seat)) {
          newActiveSeats = newActiveSeats.filter((item) => item !== action.seat);
        } else {
          newActiveSeats.push(action.seat);
        }
      }
      return {
        ...state,
        activeSeats: newActiveSeats,
      };
    case TYPES.UPDATE_NAME:
      return {
        ...state,
        reservationName: action.name,
      };
    case TYPES.UPDATE_SURNAME:
      return {
        ...state,
        reservationSurname: action.surname,
      };
    case TYPES.UPDATE_PHONE:
      return {
        ...state,
        reservationPhone: action.phone,
        bookable: true,
      };
    case TYPES.UPDATE_EMAIL:
      return {
        ...state,
        reservationEmail: action.email,
      };
    case TYPES.SHOW_SUMMARY:
      action.e.preventDefault();
      return {
        ...state,
        summaryVisible: true,
      };
    case TYPES.RESERVE_SEATS:
      return {
        ...state,
        reservedSeats: action.seats,
        booked: true,
      };
    case TYPES.SET_BOOKABLE:
      return {
        ...state,
        bookable: true,
      };
    case TYPES.UNSET_BOOKABLE:
      return {
        ...state,
        bookable: false,
      };
    case TYPES.SET_RESERVED_SEATS:
      return {
        ...state,
        reservedSeats: action.data,
      };
    // no default
  }
  return state;
};

export default bookingReducer;
