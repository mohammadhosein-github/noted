export const SET_NAVIGATION_BAR_SETTINGS = (settings_data) => {
  return {
    type: "SET_NAVIGATION_BAR_SETTINGS",
    payload: settings_data,
  };
};

export const SET_ALL_NOTES_SETTINGS = (settings_data) => {
  return {
    type: "SET_ALL_NOTES_SETTINGS",
    payload: settings_data,
  };
};
