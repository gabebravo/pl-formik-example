export function wasTouched(name, touched) {
  const isNestedObject = name.split('').includes('.');
  if (isNestedObject) {
    const keys = name.split('.');
    switch (keys.length) {
      case 2:
        const [key1, key2] = keys;
        return touched && touched[key1] && touched[key1][key2];
      // TODO : add case 3, 4, 5, etc
      default:
        return;
    }
  } else {
    return touched[name];
  }
}

export function isInvalid(name, errors) {
  const isNestedObject = name.split('').includes('.');
  if (isNestedObject) {
    const keys = name.split('.');
    switch (keys.length) {
      case 2:
        const [key1, key2] = keys;
        return errors && errors[key1] && errors[key1][key2];
      // TODO : add case 3, 4, 5, etc
      default:
        return;
    }
  } else {
    return errors[name];
  }
}
