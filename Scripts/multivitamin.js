let name = "Multivitamins";
let cat1 = "Vitamins & Nutrition >";
let cat2 = "Vitamins & Supplements >"

let cartArr = JSON.parse(localStorage.getItem("cartItem"))||[];
let pr

const getData=async ()=>{
    try {
        let medicine = await fetch(`http://localhost:3000/multiVitamins`);
        let data = await medicine.json();
        console.log(data);
        appendData(data);
        
    } catch (error) {
        console.log(error);
        
    }
}
getData();

const appendData=(data)=>{
   let Name= document.getElementById("name").textContent=name;
   let Cat1= document.getElementById("cat1").textContent=cat1;
   let Cat2= document.getElementById("cat2").textContent=cat2;

   let heading= document.getElementById("heading").textContent=name;

   let container = document.getElementById("productContainer").innerHTML=""

   data.map((elem)=>{
       let div = document.createElement("div");
       div.setAttribute("class", "productBox");
       div.addEventListener("click", ()=>{
           productDetails(elem);
       })

       let div2 =  document.createElement("div");
       div2.setAttribute("class", "imageContainer");

       let image = document.createElement("img");
       image.src = elem.Image;
       image.setAttribute("class", "image");

       let div3 =  document.createElement("div");
       div3.setAttribute("class", "nameContainer");

       let name = document.createElement("p");
       name.textContent= elem.Title;
       name.setAttribute("class", "productname")

       let div4 =  document.createElement("div");
       div4.setAttribute("class", "sizeContainer");

       let size = document.createElement("p");
       size.textContent=elem.size;
       size.setAttribute("class", "productsize");

       let div5 =  document.createElement("div");
       div5.setAttribute("class", "ratingContainer");

       let div6 =  document.createElement("div");
       div6.setAttribute("class", "productRating");

       let rating = document.createElement("p");
       rating.textContent= `${elem.Ratings} ★`
       rating.setAttribute("class", "Ratings")

       let totalRating = document.createElement("p");
       totalRating.textContent= elem.TotalRatings;
       totalRating.setAttribute("class", "totalRating")

       let div7 =  document.createElement("div");
      
       let div8 =  document.createElement("div");
       div8.setAttribute("class", "OfferContainer");

       let strikedPrice = document.createElement("p");
       strikedPrice.textContent=elem.Strikedoff;
       strikedPrice.setAttribute("class", "strikedPrice")

       let offer = document.createElement("p");
       offer.textContent=elem.Off;
       offer.setAttribute("class", "productOffer");

       let div9 =  document.createElement("div");
       div9.setAttribute("class", "productPrice");

       let price = document.createElement("p");
       price.textContent=`₹ ${elem.MRP}`;
       price.setAttribute("class", "Price")

       let addBtn = document.createElement("p");
       addBtn.textContent="ADD"
       addBtn.setAttribute("class", "addBtn");
       addBtn.addEventListener("click", ()=>{
           addToCart(elem);
       })
       div2.append(image);
       div3.append(name);
       div4.append(size);
       div6.append(rating);
       div7.append(totalRating);
       div5.append(div6, div7);
       div8.append(strikedPrice, offer);
       div9.append(price, addBtn);

       div.append(div2, div3, div4, div5, div8, div9)

      document.getElementById("productContainer").append(div)
   })
}

const addToCart=(data)=>{
    cartArr.push(data);
    localStorage.setItem("cartItem", JSON.stringify(cartArr));

}

const productDetails=(data)=>{

}



import elements from "../Components/products.js";
console.log(elements)

let container = document.getElementById("container2");
container.innerHTML = elements();
