export function wasTouched(name, touched) {
  const isNestedObject = name.split('').includes('.');
  if (isNestedObject) {
    const keys = name.split('.');
    switch (keys.length) {
      case 2:
        const [key1, key2] = keys;
        return touched && touched[key1] && touched[key1][key2] ? true : false;
      // TODO : add case 3, 4, 5, etc
      default:
        return;
    }
  } else {
    return touched[name] ? true : false;
  }
}

export function isInvalid(name, errors) {
  const isNestedObject = name.split('').includes('.');
  if (isNestedObject) {
    const keys = name.split('.');
    switch (keys.length) {
      case 2:
        const [key1, key2] = keys;
        return errors && errors[key1] && errors[key1][key2] ? true : false;
      // TODO : add case 3, 4, 5, etc
      default:
        return;
    }
  } else {
    return errors[name] ? true : false;
  }
}

export function getErrorString(name, errors) {
  const isNestedObject = name.split('').includes('.');
  if (isNestedObject) {
    const keys = name.split('.');
    switch (keys.length) {
      case 2:
        const [key1, key2] = keys;
        return errors && errors[key1] && errors[key1][key2]
          ? errors[key1][key2]
          : '';
      // TODO : add case 3, 4, 5, etc
      default:
        return;
    }
  } else {
    return errors[name] ? errors[name] : '';
  }
}

export function dateRegexCheck(testdate) {
  var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  return date_regex.test(testdate);
}

export function emailRegexCheck(testEmail) {
  var email_regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return email_regex.test(testEmail);
}

export const transformUser = userObj => {
  const {
    email,
    name,
    address: { street, city, zipcode }
  } = userObj;
  const [firstName, lastName] = name.split(' ');
  return {
    firstName,
    lastName,
    email,
    address: {
      line1: street,
      city,
      state: 'FL',
      zip: zipcode
    }
  };
};
