const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const ageField = document.getElementById('age');
const phoneNumberField = document.getElementById('phoneNumber');
const stateField = document.getElementById('state');
const addressField = document.getElementById('address');
const branchField = document.getElementById('branch');
const collegeField = document.getElementById('college');

const registrationForm = document.getElementById('registrationForm');

const updateUIValidationState = (field, state) => {
	if (state) {
		field.classList.remove('is-invalid');
		field.classList.add('is-valid');
	} else {
		field.classList.remove('is-valid');
		field.classList.add('is-invalid');
	}
};

const validateName = (event) => {
	const name = nameField.value;
	const re = /[a-zA-Z]/;
	const validName = re.test(String(name)) && name.length !== 0;
	updateUIValidationState(nameField, validName);
};

const validateEmail = (event) => {
	const email = emailField.value;
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const validEmail = re.test(String(email)) && email.length !== 0;
	updateUIValidationState(emailField, validEmail);
};

const validateUsername = (event) => {
	const username = usernameField.value;
	const re = /^[A-Z]+[a-zA-Z0-9]/;
	const validUsername = re.test(String(username)) && username.length !== 0;
	updateUIValidationState(usernameField, validUsername);
};

const validatePassword = (event) => {
	const password = passwordField.value;
	const re =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	const reEmbeddedCheck =
		/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

	const validPassword =
		re.test(String(password)) &&
		reEmbeddedCheck.test(String(password.slice(1, password.length - 1)));

	updateUIValidationState(passwordField, validPassword);
};

const validateConfirmPassword = (event) => {
	const confirmPassword = confirmPasswordField.value;
	const validConfirmPassword = passwordField.value == confirmPassword;

	updateUIValidationState(confirmPasswordField, validConfirmPassword);
};

const validateAge = (event) => {
	const age = ageField.value;
	const validAge = age > 0;
	updateUIValidationState(ageField, validAge);
};

const validatePhoneNumber = (event) => {
	const phoneNumber = phoneNumberField.value;
	const re = /[0-9]{10}/;
	const validPhoneNumber =
		re.test(String(phoneNumber)) && phoneNumber.length == 10;
	updateUIValidationState(phoneNumberField, validPhoneNumber);
};

nameField.addEventListener('keyup', validateName);
emailField.addEventListener('keyup', validateEmail);
usernameField.addEventListener('keyup', validateUsername);
passwordField.addEventListener('keyup', validatePassword);
confirmPasswordField.addEventListener('keyup', validateConfirmPassword);
ageField.addEventListener('keyup', validateAge);
phoneNumberField.addEventListener('keyup', validatePhoneNumber);

registrationForm.addEventListener('submit', (event) => {
	localStorage.setItem('username', usernameField.value);
	localStorage.setItem('phoneNumber', phoneNumberField.value);

	document.cookie = `username:${usernameField.value}; phoneNumber:${phoneNumberField.value}`;

	var xmlDoc = document.implementation.createDocument(null, 'students');
});
