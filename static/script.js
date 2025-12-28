const email = document.getElementById("email");
const password = document.getElementById("password");
const hands = document.getElementById("hands");
const showPass = document.getElementById("showPass");

// তাকানো
email.addEventListener("input", () => {
    hands.style.transform = "translateY(0)";
});

// চোখ ঢাকা
password.addEventListener("focus", () => {
    hands.style.transform = "translateY(-45px)";
});

// উঁকি
showPass.addEventListener("change", () => {
    if (showPass.checked) {
        password.type = "text";
        hands.style.transform = "translateY(-25px)";
    } else {
        password.type = "password";
        hands.style.transform = "translateY(-45px)";
    }
});
