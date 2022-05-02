// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar } from "../components/navbar.js";

let nvbar = document.getElementById("navbar");
nvbar.innerHTML = navbar();

import {searchNews,appenddata,conNews} from "./fetch.js";


let search = (e) =>{
    if(e.key ==="Enter"){
        let value = document.getElementById("search_input").value;
        searchNews(value).then((data)=>{
            console.log(data);
        let container = document.getElementById("result");
        appenddata(data.articles,container);
        });
    }
};

document.getElementById("search_input").addEventListener("keydown",search)

let countries = document.getElementById("sidebar").children;

function cSearch(){
    console.log(this.id);
    conNews(this.id)
    .then((data) =>{
        console.log(data);
        let container = document.getElementById("result");
        container.innerHTML=null;
        appenddata(data.articles,container);
    });
}
for(let el of countries){
    el.addEventListener("click",cSearch);
}