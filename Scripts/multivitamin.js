let name = "Multivitamins";
let cat1 = "Vitamins & Nutrition >";
let cat2 = "Vitamins & Supplements >"

let cartArr = JSON.parse(localStorage.getItem("cartItem"))||[];

import {elements, getData, appendData,sortData} from "../Components/products.js";

let head = document.getElementById("container2");
 head.innerHTML=elements();

 let parent = document.getElementById("productContainer");

 let response = await getData(`http://localhost:3000/multiVitamins`);
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

