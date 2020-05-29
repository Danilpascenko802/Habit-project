"use strict";
// Дима Олейник

const tpToLogin = document.querySelector('button[data-onclick="6"]');
const tpToRegister = document.querySelector('button[data-onclick="7"]');

function TeleportLogin(){
    window.location.href = 'index.html'
}
tpToLogin.addEventListener("click", TeleportLogin);

function TeleportRegister(){
    window.location.href = 'page3.html' 
}
tpToRegister.addEventListener("click", TeleportRegister);