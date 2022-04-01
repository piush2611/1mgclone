//  ----------------------import header and footer-----------------
 
let header= document.getElementById("header");
import {navbar, footer} from "../Components/navbar.js"
header.innerHTML=navbar();

let foot = document.getElementById("footer");
foot.innerHTML=footer();

let timerID = "";

let productArr = JSON.parse(localStorage.getItem("product"));

//  ----------------------import header and footer end-----------------

let name = "Chyawanprasha";
let cat1 = "Vitamins & Nutrition >";
let cat2 = "Immunity Boosters >"

let cartArr = JSON.parse(localStorage.getItem("cartItem"))||[];

import {elements, getData, appendData,sortData} from "../Components/products.js";

let head = document.getElementById("container2");
 head.innerHTML=elements();

 let parent = document.getElementById("productContainer");

 let response = await getData(`http://localhost:3000/Chyawanprash`);
//  console.log(response);
 appendData(response, parent);

let Name= document.getElementById("name").innerHTML=name;
let Cat1= document.getElementById("cat1").textContent=cat1;
let Cat2= document.getElementById("cat2").textContent=cat2;
let heading= document.getElementById("heading").textContent=name;

 document.getElementById("selected").addEventListener("change", (e)=>{
    // console.log(e.target, e.target.value);
  let sort=   sortData(response, e.target.value);
console.log(sort, "sort");
 let append = appendData(sort, parent);
//  console.log(append, "append");
})


document.getElementById("Tata1Mg").addEventListener("click", ()=>{
    tataMg();
})

let tataMg=()=>{
    let value = document.getElementById("Tata1Mg").checked;
    console.log(value);
    if(value==true){
      let tataItem = response.filter((elem, index)=>{
          return elem.Brand =="Tata 1mg"
      });
      appendData(tataItem, parent);
    }
    else{
        appendData(response, parent);
    }

}

document.getElementById("HealthCart").addEventListener("click", ()=>{
    healthCart();
})

let healthCart=()=>{
    let value = document.getElementById("HealthCart").checked;
    console.log(value);
    if(value==true){
      let HealthItem = response.filter((elem, index)=>{
          return elem.Brand =="Healthkart"
      });
      appendData(HealthItem, parent);
    }
    else{
        appendData(response, parent);
    }

}


// ---------------------------------------------cart length----------------------------------
let cartArr1 = JSON.parse(localStorage.getItem("cartItem"));
// console.log(cartArr);
let cartLength = document.getElementById("length");
cartLength.textContent= cartArr1.length;

// ---------------------------------------------cart length End----------------------------------




// -------------------------------Debouncing strat-----------------------------------------



document.getElementById("searchItem").addEventListener("input", ()=>{
    debounce(main, 1000);
})

const getData2=async()=>{
    try {
        let medicine = await fetch(`http://localhost:3000/multiVitamins`);
        let data = await medicine.json();
        return data;
        
    } catch (error) {
        console.log(error);
        
    }

}

const appendData2=(data)=>{
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
        let data = await getData2();
    
        if(data === undefined){
            return false;
        }
        appendData2(data);
        
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
        window.location.href="product.html"

    }


// -------------------------------Debouncing end-----------------------------------------


document.getElementById("cartGo").addEventListener("click", ()=>{
    goToCart();
})
const goToCart=()=>{
    window.location.href="cart.html";
}

let logInUser = JSON.parse(localStorage.getItem("logInUser"))||[];
// console.log(logInUser.name)
let name1 = logInUser[0].name;
 let userName=document.getElementById("login")
// console.log(logInUser);

if(logInUser===null){
    userName.textContent=LOGIN | SIGNUP

}
else{
    userName.textContent=`Hello! ${name1}`
}