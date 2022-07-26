const API = "https://iskarr.github.io/austindonovan.github.io/api/business.json"
var cardHolder =  document.getElementById("card-Holder");
var buisnessData;


function buildPage() {
    console.log(buisnessData);
    for(let i = 0; i < buisnessData.length; i++) {
        let card = document.createElement("div");
        let picture = document.createElement("img");
        let frame = document.createElement("div");
        let title = document.createElement("h2");
        let dis = document.createElement("p");
        let location = document.createElement("h3");
        picture.classList.add("buisnessimg");
        frame.classList.add("frame");
        card.classList.add("card");

        frame.appendChild(picture)


        picture.src = buisnessData[i].imageurl;
        title.textContent = buisnessData[i].name;
        dis.textContent = buisnessData[i].description;
        location.textContent = buisnessData[i].address;
        card.appendChild(frame);
        card.appendChild(title);
        card.appendChild(dis);
        card.appendChild(location);
        dis.hidden = true;
        location.hidden = true;
        card.addEventListener(("dblclick"), () => {
            dis.hidden = false;
            location.hidden = false;
        })
        card.addEventListener(("click"), () => {
            dis.hidden = true
            location.hidden = true;
        })
        cardHolder.appendChild(card);
    }
}


 async function BuisnessDataCollection() {
    let response = await fetch(API);
    let Json = await response.json(); 
    buisnessData = Json.business;
    buildPage();
}

BuisnessDataCollection();
