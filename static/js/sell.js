/*This is for the first section that will have a typing animation*/
var typed = new Typed(".auto-type", {
    strings: ["Selling", "A Product", "Today&#128513;"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


/*This is for the second section that will have a text moving animation*/
//Define a variable
let spanTexts = document.getElementsByTagName("span");

//whenever the window is reloaded, this function will be executed
window.onload = function(){
    for(spanTexts of spanTexts){
        spanTexts.classList.add("active") //This will call the active class in the css file
    }
}

/*This is for the third section where there will be another text moving animation*/
//create a class for the called out function in its constructor so it can abosorb multiple entries at the same time
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        //if this entry is intersecting add a class to it called "show" else remove the class "show"
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el))//Tell the observer to observe all hidden elements