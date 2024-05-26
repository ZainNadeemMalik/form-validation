const form = document.querySelector('.form')

const email = document.querySelector('#mail')
const emailError = document.querySelector('.error-mail')

const selectCountry = document.querySelector('#select-country')
const selectedCountry = selectCountry.value
const countryError = document.querySelector('.error-country')

const zipCode = document.querySelector('#zipcode')
const zipCodeError = document.querySelector('.error-zipcode')

const password = document.querySelector('#password')
const passwordError = document.querySelector('.error-password')

const confirmPassword = document.querySelector('#confirm-password')
const confirmPasswordError = document.querySelector('.error-confirm-password')

email.addEventListener("input", e => {
  if(email.validity.valid) {
    emailError.textContent = ''
    emailError.className = 'error'
  } else {
    showEmailError()
  }
})

selectCountry.addEventListener("change", e => {
  if (selectCountry.validity.valid) {
    countryError.textContent = ''
    countryError.className = 'error'
  } else {
    showCountryError()
  }
})

zipCode.addEventListener("input", () => {
  if (zipCode.validity.valid) {
    zipCodeError.textContent = ''
    zipCodeError.className = 'error'
  } else {
    showZipcodeError()
  }
})

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passwordError.textContent = ''
    passwordError.className = 'error'
  } else {
    showPasswordError()
  }
})

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.validity.valid && confirmPassword.value === password.value) {
    confirmPasswordError.textContent = ''
    confirmPasswordError.className = 'error'
  } else {
    showConfirmPasswordError()
  }
})


form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showEmailError();
    event.preventDefault();
  }

  if (!selectCountry.validity.valid) {
    showCountryError()
    event.preventDefault()
  }

  if (!zipCode.validity.valid) {
    showZipcodeError()
    event.preventDefault()
  }

  if (!password.validity.valid) {
    showPasswordError()
    event.preventDefault()
  }

  if (!confirmPassword.validity.valid && confirmPassword.value !== password.value) {
    showConfirmPasswordError()
    event.preventDefault()
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Enter valid email"
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value is not an email"
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}`
  }
  emailError.className = "error active"
}

function showCountryError() {
  if (selectCountry.validity.valueMissing) {
    countryError.textContent = "Please select a country"
  }
  countryError.className = "error active"
}

function showZipcodeError() {
  if (!zipCode.validity.valid) {
    zipCodeError.textContent = "Zip code is not valid"
  }
  zipCodeError.className = "error active"
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "Please enter a password"
  } else if (password.validity.tooShort) {
    passwordError.textContent = "At least 8 characters are required"
  } else if (password.validity.tooLong) {
    passwordError.textContent = "Password cannot be longer then 32 characters"
  }
  passwordError.className = "error active"
}

function showConfirmPasswordError() {
  if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "Please re-enter the password"
  } else if (confirmPassword.value !== password.value && confirmPassword.value !== '') {
    confirmPasswordError.textContent = "Passwords do not match"
  }
  confirmPasswordError.className = "error active"
}