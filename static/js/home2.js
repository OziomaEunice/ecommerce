/*This is for the preloader*/
//define the loader variable
var loader = document.getElementById("preloader");

//create an event function
window.addEventListener("load", function(){
    //hide the loader
    loader.style.display = "none";

    /**The loader works, however, it disappears very quickly
     * when refreshing it, so what can be done is to have 
     * a video link (see profile.html for tag iframe) and
     * paste it multiple times
     */
})


/*Sub-menu in nav-bar*/
//define the variable
let subMenu = document.getElementById("subMenu");

function openMenu(){
    subMenu.classList.toggle("open-menu")
    //when the profile display is clicked, the menu appears and vice-versa
}