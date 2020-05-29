"use strict";
import users from "./users.json";

console.log(users);

const login = document.querySelector("input[data-onclick='8']");
const submit = document.querySelector('input[data-onclick="9"]');

function onClick(event){
    event.preventDefault();
    for (let user of users) {
        if(login.value == user.pass){ 
            window.location.href = 'page2.html'; // next page
            
        }
        else {
            window.location.href = 'page3.html'; // registration page
            
        }
    } 
}
submit.addEventListener('click', onClick);
