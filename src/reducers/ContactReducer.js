import uuid from "uuid/v4";

export const contactReducer = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_CONTACT":
      return [
        ...state,
        {
          name: action.contact.name,
          phone: action.contact.phone,
          email: action.contact.email,
          id: uuid(),
        },
      ];
    case "REMOVE_CONTACT":
      return state.filter((contact) => contact.id !== action.id);
    default:
      return state;
  }
};
