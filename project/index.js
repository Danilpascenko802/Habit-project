"use strict";
let user = new Object();
let user = {
    sizes: {
        height: 170,
        weight: 50
    }
};
alert( user.sizes.height ); // 170 

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes );
user.sizes.weight++;       
alert(clone.sizes.weight); //50

for (let size in sizes) {
    alert(  +size ); // 170, 50

const birth = new Date(year,month,day);
year=1986;
month=9;
day=25;
