
let num = document.getElementById("num").value;
let cvv = document.getElementById("cvv").value;
let expiry = document.getElementById("expiry").value;
let name = document.getElementById("name").value;


const goTo=()=>{
    if(num== null || cvv==null || expiry==null || name==null){
        alert("All Fields are Required");
    }
    else{
        window.location.href = "otp.html";
    }
}