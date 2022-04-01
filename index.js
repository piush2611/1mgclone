//  ----------------------import header and footer-----------------
 
 let head= document.getElementById("header");
  import {navbar, footer} from "./Components/navbar.js"
  head.innerHTML=navbar();

  let foot = document.getElementById("footer");
  foot.innerHTML=footer();

  let timerID="";

  let productArr = JSON.parse(localStorage.getItem("product"));

  //  ----------------------import header and footer end-----------------
  

// -------------------image slider-------------------------------

   let imageData = [
    "https://onemg.gumlet.io/image/upload/w_1013,h_250,,a_ignore,q_auto,f_auto/v1648746238/itzxf7ahkklltu0gp9ef.png",
    "https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Landing-Pages-2021/best-seller-packages/dweb.png",
    "https://onemg.gumlet.io/image/upload/w_1013,h_250,,a_ignore,q_auto,f_auto/v1648746306/pyb1upvhuccvzum3ke87.png",
    "https://onemg.gumlet.io/image/upload/w_1013,h_250,,a_ignore,q_auto,f_auto/v1641283756/kcdcsb5yrkpxok5bpm8y.png",
    "https://onemg.gumlet.io/image/upload/w_1013,h_250,,a_ignore,q_auto,f_auto/v1648746273/czpazwraxkqt6eo5bjpa.png",
    "https://onemg.gumlet.io/image/upload/w_1013,h_250,,a_ignore,q_auto,f_auto/v1648746306/pyb1upvhuccvzum3ke87.png",
  
]
localStorage.setItem("Image", JSON.stringify(imageData));


let image1Data = JSON.parse(localStorage.getItem("Image"));

    let i = 1;
    let image1 = image1Data[0];
    document.getElementById("slideshow");

     let img1 = document.createElement("img");
    
     img1.src = image1;
     document.getElementById("slideshow").append(img1);

   setInterval(function(){
     if(i ===image1Data.length){
       i=0;
     }
     let image1 = image1Data[i];
     document.getElementById("slideshow").innerHTML="";

     let img1 = document.createElement("img");
     img1.setAttribute("class", "mainImage")
     img1.src = image1;

     document.getElementById("slideshow").append(img1);
     i++;
   },2000);
 




//   ---------------------------Login-----------------------------------
let logInUser = JSON.parse(localStorage.getItem("logInUser"))||[];
// console.log(logInUser.name)
let name = logInUser[0].name;
 let userName=document.getElementById("login")
// console.log(logInUser);

if(logInUser===null){
    userName.textContent=LOGIN | SIGNUP

}
else{
    userName.textContent=`Hello! ${name}`
}
//   ---------------------------Login end-----------------------------------


// -------------------links------------------------------------

 document.getElementById("select").addEventListener("click", ()=>{
     gotoProduct()

   
 })
 const gotoProduct=()=>{
     window.location.href="Pages/multivitamin.html"
 }



// -------------------links Ends------------------------------------


// ---------------------------------------------cart length----------------------------------
let cartArr = JSON.parse(localStorage.getItem("cartItem"));
// console.log(cartArr);
let cartLength = document.getElementById("length");
cartLength.textContent= cartArr.length;

// ---------------------------------------------cart length End----------------------------------

// -------------------------------Debouncing strat-----------------------------------------



document.getElementById("searchItem").addEventListener("input", ()=>{
    debounce(main, 1000);
})

const getData=async()=>{
    try {
        let medicine = await fetch(`http://localhost:3000/multiVitamins`);
        let data = await medicine.json();
        return data;
        
    } catch (error) {
        console.log(error);
        
    }

}

const appendData=(data)=>{
    let div = document.createElement("div");
    div.setAttribute("class", "showBox");
    div.innerHTML=""

 data.map((elem)=>{

    let div2 = document.createElement("div");
    div2.setAttribute("class", "boxBox");
    div2.addEventListener("click", ()=>{
        gotoProductPage(elem);
    })

     let name = document.createElement("p");
     name.textContent=elem.Title;
     name.setAttribute("class", "boxName")
     div2.append(name);
     div.append(div2);
 })
     
  

   
    document.getElementById("header").append(div);




}

 const main =async ()=>{
    try {
        let data = await getData();
    
        if(data === undefined){
            return false;
        }
        appendData(data);
        
    } catch (error) {
        console.log(error);
        
    }
    }
    
    const debounce=(func, delay)=>{
      if(timerID){
          clearTimeout(timerID);
      }
    
      timerID=setTimeout(function(){
          func();
      }, delay);
    
    }
    


    const gotoProductPage=(elem)=>{
        productArr.push(elem);
        console.log(productArr)
        localStorage.setItem("product", JSON.stringify(productArr));
        window.location.href="Pages/product.html"

    }

// -------------------------------Debouncing end-----------------------------------------


document.getElementById("cartGo").addEventListener("click", ()=>{
    goToCart();
})
const goToCart=()=>{
    window.location.href="/Pages/cart.html";
}