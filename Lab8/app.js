// Form Blur Event Listeners
document.getElementById('name').addEventListener('keyup', validateName);
document.getElementById('zip').addEventListener('keyup', validateZip);
document.getElementById('email').addEventListener('keyup', validateEmail);
document.getElementById('phone').addEventListener('keyup', validatePhone);
document.getElementById('date-of-birth').addEventListener('blur', validateDOB);
document.getElementById('submit').addEventListener('click', () => {
  validateCheckbox();
  validateRadio();
});;
document.getElementById('gender').addEventListener('change', function (e) {
  if (this.value === "") {
    gender.classList.add('is-invalid');
  } else {
    gender.classList.remove('is-invalid');
  }
});

function validateRadio() {
  let v = document.getElementById('error');
  let ans = false;
  if (document.getElementById('buy').checked && document.getElementById('sell').checked) {
    v.textContent = "Select one";
    v.style.color = "red";
  } else if (document.getElementById('buy').checked === false && document.getElementById('sell').checked === false) {
    v.textContent = "Select one";
    v.style.color = "red";
  }

}
function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zip = document.getElementById('zip');
  const re = /^[0-9]{6}$/;

  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}

function validateDOB() {
  const dob = document.getElementById('date-of-birth');
  const dobDate = new Date(dob.value);
  if (dobDate > new Date()) {
    dob.classList.add('is-invalid');
  }
  else {
    dob.classList.remove('is-invalid');
  }
}

function validateCheckbox() {

  var chkd = document.getElementById('checkbox1').checked || document.getElementById('checkbox2').checked || document.getElementById('checkbox3').checked || document.getElementById('checkbox4').checked;
  var formChk = document.getElementById('check');
  if (chkd === false) {
    formChk.textContent = "Atleast one box should be checked!";
    formChk.style.color = "red";
  } else {
    formChk.textContent = "";

  }
}

function validateChoose() {
  const choose = document.getElementById('choose');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}

$('textarea').keyup(function () {

  var characterCount = $(this).val().length,
    current = $('#current'),
    maximum = $('#maximum'),
    theCount = $('#the-count');

  current.text(characterCount);


});