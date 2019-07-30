import * as Yup from 'yup';
import { emailRegexCheck } from './helpers';

// Form level validation for Cars Schema
export const UserValidation = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string()
    .required('Required')
    .test('user-email-regex', 'Incorrect Email Format', val =>
      emailRegexCheck(val)
    ),
  address: Yup.object().shape({
    line1: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    zip: Yup.string().required('Required')
  })
});
