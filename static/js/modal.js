//Define the variables
let signupBtn = document.getElementById("signupBtn")
let loginBtn = document.getElementById("loginBtn")
let nameField = document.getElementById("nameField")
let title = document.getElementById("title")


//Create a function that will allow the user to
//click on the sign in or sign up button
//and whichever button is clicked, it will show
//the title as "Sign Up" or "Sign In"
loginBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Login"; //When the signin button is clicked, the title will change to "Sign In"
    signupBtn.classList.add("disable") //Sign Up button will change color to grey
    loginBtn.classList.remove("disable") //Sign In button will change color to blue
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up"; //When the signup button is clicked, the title will change to "Sign Up"
    signupBtn.classList.remove("disable") //Sign Up button will change color to blue
    loginBtn.classList.add("disable") //Sign In button will change color to grey
}