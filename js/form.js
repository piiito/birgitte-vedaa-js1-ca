
const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

function validateForm(event){
    event.preventDefault();

    if(validateLength(fullName.value, 0)){
        fullNameError.style.display = "none";
    }
    else{
        fullNameError.style.display = "block";
    }

    if(emailValidation(email.value)){
        emailError.style.display = "none";
    }
    else{
        emailError.style.display = "block";
    }

    if(validateLength(address.value, 24)){
        addressError.style.display = "none";
    }
    else{
        addressError.style.display = "block";
    }

    if(validateLength(subject.value,  9)){
        subjectError.style.display = "none";
    }
    else{
        subjectError.style.display = "block";
    }
    console.log("it works");
}

form.addEventListener("submit", validateForm);

function validateLength(value, len){
    if(value.trim().length > len){
        return true;
    }
    else{
        return false;
    }
};

function emailValidation(email){
    const emailTest = /\S+@\S+\.\S+/;
    const emailMatch = emailTest.test(email);
    return emailMatch;
}
