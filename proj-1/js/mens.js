import navbar from "../js/navbar.js";

let nav = document.getElementById("navbar");
let main = document.getElementById("main");
import  {getData,display} from "../js/fetch.js"

let api = "https://fakestoreapi.com/products/category/men's%20clothing"
 
let  x= navbar();
let data =  await getData(api)

display(data)


nav.innerHTML = x