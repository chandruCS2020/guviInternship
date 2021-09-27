const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const field=document.querySelectorAll(".field");
signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
    loginForm.reset();
    for(let i=0;i<field.length;i++){
        field[i].classList.remove("error");
        field[i].classList.remove("success");
    }
});
loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
    signupForm.reset();
    for(let i=0;i<field.length;i++){
        field[i].classList.remove("error");
        field[i].classList.remove("success");
    }
});
signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
});