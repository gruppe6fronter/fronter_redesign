window.addEventListener("load", sidenVises);


function sidenVises(){
    startLogin();
}

function startLogin(){
document.querySelector(".show").addEventListener("click", showPassword);
    document.querySelector(".password").type = 'password';
    document.querySelector(".show").innerHTML = "Show";
}

function showPassword(){
   document.querySelector(".password").type = 'text';
    document.querySelector(".show").removeEventListener("click", showPassword);
    document.querySelector(".show").addEventListener("click", hidePassword);
     document.querySelector(".show").innerHTML = "Hide";
}

function hidePassword(){
      document.querySelector(".password").type = 'password';
    document.querySelector(".show").removeEventListener("click", hidePassword);
    document.querySelector(".show").addEventListener("click", showPassword);
     document.querySelector(".show").innerHTML = "Show";
}
