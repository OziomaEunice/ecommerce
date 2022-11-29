/*This is for the first section that will have a typing animation*/
var typed = new Typed(".auto-type", {
    strings: ["Look out for new items", "Mark items with a &#11088;", "Find out more."],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

/*This is for the second section that will have a button with some animation*/
let btn = document.getElementById("btn");
let spans = document.getElementsByTagName("span");

//add a click function to the button
btn.onclick = function(){
    //use a for loop to apply the css for each span.
    //spans is an array
    for(span of spans){
        span.classList.add("anim"); //this will add the 'anim' class to all the individual spans
    }
    
    //remove the class name after 5 seconds
    setTimeout(function(){
        for(span of spans){
            span.classList.remove("anim"); //this will remove the 'anim' class to all the individual spans
        }
    },500)
}