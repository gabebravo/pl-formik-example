## PL Travel Planer

This project uses the following technologies: CRA, React, Hooks, Redux, Thunks, Material UI, Formik, Yup and Moment. Although the scale is smaller in the demo, the patterns can be used to solve the problem of having more than 100 fields per a single view. By splitting fields up into individual Formiks, the user experience is greatly improved based on much faster field responsiveness due to less re-renderings. By using Redux as the glue, all form state can still be accessed outside the Formik scope.

### Overview

The app simulates a trip planner for the purposes of travel. There are five available sections. By default the User expansion Panel is open. Once the user fills it out correclty, and the fields validate, the other sections will be available to open. In order to submit, the User section and at least one other section must be filled out and validate. Once those requirements are met, the user can submit the form. At this point, the form fields should reset, sections should close, and the JSON payload will be displayed in the console. The log is showing what would be sent to an API upon submission.

### Other features

The user will get feedback if a field is invalid. For example, if the user doesn't enter the correct email format in the email field. Additionally, the user can search by their email to pre-fill the fields in the User section of the form. Those fields will then become read-only, as the user is not allowed to change them. Upon validating, the user is allowed to reset the user section should they want to fill it out differently.

### API for User

<b>jsonplaceholder.typicode.com</b> was used to mimic API calls to fetch a users data. There are two useful endpoints provided:

10 Users at as time: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)<br>
Information for a user based on a search key : [https://jsonplaceholder.typicode.com/users?email=Sincere@april.biz](https://jsonplaceholder.typicode.com/users?email=Sincere@april.biz)<br>
Test user: Sincere@april.biz

### Deployed version

Deployed version on Heroku: [PL Travel Planer](https://pl-trip-planner.herokuapp.com/).

##### TODO

Make API call function more flexible - allow other search params<br>
Add modal to handle scenario where no users are found in the search
