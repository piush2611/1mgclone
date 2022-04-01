let regUser = JSON.parse(localStorage.getItem("userData"));



const signin=()=>{

 let email=document.getElementById("email").value;
let  password=document.getElementById("pass").value;

 for(var i=0;i<regUser.length;i++){
     let loginUser=[];
     if(regUser[i].email===email && regUser[i].password==password){
         alert("Login Sucessful")
         loginUser.push(regUser[i]);
         console.log(loginUser)
         localStorage.setItem("logInUser", JSON.stringify(loginUser));
         window.location.href="/index.html"
         break;
     }
     else{
         alert("Check Login Details....Login Failed");
      
     }
 }
}