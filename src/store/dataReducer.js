import * as TYPES from './types';

const initialState = {
  error: false,
  movies: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_MOVIES:
      return {
        ...state,
        movies: action.data,
      };
    case TYPES.ERROR:
      return {
        ...state,
        error: true,
      };
    // no default
  }
  return state;
};

export default dataReducer;
