const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirmPassword").value;
    if (password != confirmPassword) {
        e.preventDefault();
        alert("Passwords do not match !")
    }
});