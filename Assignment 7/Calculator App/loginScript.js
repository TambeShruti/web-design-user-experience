$(document).ready(() => {
    const showError = (field, message) => {
        $(`#${field}`).css('border-color', 'red');
        $('#errorMessages').append(`<p>${message}</p>`);
    };

    const validateFields = () => {
        const email = $('#email').val();
        const userName = $('#username').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();

        // Reset error messages
        $('#errorMessages').empty();
        $('#loginForm input').css('border-color', '');

        let isValid = true;

        // Validation for Email
        if (!email.trim()) {
            showError('email', 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Please enter a valid email address.');
            isValid = false;
        }

        // Validation for User Name
        if (!userName.trim()) {
            showError('username', 'User Name is required.');
            isValid = false;
        } else if (!/^[a-zA-Z0-9]+$/.test(userName)) {
            showError('username', 'User Name should only contain alphanumeric characters.');
            isValid = false;
        }

        // Validation for Password
        if (!password.trim()) {
            showError('password', 'Password is required.');
            isValid = false;
        } else if (password.length < 6) {
            showError('password', 'Password should be at least 6 characters long.');
            isValid = false;
        }

        // Validation for Confirm Password
        if (!confirmPassword.trim()) {
            showError('confirmPassword', 'Confirm Password is required.');
            isValid = false;
        } else if (confirmPassword !== password) {
            showError('confirmPassword', 'Passwords do not match.');
            isValid = false;
        }

        return isValid;
    };

    const isValidEmail = (email) => {
        // Email validation with the requirement of having '@' and '.edu' at the end
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    $('#loginForm input').on('input', () => {
        $('#errorMessages').empty();
        $('#loginForm input').css('border-color', '');

        if (validateFields()) {
            $('.Loginbtn').prop('disabled', false);
        } else {
            $('.Loginbtn').prop('disabled', true);
        }
    });

        // Attach click event handler to login button
    $('.Loginbtn').on('click', (event) => {
        event.preventDefault(); // Prevent default form submission behavior
            
        if (validateFields()) {
            const userEmail = $('#email').val();
            const userName = $('#username').val(); // Get the username
            if (isValidEmail(userEmail)) {
                // Store logged-in state and username in sessionStorage
                sessionStorage.setItem('loggedIn', true);
                sessionStorage.setItem('username', userName); // Store the username
                console.log('Validation passed. Redirecting to calc.html...'); // Debugging statement
                // Redirect to the calculator page
                window.location.href = 'calc.html';
            } else {
                showError('email', 'Invalid email format');
            }
        }
    });
});
