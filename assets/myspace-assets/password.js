function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePasswordIcon");
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.src = "/assets/images/v_off.svg"; // Change to hide icon
        toggleIcon.alt = "Hide Password";
    } else {
        passwordField.type = "password";
        toggleIcon.src = "/assets/images/v_on.svg"; // Change to show icon
        toggleIcon.alt = "Show Password";
    }
}

function checkPassword() {
    const correctPassword = "Captain America"; // Change this to your desired password
    const enteredPassword = document.getElementById("password").value;
    
    if (enteredPassword === correctPassword) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
}