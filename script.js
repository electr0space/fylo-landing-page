const form = document.querySelector(".signup__form");

const emailValidator = string => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(string);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userInput = document.querySelector(".signup__email").value;
    if (emailValidator(userInput)) {
        document.querySelector(".error-message").style.display = "none";
        const div = document.createElement("div");
        div.textContent = "Thank you! Email has been sent.";
        div.classList.add("sent-message");
        document.querySelector(".signup").append(div);
        return;
    }
    else {
        document.querySelector(".error-message").style.display = "block";
        if(document.querySelector(".sent-message")) {
            document.querySelector(".sent-message").style.display = "none";
        }
    }

    console.log("click");
})

