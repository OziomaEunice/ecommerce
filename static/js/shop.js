//define variables
var noti = document.querySelector("h1");
var select = document.querySelector("select");
var button = document.getElementsByTagName("button");

//create a function to enable user add an item to cart
for (buttons of button){
    buttons.addEventListener("click",(e)=>{
        var add = Number(noti.getAttribute("data-count")|| 0);
        noti.setAttribute("data-count", add + 1);
        noti.classList.add("zero");

        //copy & paste element
        var parent = e.target.parentNode;
        var clone = parent.cloneNode(true);
        select.appendChild(clone);
        clone.lastElementChild.innerText = "Buy-now";

        if(clone){
            noti.onclick =()=>{
                select.classList.toggle("display");
            }
        }
    })
}


/*Sub-menu in nav-bar*/
//define the variable
let subMenu = document.getElementById("subMenu");

function openMenu(){
    subMenu.classList.toggle("open-menu")
    //when the profile display is clicked, the menu appears and vice-versa
}