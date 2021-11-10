const idField = document.getElementById('student_id');
const nameField = document.getElementById('student_name');
const emailField = document.getElementById('email');

const updateUIValidationState = (field, state) => {
	if (state) {
		field.classList.remove('is-invalid');
		field.classList.add('is-valid');
	} else {
		field.classList.remove('is-valid');
		field.classList.add('is-invalid');
	}
};

const validateId = (event) => {
	const id = idField.value;
	const re = /^\d+$/;
	const validId = re.test(String(id)) && id.length !== 0;
	updateUIValidationState(idField, validId);
};

const validateName = (event) => {
	const name = nameField.value;
	const re = /^[A-Za-z]+$/;
	const validName = re.test(String(name)) && name.length !== 0;
	updateUIValidationState(nameField, validName);
};

const validateAge = (event) => {
	const age = ageField.value;
	const validAge = age > 0;
	updateUIValidationState(ageField, validAge);
};

nameField.addEventListener('keyup', validateName);
ageField.addEventListener('keyup', validateAge);
