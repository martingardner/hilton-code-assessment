const RoomsReducer = (state, action) => {
  switch (action.type) {
    case "ROOM_CHECKBOX":
      return {
        ...state,
        [action.index]: {
          ...state[action.index],
          checkboxChecked: action.checked
        }
      };
    case "UPDATE_ACTIONINDEXVALUE":
      console.log(
        "UPDATE_ACTIONINDEXVALUE",
        action.index,
        action.param,
        action.value
      );
      return {
        ...state,
        [action.index]: {
          ...state[action.index],
          [action.param]: action.value
        }
      };
    case "POPULATE_DATA":
      return action.data;
  }
};

export default RoomsReducer;
