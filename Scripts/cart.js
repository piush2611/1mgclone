let cartArr = JSON.parse(localStorage.getItem("cartItem"))||[];
console.log(cartArr);

let total ="";
let discountPrice ="";
let debitAmt = 0;
function findTotal(cartArr){
    total = cartArr.reduce(function(ac, cv){
        return Number(ac)+ Number(cv.MRP);
    },0)
    console.log(total);
}
findTotal(cartArr)



const appendData=(cartArr)=>{
    let container = document.getElementById("left");
    container.innerHTML="";

    cartArr.map((elem, index)=>{

     let div = document.createElement("div");
     div.setAttribute("class", "CartItem");

     let div2 = document.createElement("div");
     div2.setAttribute("class", "cartName");

     let name = document.createElement("p");
     name.setAttribute("class", "cartTitle")
     name.textContent=elem.Title;

     let price = document.createElement("p");
     price.setAttribute("class", "cartPrice");
     price.textContent=`₹${elem.MRP}`;

     let div3 = document.createElement("div");
     div3.setAttribute("class", "cartSize");

     let size = document.createElement("p");
     size.setAttribute("class", "cartProductSize")
     size.textContent=elem.size;

     let strikePrice = document.createElement("p");
     strikePrice.setAttribute("class", "cartStriked");
     strikePrice.textContent=elem.Strikedoff;

     let div4 = document.createElement("div");
     div4.setAttribute("class", "cartEdit");

     let div5 = document.createElement("div");
     div5.setAttribute("class", "cartRemove");
     div5.addEventListener("click", ()=>{
         removeItem(index);
     })

     let symbol = document.createElement("p");
     symbol.setAttribute("class", "removeSymbol")
     symbol.innerHTML=`<i class="fa-solid fa-trash-can"></i> Remove`

     let div6 = document.createElement("div");
     div6.setAttribute("class", "cartAdd");

     let addBtn = document.createElement("button");
     addBtn.setAttribute("class", "button1");
     addBtn.textContent="+"
     addBtn.addEventListener("click", ()=>{
         addItem()
     })

     let qty = document.createElement("p");
     qty.id = "Quantity";
     qty.setAttribute("class", "cartQty");
     qty.textContent=1

     let removeBtn = document.createElement("button");
     removeBtn.setAttribute("class", "button2");
     removeBtn.textContent="-"

     removeBtn.addEventListener("click", ()=>{
         substractItem()
     })


     
     div2.append(name, price);
     div3.append(size, strikePrice);
     div5.append(symbol);
     div6.append(removeBtn, qty, addBtn ),
     div4.append(div5, div6)
    div.append(div2, div3, div4)
    container.append(div);


    })

    let container2 = document.getElementById("right");
    container2.innerHTML="";

    let div = document.createElement("div");
    div.setAttribute("class", "firstDiv");

    let input = document.createElement("input");
    input.id="Coupon";
    input.placeholder="Apply Coupon"
    input.setAttribute("class", "apply");

    let btn = document.createElement("button");
    btn.textContent="Apply";
    btn.id="applyBtn";
    btn.setAttribute("class", "btnApply");

    let div2 = document.createElement("div");
    div2. setAttribute("class", "secondDiv");

    let mrp = document.createElement("p");
    mrp.textContent="Item Total(MRP)" 
    mrp.setAttribute("class", "totalMrp");

    let totalMRP = document.createElement("p");
    totalMRP.textContent=`₹ ${total}` 
    totalMRP.setAttribute("class", "totalMrp");

    let div3 = document.createElement("div");
    div3. setAttribute("class", "secondDiv");

    let dis = document.createElement("p");
    dis.textContent="Price Discount" 
    dis.setAttribute("class", "totalMrp");

    let disMRP = document.createElement("p");
    disMRP.id="Discounted_Mrp"
    disMRP.textContent=`₹  0`
    disMRP.setAttribute("class", "totalMrp");

    let div4 = document.createElement("div");
    div4. setAttribute("class", "secondDiv");

    let ship = document.createElement("p");
    ship.textContent="Shipping Fee" 
    ship.setAttribute("class", "totalMrp");

    let shipMRP = document.createElement("p");
    shipMRP.textContent=`₹ 0`
    shipMRP.setAttribute("class", "totalMrp");

    let div5 = document.createElement("div");
    div5. setAttribute("class", "secondDiv");

    let paid = document.createElement("p");
    paid.textContent="To be paid";
    paid.setAttribute("class", "paid");

    let paidAmount = document.createElement("p");
    paidAmount.textContent=`₹ ${total}`;
    paidAmount.id="toPaid"
    paidAmount.setAttribute("class", "paid");

    let div6 = document.createElement("div");
    div6. setAttribute("class", "thirdDiv");

    let save = document.createElement("p");
    save.textContent="Total Savings"
    save.setAttribute("class", "totalMrp");

    let saveMrp =  document.createElement("p");
    saveMrp.id="saveMRP"
    saveMrp.textContent=`₹  0`
    saveMrp.setAttribute("class", "saveMrp");

    let button = document.createElement("button");
    button.textContent="CHECKOUT"
    button.setAttribute("class", "checkout");
    button.id= "checkOut";


    div.append(input, btn);
    div2.append(mrp, totalMRP);
    div3.append(dis, disMRP);
    div4.append(ship, shipMRP)
    div5.append(paid, paidAmount);
    div6.append(save, saveMrp)
    container2.append(div, div2, div3, div4, div5, div6, button);
}
appendData(cartArr);

const removeItem=(index)=>{
    cartArr.splice(index, 1);
    localStorage.setItem("cartItem", JSON.stringify(cartArr));
    appendData(cartArr);
    location.reload();

}


document.getElementById("checkOut").addEventListener("click", ()=>{
    goToPayment();
})

const goToPayment=()=>{
    window.location.href= "payment.html";
}


document.getElementById("applyBtn").addEventListener("click", ()=>{
    discount();
})


const discount =()=>{
    let coupon = document.getElementById("Coupon").value;
  
let p= document.getElementById("Discounted_Mrp");
let t = document.getElementById("toPaid");
let s = document.getElementById("saveMRP")

    if(coupon === "masai30"){
        discountPrice= (0.7 * total).toFixed(2);
        console.log(discountPrice);
        debitAmt = (0.3 * total ).toFixed(2);
        p.textContent=debitAmt

        t.textContent=`₹ ${total - debitAmt}` ;
        s.textContent=`₹ ${debitAmt}`
        alert("Coupon Applied Succeessfully!")
        
    }
    else{
       
        discountPrice=total;
        debitAmt=0
        p.textContent=debitAmt
        alert("Wrong Coupon Code")
        
    }
}