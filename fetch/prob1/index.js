// async await
let main = document.getElementById("main")
let api = "https://dummyjson.com/products";

async function getData(){
   let res = await fetch(api)
//    res.then(function(res){
//    })
let data = await res.json()
// console.log(data)

data.map(({title,price,image})=>{
//    console.log(el)
   let name = document.createElement("h2")
   name.innerText = title;
   let p = document.createElement("h3")
   p.innerText = price
   let img = document.createElement("img")
   img.src = image
   let div = document.createElement("div")

   div.append(img,name,p)
   main.append(div)

})
}
