
let btnSubmit, firstName, lastName, email, Password, checkEvery;

firstName = document.forms['form-register']['firstname'];
lastName = document.forms['form-register']['lastname'];
email = document.forms['form-register']['email'];
passWord = document.forms['form-register']['password'];

document.forms['form-register'].onsubmit =  ()=>{
    checkEvery = 0;
    // First Name
    if(firstName.value.trim() === '') {
        firstName.style.border = '2px solid var(--red)';
        document.querySelector('#firstname + label').style.display = 'block';
        document.querySelector('#firstname ~ .error-icon').style.display = 'block';
        checkEvery = 1;
    }
    else {
        firstName.style.border = '1px solid rgb(214, 214, 214)';
        document.querySelector('#firstname + label').style.display = 'none';
        document.querySelector('#firstname ~ .error-icon').style.display = 'none';
    }

    // Last Name
    if(lastName.value.trim() === '') {
        lastName.style.border = '2px solid var(--red)';
        document.querySelector('#lastname + label').style.display = 'block';
        document.querySelector('#lastname ~ .error-icon').style.display = 'block';
        checkEvery = 1;
    }
    else {
        lastName.style.border = '1px solid rgb(214, 214, 214)';
        document.querySelector('#lastname + label').style.display = 'none';
        document.querySelector('#lastname ~ .error-icon').style.display = 'none';
    }

    // Email
    if(email.value.trim() !== '' && isEmail(email.value) === true ) {
        email.style.border = '1px solid rgb(214, 214, 214)';
        email.style.color = '#000';
        document.querySelector('#email + label').style.display = 'none';
        document.querySelector('#email ~ .error-icon').style.display = 'none';
    }
    else {
        email.style.border = '2px solid var(--red)';
        email.style.color = 'var(--red)';
        document.querySelector('#email + label').style.display = 'block';
        document.querySelector('#email ~ .error-icon').style.display = 'block';
        checkEvery = 1;
    }
    // Password
    if(password.value.trim() === '') {
        password.style.border = '2px solid var(--red)';
        document.querySelector('#password + label').style.display = 'block';
        document.querySelector('#password ~ .error-icon').style.display = 'block';
        checkEvery = 1;
    }
    else {
        passWord.style.border = '1px solid rgb(214, 214, 214)';
        document.querySelector('#password + label').style.display = 'none';
        document.querySelector('#password ~ .error-icon').style.display = 'none';
    }

    if(checkEvery === 1) {
        return false
    }
    else {
        return true
    }
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    // receive variable and compare with synbol email by .test methods it will return true / fales.
}
