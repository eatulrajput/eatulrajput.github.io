function checkPassword() {
    const correctPassword = "ChandanKumarJha@2022"; // Change this to your desired password
    const enteredPassword = document.getElementById("password").value;
    
    if (enteredPassword === correctPassword) {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
}