//TOGGLE CHATBOT
const chatbotToggle = document.getElementsByClassName("chatbot-message-wrapper")

function toggleONOFF () {
    //if the toggle is not showing the chatbox then 
    //display it, else not.
    if (chatbotToggle[0].style.display == "none")
        chatbotToggle[0].style.display = "block"
    else
        chatbotToggle[0].style.display = "none"
}