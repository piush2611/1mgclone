let flat = document.getElementById("flat").value;
let land = document.getElementById("land").value;
let pin = document.getElementById("pin").value;
let local = document.getElementById("local").value;
let city= document.getElementById("city").value;
let state = document.getElementById("state").value;
let name1 = document.getElementById("name").value;
let num = document.getElementById("num").value;


// document.getElementById("goTo").addEventListener("click", ()=>{
//     payment();
// })
const payment =()=>{
    if(flat==null || land==null || pin ==null || local==null || city==null || state==null || name1==null || num ==null ){
        alert("All Fields Required")
    }
    else{
        alert("success");
        window.location.href = "payment.html";
    }
}

// const payment=()=>{
//     window.location.href="payment.html";
// }