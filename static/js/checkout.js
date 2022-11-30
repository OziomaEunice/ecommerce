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


/*This is for the checkout*/
'use strict';

//all initial elements
const payAmountBtn = document.querySelector("#payAmount");
const decrementBtn = document.querySelectorAll("#decrement");
const quantityElem = document.querySelectorAll("#quantity");
const incrementBtn = document.querySelectorAll("#increment");
const priceElem = document.querySelectorAll("#price");
const subtotalElem = document.querySelector("#subtotal");
const taxElem = document.querySelector("#tax");
const totalElem = document.querySelector("#total");

//use for loop event on multiple increment & decrement buttons
for (let i = 0; i < incrementBtn.length; i++) {
    incrementBtn[i].addEventListener("click", function(){

        //collect the value based of quantity textContent,
        //based on clicked increment button sibling.
        let increment = Number(this.previousElementSibling.textContent);

        //plus increment variable value by 1
        increment++;

        //show the increment variable value on quantity element
        //based on clicked increment button sibling
        this.previousElementSibling.textContent = increment;

        totalCalc();
    });


    decrementBtn[i].addEventListener("click", function(){

        //collect the value based of quantity textContent,
        //based on clicked decrement button sibling.
        let decrement = Number(this.nextElementSibling.textContent);

        //minus decrement variable value by 1
        decrement <= 1 ? 1 : decrement--;

        //show the decrement variable value on quantity element
        //based on clicked decrement button sibling
        this.nextElementSibling.textContent = decrement;

        totalCalc();
    });   
}


// create a function for calculating total amount of product price
const totalCalc = function(){

    //declare all initial variables
    const tax = 0.05;
    let subtotal = 0;
    let totalTax = 0;
    let total = 0;

    //create a loop for calculating the subtotal value from every single product
    for (let i = 0; i < quantityElem.length; i++) {
        subtotal += Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);    
    }

    //show the subtotal variable value on subtotalElem element
    subtotalElem.textContent = subtotal.toFixed(2);

    //calculating the totalTax
    totalTax = subtotal * tax;

    //show the totalTax on taxElem element
    taxElem.textContent = totalTax.toFixed(2);

    //calculating the total
    total = subtotal + totalTax;

    //show the total variable value on totalElem & payAmountBtn element
    totalElem.textContent = total.toFixed(2);
    payAmountBtn.textContent = total.toFixed(2);
}