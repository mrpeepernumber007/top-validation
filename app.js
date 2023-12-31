const formBtn = document.getElementById('form-submit')
const inputs = document.querySelectorAll('input')

const email = document.getElementById('email')
email.addEventListener('focusout', () => {
    if(email.validity.typeMismatch) {
        email.setCustomValidity('You must type a valid email adress.')
    } else {
        email.setCustomValidity('')
    }
})


const country = document.getElementById('country')
country.addEventListener('input', validCountry)
function validCountry() {
    const countryRegEx = /[^a-zA-Z]+/
    if(countryRegEx.test(country.value)) {
        country.setCustomValidity('Please enter a valid country name which does not include symbols.')
    } else {
        country.setCustomValidity('')
    }
}

const password = document.getElementById('pwd')
password.addEventListener('input', validPwd)


function validPwd() {
    const passRegEx = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/
    if (!(passRegEx.test(password.value))) {
        password.setCustomValidity('The password must containt at least one symbol')
    } else {
        password.setCustomValidity('')
    }

    if(password.value.length < 8) {
        password.setCustomValidity('Password must be at least 8 characters long.')
    } else if (password.value.length > 16) {
        password.setCustomValidity('Password must be at most 16 characters long.')
    }
    checkPwdConsistency()
}

const confirmPwd = document.getElementById('confirm-pwd')
confirmPwd.addEventListener('input', checkPwdConsistency)


function checkPwdConsistency() {
    if(password.value !== confirmPwd.value) {
        confirmPwd.setCustomValidity('Passwords must match!')
    } else {
        confirmPwd.setCustomValidity('')
    }
}

function valueMiss(inputEl) {
    if (inputEl.validity.valueMissing) {
        inputEl.setCustomValidity('Please enter a value.')
    }
}

formBtn.addEventListener('click', () => {
    inputs.forEach(input => {
        valueMiss(input)})
})