const toggleMenuReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      const newState = !state;
      return newState;
    default:
      return state;
  }
};

// action creators
export const toggleMenu = () => {
  return {
    type: "TOGGLE_MENU",
  };
};

export default toggleMenuReducer;
