document.getElementById('login-button').addEventListener('click', function () {
    // user email section
    const userEmailField = document.getElementById('user-email');
    const userEmailvalue = userEmailField.value;

    // user password section
    const userPasswordField = document.getElementById('user-password');
    const userPasswordValue = userPasswordField.value;

    if (userEmailvalue == 'rashed@gmail.com' && userPasswordValue == 123456) {
        window.location.href = 'https://mr-code999.github.io/BB/';

    }
    else {
        alert('email & password dose not match');
    }
})