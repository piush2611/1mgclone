let dataArr = JSON.parse(localStorage.getItem("userData")) ||  [];

const storeData=()=>{
  
  let userData={};

 function user(name, email, number, pass){
   userData.name = name;
   userData.number = number;
   userData.email = email;
   userData.password= pass;
    return userData;

}

let userName= document.getElementById("name").value;
let userEmail= document.getElementById("email").value;
let userNum= document.getElementById("num").value;
let userPass= document.getElementById("pass").value;

let user1 = new user(userName,userEmail, userNum, userPass);

dataArr.push(userData);
console.log(dataArr);
localStorage.setItem("userData", JSON.stringify(dataArr));
window.location.href="login.html"
}