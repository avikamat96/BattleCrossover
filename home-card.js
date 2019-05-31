const proxyurl = "https://cors-anywhere.herokuapp.com/";
function getHeroById(id) {
    const url = `${proxyurl}https://superheroapi.com/api/2281827108577207/${id}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            var heroes = data;
            console.log(heroes);
            var card = document.createElement("div");
            card.className = "card";
            var img = document.createElement("img");
            img.className = "card-img";
            img.src = heroes.image.url;

            img.setAttribute("alt", heroes.name);
            card.appendChild(img);

            var cardContainer = document.createElement("div");
            cardContainer.className = "card-container";
            var cardHeading = document.createElement("h4");
            cardHeading.innerText = heroes.name;
            cardContainer.appendChild(cardHeading);

            var cardDesc = document.createElement("p");
            cardDesc.innerText = heroes.biography.publisher;
            cardContainer.appendChild(cardDesc);

            card.appendChild(cardContainer);
            document.getElementById("heroes-row").append(card);

        })
        .catch(error => {
            console.log(error);
            console.log("Hero Name not found");
        });
}
let super_id = [70,346,644];
for (let i = 0; i < 3; i++) {
    let id = super_id[i];
    getHeroById(id);
}