
// const url = `https://masai-mock-api.herokuapp.com/news?q=${value}`;
let searchNews = async (value) =>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);
        let data = await res.json();
        console.log(data);
        return data;

    }catch(err){
        console.log(err)
    }
}
let conNews = async(value) =>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`);
        let data = await res.json();
        console.log(data);
        return data;
    }catch(err){
        console.log(err);

    }
}
let news=JSON.parse(localStorage.getItem("news"))||[];
let appenddata = (data, container) =>{
    data.forEach((el)=>{
        let div = document.createElement("div");
        div.setAttribute("class","news");

        let img = document.createElement("img");
        img.src = el.urlToImage;

        let box = document.createElement("div");
        box.setAttribute("class","box")
        let Title = document.createElement("h3")
        Title.innerText = el.title;

        let Dis = document.createElement("p");
        Dis.innerText = el.description;
       let box1 = document.createElement("div")
        box1.append(Title,Dis);
        div.addEventListener("click",function(){
            newsDet(el);
        })
        box.append(img)
        div.append(box,box1)
        container.append(div);
    });
}
function newsDet(el){
    news.push(el);
    localStorage.setItem("news",JSON.stringify(news))
    window.location.href="news.html"
}

export{searchNews,appenddata,conNews};