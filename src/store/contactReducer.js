const initialState = {
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  contactMessage: '',
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CONTACT_NAME':
      return {
        ...state,
        contactName: action.name,
      };
    case 'UPDATE_CONTACT_EMAIL':
      return {
        ...state,
        contactEmail: action.email,
      };
    case 'UPDATE_CONTACT_PHONE':
      return {
        ...state,
        contactPhone: action.phone,
      };
    case 'UPDATE_MESSAGE':
      return {
        ...state,
        contactMessage: action.message,
      };
    // no default
  }
  return state;
};

export default contactReducer;
