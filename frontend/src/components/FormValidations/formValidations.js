// formValidations.js

const required = (value) => (value ? undefined : 'Please Enter Your Name');
const name = (value) => (value ? undefined : 'Please Enter Your Name');
const Lastname = (value) => (value ? undefined : 'Please Enter Your Last Name');

const email = (value) =>
  value && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value) ? 'Invalid email format ' || 'Enter Valid Email' : undefined;

const minLength = (min) => (value) =>
  value && value.length < min ? `Must be at least ${min} characters` : undefined;

const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be at most ${max} characters` : undefined;

const mobileNumber = (value) => (isNaN(value) ? 'Please Enter Mobile Number' : undefined);
const altNumber = (value) => (isNaN(value) ? 'Please Enter Alternate Number' : undefined);
const   dateOfBirth = (value) => (isNaN(value) ? 'Please Enter Date Of Birth' : undefined);
const birthCountry = (value) => (value ? undefined : 'Please Select Your Birth Country');
const HighestEducation = (value) => (value ? undefined : 'Please Select Your Highest Education');
const gender = (value) => (value ? undefined : 'Please Select Your Gender');
const coursesOne = (value) => (value ? undefined : 'Please Select Your First Course');
const coursesTwo = (value) => (value ? undefined : 'Please Select Your Two Course');
const coursesThree = (value) => (value ? undefined : 'Please Select Your Three Course');
const bloodGroup = (value) => (value ? undefined : 'Please Select Your Blood Group');

const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;

const maxValue = (max) => (value) =>
  value && value > max ? `Must be at most ${max}` : undefined;

const regex = (pattern, message) => (value) =>
  value && !pattern.test(value) ? message : undefined;

export { required, email, minLength, maxLength, mobileNumber, minValue, maxValue, regex ,name,Lastname,altNumber,dateOfBirth,birthCountry,HighestEducation,gender,coursesOne,coursesTwo,coursesThree,bloodGroup};
