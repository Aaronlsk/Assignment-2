document.addEventListener("DOMContentLoaded", function () {
    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let accountLinkElement = document.getElementById("account-link");

    if (isLoggedIn) {
        accountLinkElement.innerHTML = '<a href="AccountDetails.html">Account</a>';
    }

    let signOutButton = document.querySelector(".acc-buttons button:first-child");

    if (signOutButton) {
        signOutButton.addEventListener("click", function () {

            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("accountHolderName");

            window.location.href = "Account.html";
        });
    }
});