const formBtn = document.getElementById('form-submit')

function validEmail(email) {
    if(email.validity.typeMismatch) {
        email.setCustomValidity('You must type a valid email adress.')
    } else {
        email.setCustomValidity('')
    }
}

function validCountry(country) {
    const countryRegEx = /[^a-zA-Z]+/
    if(countryRegEx.test(country.value)) {
        country.setCustomValidity('Please enter a valid country name which does not include symbols.')
    } else {
        country.setCustomValidity('')
    }
}

function validPwd(password) {
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
}

function passwordConsistency(password, confirmPwd) {
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

formBtn.addEventListener('click', (e) => {
    // e.preventDefault()
    const inputs = document.querySelectorAll('input')
    const email = document.getElementById('email')
    const country = document.getElementById('country')
    const password = document.getElementById('pwd')
    const confirmPwd = document.getElementById('confirm-pwd')

    validEmail(email)
    validCountry(country)
    validPwd(password)
    passwordConsistency(password, confirmPwd)
    inputs.forEach(input => {
        valueMiss(input)})
})