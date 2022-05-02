// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML =navbar();

let data = JSON.parse(localStorage.getItem("news"))
console.log(data);
let container = document.getElementById("datailed")
data.map(function(el){
    let div = document.createElement("div");
    div.setAttribute("class","news");

    let img = document.createElement("img");
    img.src = el.urlToImage;
    let Title = document.createElement("h3");
    Title.innerText = el.title;
    let des = document.createElement("p");
    des.innerText = el.description;

    div.append(img,Title,des);
    container.append(div);
})