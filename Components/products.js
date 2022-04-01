let cartArr = JSON.parse(localStorage.getItem("cartItem"))||[];

const elements = ()=>{

    return ` <div class="container mt-8 w-10/12 flex mx-auto">
    <div class="flex w-2/12  flex-col invisible lg:visible ">
        <div class="flex shadow-xl bg-white w-full p-3 flex-col">
            <h3 class="font-bold">CATEGORIES</h3>
            <p class="text-xs mt-4">NUTRITION</p>
            <ul class="mt-3 flex flex-col">
                <li><a class="text-xs mx-4 text-[rgb(255,111,97)] font-semibold" href="">Multivitamins</a></li>
                <li><a class="text-xs mx-4 text-gray-500 hover:text-[rgb(255,111,97)]" href="">Chyawanprash</a></li>
            </ul>
            <p class="text-xs mt-4">DIABETES MEDICINES</p>
            <ul class="mt-3 flex flex-col">
                <li><a class="text-xs mx-4 text-gray-500 hover:text-[rgb(255,111,97)] " href="">Ayurvedic</a></li>
                <li><a class="text-xs mx-4 text-gray-500 hover:text-[rgb(255,111,97)]" href="">Homeopathy</a></li>
            </ul>

            <h3 class="font-bold mt-4">FILTERS</h3>
        </div>
        <div class="block shadow-xl bg-white w-full p-3 mt-0.5 h-80 overflow-y-scroll ">
            <h3 class="font-bold ">BRANDS</h3>
            <div class="flex items-center">
                <input  class="checkbox my-2 align-middle  cursor-pointer" type="checkbox" name="Tata 1mg" id="Tata1Mg" value="Tata 1mg">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Tata 1mg">Tata 1mg</label>
            </div>

            <div class="flex items-center">
                <input class="checkbox my-2 align-middle  cursor-pointer" type="checkbox" name="HealthCart" id="HealthCart" value="HealthCart">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="HealthCart">HealthCart</label>
            </div>

            <div class="flex items-center">
                <input class="checkbox my-2 align-middle  cursor-pointer" type="checkbox" name="Revital" id="Revital" value="Revital">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Revital">Revital</label>
            </div>

            <div class="flex items-center">
                <input class="checkbox my-2 align-middle  cursor-pointer" type="checkbox" name="Healthvit" id="Healthvit" value="Healthvit">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="THealthvit">Healthvit</label>
            </div>

            <div class="flex items-center">
                <input class="checkbox my-2 align-middle  cursor-pointer" type="checkbox" name="Pure Nutrition" >
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Pure Nutrition">Pure Nutrition</label>
            </div>

            <div class="flex items-center">
                <input class="checkBox my-2 align-middle  cursor-pointer" type="checkbox" name="WellsPro" >
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="WellsPro">WellsPro</label>
            </div>

            <div class="flex items-center">
                <input class="checkBox my-2 align-middle  cursor-pointer" type="checkbox" name="Carbamide Fort" >
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Carbamide Fort">Carbamide Fort</label>
            </div>

            <div class="flex items-center">
                <input class="checkBox my-2 align-middle  cursor-pointer" type="checkbox" name="Saral Proticons" >
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Saral Proticons">Saral Proticons</label>
            </div>

            <div class="flex items-center">
                <input class="checkbox my-2 align-middle  cursor-pointer" type="checkbox" name="GNC" >
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="GNC">GNC</label>
            </div>

            <div class="flex items-center">
                <input class="checkbox my-2 align-middle  cursor-pointer" type="checkbox" name="Swisse" >
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Swisse">Swisse</label>
            </div>

            <div class="flex items-center">
                <input class="checkbox my-2 align-middle cursor-pointer" type="checkbox" name="Proathlix" >
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Proathlix">Proathlix</label>
            </div>

            <div class="flex items-center">
                <input class="checkbox my-2 align-middle  cursor-pointer" type="checkbox" name="Curae Health" >
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Curae Health">Curae Health</label>
            </div>
        </div>
        <div class="block shadow-xl bg-white w-full p-3 mt-0.5 h-80 overflow-y-scroll  ">
            <h3 class="font-bold ">Product Tags</h3>
            <div class="flex items-center ">
                <input class="my-2 align-middle  cursor-pointer" type="checkbox" name="Antioxidant">
                <label class="align-middle mx-2 text-xs text-gray-500 cursor-pointer" for="Antioxidant">Antioxidant</label>
            </div>

            <div class="flex items-center">
                <input class="my-2 align-middle  cursor-pointer" type="checkbox" name="Manganese">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer  cursor-pointer" for="Manganese">Manganese</label>
            </div>

            <div class="flex items-center">
                <input class="my-2 align-middle  cursor-pointer" type="checkbox" name="Biloba">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Biloba">Biloba</label>
            </div>

            <div class="flex items-center">
                <input class="my-2 align-middle  cursor-pointer" type="checkbox" name="Pantothenate">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Pantothenate">Pantothenate</label>
            </div>

            <div class="flex items-center">
                <input class="my-2 align-middle  cursor-pointer" type="checkbox" name="Phosphorous">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Phosphorous">Phosphorous</label>
            </div>

            <div class="flex items-center">
                <input class="my-2 align-middle  cursor-pointer" type="checkbox" name="Citrus Bioflavonoids">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Citrus Bioflavonoids">Citrus Bioflavonoids</label>
            </div>

            <div class="flex items-center">
                <input class="my-2 align-middle  cursor-pointer" type="checkbox" name="Bioavailability">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Bioavailability">Bioavailability</label>
            </div>

            <div class="flex items-center">
                <input class="my-2 align-middle  cursor-pointer" type="checkbox" name="Hyperthyroidism">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Hyperthyroidism">Hyperthyroidism</label>
            </div>

            <div class="flex items-center">
                <input class="my-2 align-middle  cursor-pointer" type="checkbox" name="Monohydrate">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Monohydrate">Monohydrate</label>
            </div>

            <div class="flex items-center">
                <input class="my-2 align-middle  cursor-pointer" type="checkbox" name="Phytonutrient">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Phytonutrient">Phytonutrient</label>
            </div>

            <div class="flex items-center">
                <input class="my-2 align-middle  cursor-pointer" type="checkbox" name="Tiredness Fatigue">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Tiredness Fatigue">Tiredness Fatigue</label>
            </div>

            <div class="flex items-center">
                <input class="my-2 align-middle  cursor-pointer" type="checkbox" name="Phytonutrient">
                <label class="align-middle mx-2 text-xs text-gray-500  cursor-pointer" for="Phytonutrient">Phytonutrient</label>
            </div>
        </div>

    </div>
    <div class="w-10/12"> 
        <div class="flex mx-7">
            <p class="text-[rgb(255,111,97)] text-xs mx-1 cursor-pointer">Home ></p>
            <p class="text-[rgb(255,111,97)] text-xs mx-1 cursor-pointer">OTC Categories ></p>
            <p id="cat1" class="text-[rgb(255,111,97)] text-xs mx-1 cursor-pointer"></p>
            <p id="cat2" class="text-[rgb(255,111,97)] text-xs mx-1 cursor-pointer"></p>
            <p id="name" class="text-xs text-gray-500"></p>
         </div>
         <div class=" w-full flex flex-row-reverse mt-3 items-center">
            
             <select id="selected"  class="w-2/12 p-1 ">
                 <option class="text-gray-500 cursor-pointer " value="">Relevance</option>
                 <option class="text-gray-500 cursor-pointer " value="HighRating">High Ratings</option>
                 <option class="text-gray-500 cursor-pointer " value="LowRating">Low Ratings</option>
                 <option class="text-gray-500 cursor-pointer " value="HighPrice">Price High To Low</option>
                 <option class="text-gray-500 cursor-pointer " value="LowPrice">Price Low To High</option>
             </select>
             <p class="mx-5">Sort By</p>
         </div>
         <div class="mx-8"><h1 class="text-2xl font-normal" id="heading"></h1></div>
         <div id ="productContainer" class=" ml-8 mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-3 "></div>
    </div>

</div>`
}

const getData=async (url)=>{
    try {
        let medicine = await fetch(url);
        let data = await medicine.json();
        // console.log(data);
        return data;
        // appendData(data);
        
    } catch (error) {
        console.log(error);
        
    }
}




const appendData=(data, parent)=>{
    // console.log(data, "sortData");
 
   parent.innerHTML="";

   data.map((elem)=>{
       let div = document.createElement("div");
       div.setAttribute("class", "productBox");
    //    div.addEventListener("click", ()=>{
    //        productDetails(elem);
    //    })

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
           console.log("addToCart", elem)
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

      parent.append(div)
   })
}


const addToCart=(data)=>{
    cartArr.push(data);
    // console.log(cartArr)
    localStorage.setItem("cartItem", JSON.stringify(cartArr));

}


const sortData= (response, value) =>{
    console.log(response);
    // let selected = document.getElementById("selected").value
     if (value == "HighPrice"){

      response.sort(function(a, b){
        return Number(b.MRP)-Number(a.MRP)
      });
     }
     if (value == "LowPrice"){

        response.sort(function(a, b){
        return Number(a.MRP)-Number(b.MRP)
        });

      }
      console.log(response);
     return response;
     
} 


export {elements, getData, appendData, sortData}