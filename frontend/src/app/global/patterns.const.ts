export const PATTERNS = {
  PHONE_NUMBER: /^(58|\+58|(\(\+58\))?)0{0,1}(242|412|414|416|424|426)\d{7}$/,
  ALPHANUMERIC: /^[a-zA-Z0-9]+$/,
  NUMBER: /^[0-9]+$/,
  FULLNAME: /^([A-Z]?)([a-z]){3,12}\s(([A-Z]{0,1})(([a-z]){3,12}\s?)){1,3}$/,
  DNI_ID: /^(V|J|M|G|E)[0-9]{5,9}$/,
  DNI: /^[0-9]{5,9}$/,
  TRIM: /^\s{1,}|[a-zA-Z]\s{1,}$/,
  TEXT: /[a-zA-Z ]/,
  TEXT_CAPITALIZE: /([a-zA-Z])\w+\s*/,
  EMAIL:
    // eslint-disable-next-line max-len
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/,
  ONLY_NUMBERS: /^[0-9]+$/,
  NUMERIC: /^-?\d+(\,\d+){0,}(\.\d+)?$/,
};
