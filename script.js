var width = screen.width;
var height = screen.height;


window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises" + width);
    if(width > 425) {
        alertPhone();
 }
    chat();
}


function chat() {
    console.log("Chat");
 document.querySelector("#message").addEventListener("click", aabenChat);
     document.querySelector(".left-arrow").addEventListener("click", LukChat); 
     document.querySelector(".groups").addEventListener("click", groups); 
     document.querySelector(".messages").addEventListener("click", messages); 
     document.querySelector(".new_icon").addEventListener("click", nyChat); 
     document.querySelector(".plus").addEventListener("click", contacts); 
}

function alertPhone() {
    console.log("Dette site er kun beregnet til mobile enheder");
    alert("Dette site er kun beregnet til mobile enheder");
}


function aabenChat(){
    console.log("åben chat");
    window.location.replace("chat_studerende.html");
    document.querySelector("#message").removeEventListener("click", aabenChat);
        
   
}

function LukChat() {
    console.log("Luk chat");
    window.history.go();
}

function groups() {
    console.log("groups");
    window.location.replace("chat_groups.html");

}


function messages() {
    window.location.replace("chat.html");
}
    
function nyChat(){
    window.location.replace("new_chat.html");
    
}

function contacts() {
    window.location.replace("contacts.html");
}

