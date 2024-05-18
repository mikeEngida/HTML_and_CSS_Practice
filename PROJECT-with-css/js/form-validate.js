const name = document.getElementById('name')
const age = document.getElementById('age')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cPassword = document.getElementById('confirm-password')
const form = document.getElementById('form')

const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const passError = document.getElementById('passError')
const confPassError = document.getElementById('confPassError')


const validForm = () => {
    if(nameRegex.test(name.value) && emailRegex.test(email.value) && passwordRegex.test(password.value) && cPassword.value !== password.value) {
        return true
    }
    return false
}

// Event listeners

name.onkeyup = () => {
    if(!nameRegex.test(name.value)) {
        nameError.innerText = "Name must only have alphabetic values"
        nameError.classList.add('invalid')
    } else {
        nameError.classList.remove('invalid')
    }
}

email.onkeyup = () => {
    if(!emailRegex.test(email.value)){
        emailError.innerText = "Email must be a proper format"
        emailError.classList.add('invalid')
    } else {
        emailError.classList.remove('invalid')
    }
}
password.onkeyup = () => {
    if(!passwordRegex.test(password.value)){
        if(!/[A-Z]/g.test(password.value)) {
            passError.innerText = "Password must contain at least one capital letter"
        } else if (!/[0-9]/g.test(password.value)){
            passError.innerText = "Password must contain at least one number"
        } else if(password.value.length < 8) {
            passError.innerText = "Password must be at least 8 characters"
        }
        passError.classList.add('invalid')
    } else {
        passError.classList.remove('invalid')
    }
}

cPassword.onkeyup = () => {
    if(cPassword.value !== password.value) {
        confPassError.innerText = "Password must match"
        confPassError.classList.add('invalid')
    } else {
        confPassError.classList.remove('invalid')
    }
}



form.addEventListener("submit", e => {
    if (validForm) {
        alert('Sign up successful')
        return true
    }


    e.preventDefault()
})