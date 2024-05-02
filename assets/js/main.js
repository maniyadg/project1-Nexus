/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', () => {
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})


function validateForm() {
    console.log("working")
    const name = document.getElementById("name").value;

    const password = document.getElementById("password").value;

    const nameError = document.getElementById("name-error");

    const passwordError = document.getElementById(
        "password-error"
    );

    nameError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    // login api
    const data = async () => {
        const response = await fetch('http://localhost:3003/user/login', {
            method: 'POST',
            body: { name, password },
        });

        if (response) {
            alert('login Succesfully')
        } else {
            alert('something went wrong')
        }
    }


    if (isValid) {
        data()
    }



    return isValid;
}

// Register Form Validation
function validateRegForm() {
    console.log('working')

    const name = document.getElementById("name1").value;
    const email = document.getElementById('email1').value
    const password = document.getElementById("password1").value;

    const nameError = document.getElementById(
        "name-error1"
    );
    const emailError = document.getElementById(
        "email-error1"
    );
    const passwordError = document.getElementById(
        "password-error1"
    );


    emailError.textContent = "";
    passwordError.textContent = "";
    nameError.textContent = "";


    let isValid = true;

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (name === "" || name.length < 6) {
        nameError.textContent =
            "Please enter a valid Name";
        isValid = false;
    }


   // login api
   const data = async () => {
    const response = await fetch('http://localhost:3003/user/register', {
        method: 'POST',
        body: { name, password },
    });

    if (response) {
        alert('register Succesfully')
    } else {
        alert('something went wrong')
    }
}


if (isValid) {
    data()
}


    return isValid;
}
