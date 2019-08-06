const RoomsReducer = (state, action) => {
  switch (action.type) {
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
