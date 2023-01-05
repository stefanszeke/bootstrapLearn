const form = document.querySelector("form");
const pass = document.querySelector("#passwordInput");
const confirmPass = document.querySelector("#password-confirm");

form.addEventListener('submit', e=> {
    if(!form.checkValidity()) {
        e.preventDefault();
    }

    form.classList.add('was-validated');
});

pass.addEventListener('input', e=> {

    // bootstrap min length validation:
    const minLength = 8;
    if(pass.value.length < minLength) {
        pass.setCustomValidity(`Password must be at least ${minLength} characters`);
    } else {
        pass.setCustomValidity('');
    }


    // password match validation:
    if(pass.value !== confirmPass.value) {
        confirmPass.setCustomValidity('Passwords do not match');
    } else {
        confirmPass.setCustomValidity('');
    }

});

confirmPass.addEventListener('input', e=> {
    if(pass.value !== confirmPass.value) {
        confirmPass.setCustomValidity('Passwords do not match');
    } else {
        confirmPass.setCustomValidity('');
    }
});





