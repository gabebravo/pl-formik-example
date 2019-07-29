## PL Travel Planer

This project uses the following technologies: CRA, React, Hooks, Redux, Thunks, Material UI, Formik, Yup and Moment

### Overview

The app simulates a trip planner for the purposes of travel. There are five available sections. By default the User expansion Panel is open. Once the user fills is out correclty, and the fields validate, the other sections will be available to open. In order to submit, the User section and at least one other section must be filled out and validate. Once those requirements are met, the user can submit the form. At this point, the form fields should reset, and an alert will open with the JSON payload that is being mimiced that would be sent upon submission.

### Other features

The user will get feedback if a field is invalid. Additionally, the user can search by their email to pre-fill the fields in the form. Those fields will then become read-only, as the user is not allowed to change them. Upon validating, the user is allowed to reset the user section should they want to fill it out differently. The date fields in the other sections will have a dependency on the travel dates filled out in the user section. Basically, the user is not allowed to book dates in the other sections are that are before the start date or after the end date.

### API for User

jsonplaceholder.typicode.com was used to mimic API calls to fetch a users data. There are two useful endpoints provided:

10 Users at as time: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
Information for a user based on a search key : [https://jsonplaceholder.typicode.com/users?email=Sincere@april.biz](https://jsonplaceholder.typicode.com/users?email=Sincere@april.biz)

### Deployed version

You can visit the deployed version here: [PL Travel Planer](https://reactjs.org/).
