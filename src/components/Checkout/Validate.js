export const required = value => value ? undefined : "Required";

export const phoneNumber = value => {
  if (value ) {
    return "";
  } else {
    return undefined;
  }
};

export const postcode = value => {
  if (value) {
    return "";
  } else {
    return undefined;
  }
};
