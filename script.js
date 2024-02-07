document.addEventListener("DOMContentLoaded", function () {
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
        document.getElementById("account-link").innerHTML = '<a href="AccountDetails.html">Account</a>';
    }
});