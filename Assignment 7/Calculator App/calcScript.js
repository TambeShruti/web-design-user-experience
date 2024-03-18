$(document).ready(() => {
    const showError = (field, message) => {
        $(`#${field}`).css('border-color', 'red');
        $('#calculatorErrorMessages').append(`<p>${message}</p>`);
    };
    const loggedInUserName = sessionStorage.getItem('username');

    // Display the logged-in username if available, otherwise display "Welcome"
    if (loggedInUserName) {
        $('#loggedInUserName').text(`Welcome ${loggedInUserName}!`);
    } else {
        $('#loggedInUserName').text('Welcome!');
    }


    const validateFields = (num1, num2) => {
        let isValid = true;

        // Reset error messages
        $('#calculatorErrorMessages').empty();
        $('#calculatorForm input').css('border-color', '');

        // Validation for Number 1
        const number1 = $('#num1').val();
        if (!number1.trim()) {
            showError('num1', 'Number 1 is required.');
            isValid = false;
        } else if (!$.isNumeric(number1)) {
            showError('num1', 'Number 1 should be a valid number.');
            isValid = false;
        } else if (!isFinite(parseFloat(number1))) {
            showError('num1', 'Number 1 should be a finite value.');
            isValid = false;
        }

        // Validation for Number 2
        const number2 = $('#num2').val();
        if (!number2.trim()) {
            showError('num2', 'Number 2 is required.');
            isValid = false;
        } else if (!$.isNumeric(number2)) {
            showError('num2', 'Number 2 should be a valid number.');
            isValid = false;
        } else if (!isFinite(parseFloat(number2))) {
            showError('num2', 'Number 2 should be a finite value.');
            isValid = false;
        }

        return isValid;
    };

    const performOperation = (num1, num2, operation) => {
        let result;
        switch (operation) {
            case 'add':
                result = parseFloat(num1) + parseFloat(num2);
                break;
            case 'subtract':
                result = parseFloat(num1) - parseFloat(num2);
                break;
            case 'multiply':
                result = parseFloat(num1) * parseFloat(num2);
                break;
            case 'divide':
                if (parseFloat(num2) === 0) {
                    showError('num2', 'Cannot divide by zero.');
                    return;
                }
                result = parseFloat(num1) / parseFloat(num2);
                break;
            default:
                showError('num1', 'Invalid operation.');
                break;
        }
        return result;
    };

    $('.operationButton').on('click', (event) => {
        const num1 = $('#num1').val();
        const num2 = $('#num2').val();
        const operation = $(event.currentTarget).data('operation');

        if (validateFields(num1, num2)) {
            const result = performOperation(num1, num2, operation);
            if (result !== undefined) {
                $('input[name="value"]').val(`${result}`);
            }
        }
    });
});
