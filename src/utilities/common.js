import cryptoRandomString from "crypto-random-string";

export const checkArraySanity = (array) => {
  return array && Array.isArray(array) && array?.length;
};

export const validateString = (str) => {
  return typeof str === "string" && str?.length > 0;
};

export const createRandomString = (length = 8, type) => {
  const options = {};
  if (length && length > 0) options.length = length;
  if (type && type?.length > 0) options.type = type;
  return cryptoRandomString(options);
};
