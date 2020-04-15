let initial_state = {
  all_notes: {
    page_title_color: "#707070",
    page_des_color: "#707070",
    plus_color: "#707070",
    background_color: "#F7F7F7",
    background_image:
      "https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(20).jpg",
  },
  navigation_bar: {
    application_logo: "",
  },
};

const SettingsReducers = (state = initial_state, actions) => {
  switch (actions.type) {
    case "SET_ALL_NOTES_SETTINGS":
      return {
        ...state,
        all_notes: {
          ...state.all_notes,
          ...actions.payload,
        },
      };
    case "SET_NAVIGATION_BAR_SETTINGS":
      return {
        ...state,
        navigation_bar: {
          ...state.navigation_bar,
          ...actions.payload,
        },
      };
    default:
      return state;
  }
};

export default SettingsReducers;

// #D92352
