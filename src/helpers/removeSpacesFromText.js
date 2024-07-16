const removeSpacesFromString = (str) => {
  return str.replace(/[^\d]/g, "");
};

export default removeSpacesFromString;
