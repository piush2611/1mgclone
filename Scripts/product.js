let head= document.getElementById("header");
import {navbar, footer} from "../Components/navbar.js"
head.innerHTML=navbar();

let foot = document.getElementById("footer");
foot.innerHTML=footer();


// --------------Append Data-----------------

let productArr= JSON.parse(localStorage.getItem("product"))||[];
let N= productArr.length;
let product = productArr[N-1];
console.log(product);
const appendData=(productArr)=>{
    let imageBox = document.getElementById("image").innerHTML="";
    let specs =document.getElementById("specifications").innerHTML="";
 
    let image = document.createElement("img");
    image.src= product.Image;
    image.setAttribute("class", "ProductImage")

    document.getElementById("image").append(image);

    let name = document.createElement("p");
    name.textContent = product.Title;
    name.setAttribute("class", "detailName")

    let brand = document.createElement("p");
    brand.textContent = product.Brand;
    brand.setAttribute("class", "detailBrand")

    let div = document.createElement("div");
    div.setAttribute("class", "detailRating")

    let div2 = document.createElement("div");
    div2.setAttribute("class", "productRating");

    let rating =  document.createElement("p");
    rating.setAttribute("class", "Ratings");
    rating.textContent=`${product.Ratings} ★`;

    let totalRating = document.createElement("p");
    totalRating.textContent = product.TotalRatings;
    totalRating.setAttribute("class", "productTotalRating");

    let high = document.createElement("p");
    high.textContent= `Product highlights`;
    high.setAttribute("class", "highlights")

    let p1 = document.createElement("p");
    p1.textContent=`• ${product.Product_Highlights[1]}`
    p1.setAttribute("class", "points")

    let p2 = document.createElement("p");
    p2.textContent=`• ${product.Product_Highlights[2]}`
    p2.setAttribute("class", "points")

    let p3 = document.createElement("p");
    p3.textContent=`• ${product.Product_Highlights[3]}`
    p3.setAttribute("class", "points")

    let p4 = document.createElement("p");
    p4.textContent=`• ${product.Product_Highlights[4]}`
    p4.setAttribute("class", "points")

    let p5 = document.createElement("p");
    p5.textContent=`• ${product.Product_Highlights[5]}`
    p5.setAttribute("class", "points")

    

    div2.append(rating)
    div.append(div2, totalRating);

    
    document.getElementById("buyPrice").textContent=`₹ ${product.MRP}`;
    document.getElementById("specifications").append(name, brand, div, high, p1, p2, p3, p4, p5);


    let info = document.createElement("h3");
    info.textContent= product.Info;
    info.setAttribute("class", "ProductInfo")

    let para = document.createElement("p");
    para.textContent= product.Para;
    para.setAttribute("class", "Para")

    let key = document.createElement("p");
    key.textContent="Key Ingredients:"
    key.setAttribute("class", "points2")

    let ingredients = document.createElement("p");
    ingredients.textContent= product.Ingredients;
    ingredients.setAttribute("class", "Para");

    let keyBenifits = document.createElement("p");
    keyBenifits.textContent="Key Benifits:"
    keyBenifits.setAttribute("class", "points2")

    let b1 = document.createElement("p");
    b1.textContent=`• ${product.Benefits[1]}`
    b1.setAttribute("class", "points")

    let b2 = document.createElement("p");
    b2.textContent=`• ${product.Benefits[2]}`
    b2.setAttribute("class", "points")

    let b3 = document.createElement("p");
    b3.textContent=`• ${product.Benefits[3]}`
    b3.setAttribute("class", "points")

    let b4 = document.createElement("p");
    b4.textContent=`• ${product.Benefits[4]}`
    b4.setAttribute("class", "points")

    let b5 = document.createElement("p");
    b5.textContent=`• ${product.Benefits[5]}`
    b5.setAttribute("class", "points")


    let use = document.createElement("p");
    use.textContent="Directions For Use:"
    use.setAttribute("class", "points2")

    let useInfo = document.createElement("p");
    useInfo.textContent=product.Use;
    useInfo.setAttribute("class", "Para");

    let safety = document.createElement("p");
    safety.textContent="Safety Information:"
    safety.setAttribute("class", "points2")

    let s1 = document.createElement("p");
    s1.textContent=`• ${product.Safety_Info[1]}`
    s1.setAttribute("class", "points")

    let s2 = document.createElement("p");
    s2.textContent=`• ${product.Safety_Info[2]}`
    s2.setAttribute("class", "points")

    let s3 = document.createElement("p");
    s3.textContent=`• ${product.Safety_Info[3]}`
    s3.setAttribute("class", "points")

    let s4 = document.createElement("p");
    s4.textContent=`• ${product.Safety_Info[4]}`
    s4.setAttribute("class", "points")

    let s5 = document.createElement("p");
    s5.textContent=`• ${product.Safety_Info[5]}`
    s5.setAttribute("class", "points")
    

    document.getElementById("Information").append(info, para, key, ingredients, keyBenifits, b1, b2, b3, b4, b5, use, useInfo, safety, s1, s2, s3, s4, s5)

}
appendData();

// --------------Append Data End-----------------

// --------------Add to Cart Data-----------------



let cartArr = JSON.parse(localStorage.getItem("cartItem"));
document.getElementById("AddBtn").addEventListener("click", ()=>{
    addToCart(product);
})

const addToCart=(product)=>{

    let selected = document.getElementById("pselect").value;
    if(selected === "0"){
        alert("Add Some Quantity");
    }
    else{
        cartArr.push(product);
        console.log(cartArr);
        alert("Item Added Successfully")

        localStorage.setItem("cartItem", JSON.stringify(cartArr));

    }
   

}

// --------------Add to Cart Data End-----------------

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

// ---------------------------------------------cart length----------------------------------

// console.log(cartArr);
let cartLength = document.getElementById("length");
cartLength.textContent= cartArr.length;

// ---------------------------------------------cart length End----------------------------------

