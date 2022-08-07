export const checkArraySanity = (array) => {
  return array && Array.isArray(array) && array?.length;
};

export const validateString = (str) => {
  return typeof str === "string" && str?.length > 0;
};
