/*
    var num = document.getElementById("number");
    function sclick(){
        document.getElementById("res").innerHTML = "SINGLE CLICK"
    }
    num.addEventListener('mousemove',sclick)
*/

angular.module('validationApp', [])
    .controller('validationController', function ($scope) {
        let count = 0;
        $scope.user = {};
        $scope.nameError = '';
        $scope.contactError = '';
        $scope.emailError = '';
        $scope.ageError = '';
        $scope.usernameError = '';
        $scope.passwordError = '';
        $scope.isNameFocused = false;
        $scope.isContactFocused = false;
        $scope.isEmailFocused = false;
        $scope.isAgeFocused = false;
        $scope.isUsernameFocused = false;
        $scope.isPasswordFocused = false;

        $scope.onNameFocus = function () {
            $scope.isNameFocused = true;
        };
        $scope.onNameBlur = function () {
            $scope.isNameFocused = false;
        };

        $scope.onContactFocus = function () {
            $scope.isContactFocused = true;
        };
        $scope.onContactBlur = function () {
            $scope.isContactFocused = false;
        };

        $scope.onEmailFocus = function () {
            $scope.isEmailFocused = true;
        };
        $scope.onEmailBlur = function () {
            $scope.isEmailFocused = false;
        };

        $scope.onAgeFocus = function () {
            $scope.isAgeFocused = true;
        };
        $scope.onAgeBlur = function () {
            $scope.isAgeFocused = false;
        };

        $scope.onUsernameFocus = function () {
            $scope.isUsernameFocused = true;
        };
        $scope.onUsernameBlur = function () {
            $scope.isUsernameFocused = false;
        };

        $scope.onPasswordFocus = function () {
            $scope.isPasswordFocused = true;
        };
        $scope.onPasswordBlur = function () {
            $scope.isPasswordFocused = false;
        };


        $scope.validateName = function () {
            var nameInput = $scope.user.name;
            if (!nameInput.trim()) {
                $scope.nameError = 'Name cannot be empty.';
            } else if (/[\d~`!@#$%^&*()_+={}\[\]:;<>,.?\\/"';|]/.test(nameInput)) {
                $scope.nameError = 'Name cannot contain digits or special characters.';
            } else {
                count++;
                $scope.nameError = '';
            }
        };

        // Function to validate the Contact field
        $scope.validateContact = function () {
            var contactInput = $scope.user.contact;

            if (!contactInput) {
                $scope.contactError = 'Contact number is required.';
            } else if (!/^\d{10}$/.test(contactInput)) {
                $scope.contactError = 'Invalid phone number.';
            } else {
                count++;
                $scope.contactError = '';
            }
        };

        // Function to validate the Email field
        $scope.validateEmail = function () {
            var emailInput = $scope.user.email;

            if (!emailInput) {
                $scope.emailError = 'Email address is required.';
            } else if (!/^\S+@\S+\.\S+$/.test(emailInput)) {
                $scope.emailError = 'Invalid email address.';
            } else {
                count++;
                $scope.emailError = '';
            }
        };

        // Function to validate the Age field
        $scope.validateAge = function () {
            var ageInput = $scope.user.age;

            if (!ageInput) {
                $scope.ageError = 'Age is required.';
            } else if (!/^\d{1,2}$/.test(ageInput) || ageInput <= 0) {
                $scope.ageError = 'Invalid age.';
            } else {
                count++;
                $scope.ageError = '';
            }
        };


        // Function to validate the Username field
        $scope.validateUsername = function () {
            var usernameInput = $scope.user.username;
            if (!usernameInput) {
                $scope.usernameError = 'Username is required.';
            } else if (!/^[a-zA-Z0-9@$]+$/.test(usernameInput)) {
                $scope.usernameError = 'Invalid Username!';
            } else {
                count++;
                $scope.usernameError = '';
            }
        };


        // Function to validate the Password field
        $scope.validatePassword = function () {
            var passwordInput = $scope.user.password;


            if (!passwordInput) {
                $scope.passwordError = 'Password is required!';
            }

            else if (passwordInput.length < 8) {
                $scope.passwordError = 'Password must be at least 8 characters long.';
            }

            else if (!/[A-Z]/.test(passwordInput)) {
                $scope.passwordError = 'Password must contain at least one uppercase letter.';
            }

            else if (!/[a-z]/.test(passwordInput)) {
                $scope.passwordError = 'Password must contain at least one lowercase letter.';
            }

            else if (!/\d/.test(passwordInput)) {
                $scope.passwordError = 'Password must contain at least one number.';
            }

            else if (!/[!@#$%^&*()_+={}\[\]:;<>,.?\\/"';|]/.test(passwordInput)) {
                $scope.passwordError = 'Password must contain at least one special character.';
            }

            else {
                count++;
                $scope.passwordError = '';
            }
        };


        $scope.submitForm = function (event) {
            // Check if there are no errors in any input field
            if (count >= 6 && !$scope.nameError && !$scope.contactError && !$scope.emailError && !$scope.ageError && !$scope.usernameError && !$scope.passwordError) {
                // No errors, proceed with form submission
                console.log('Form submitted:', $scope.user);
                document.getElementById('id01').style.display = 'block';
                popUpCaptcha();
                event.preventDefault();
            } else {
                // There are errors, prevent form submission
                alert("FORM NOT SUBMITTED!");
                event.preventDefault();
            }
        };

    });

    

function popUpCaptcha() {
    // Clear old input
    document.getElementById("c-input").value = "";

    // Access the element to store the generated captcha
    captcha = document.getElementById("captcha");

    let uniquechar = "";
    const randomchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let hasCapital = false;
    let hasSmall = false;
    let hasNumber = false;
    
    while (!(hasCapital && hasSmall && hasNumber)) {
        // Reset the string for each attempt
        uniquechar = "";
    
        for (let i = 0; i < 5; i++) {
            const char = randomchar.charAt(Math.floor(Math.random() * randomchar.length));
            uniquechar += char;
    
            if (!hasCapital && /[A-Z]/.test(char)) {
                hasCapital = true;
            }
            if (!hasSmall && /[a-z]/.test(char)) {
                hasSmall = true;
            }
            if (!hasNumber && /[0-9]/.test(char)) {
                hasNumber = true;
            }
        }
    }

    // Store generated input
    captcha.innerHTML = uniquechar;
}

document.getElementById("c-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    captcha = document.getElementById("captcha").innerHTML;
    const userInput = document.getElementById("c-input").value;
    if(userInput === captcha){
        alert("SUCCESSFUL");
        direct();
    }
    else{
        alert("Captcha doesn't match");
        document.getElementById('id01').style.display = 'none';
        popUpCaptcha();
    }
});

function direct(){
    window.location.href="HOME.html";
//    window.location.href="https://www.jehangirhospital.com/";
}