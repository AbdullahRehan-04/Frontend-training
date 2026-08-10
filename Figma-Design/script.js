document.getElementById("Login-Form").addEventListener("submit", function(e) {
    e.preventDefault();

    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;

    if (username == "" || password == "") {
        alert("Please fill in both fields");
        return;
    }

    alert("Logged in as " + username);
});

document.getElementById("forgotLink").addEventListener("click", function(e) {
    e.preventDefault();
    alert("Redirect to forgot password page");
});