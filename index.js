const form = document.getElementById('form');
const uername = document.getElementById('username');
const number = document.getElementById('number');
const email = document.getElementById('email');
const subject = document.getElementById('subject');

form.addEventListener( 'submit', e =>{
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
  const usernameValue = username.value.trim();
  const numberValue = number.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();

  if(usernameValue === '') {
    setError(username, 'Username is required');
} else {
    setSuccess(username);
}

if(numberValue === '') {
  setError(number, 'mobile number is required');
} else {
  setSuccess(number);
}

if(emailValue === '') {
    setError(email, 'Email is required');
} else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
} else {
    setSuccess(email);
}

if(subjectValue === '') {
  setError(subject, 'subject is required');
} else {
  setSuccess(subject);
}
};


