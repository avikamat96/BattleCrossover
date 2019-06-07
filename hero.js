window.onload = ()=>{
    console.log("hero function started");
const proxyurl = "https://cors-anywhere.herokuapp.com/";
let heroName = localStorage.getItem("heroName");
console.log(heroName);
    const url = `${proxyurl}https://superheroapi.com/api/2281827108577207/search/${heroName}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
             var heroes = data.results[0];
            // var heroes = data.results;
            console.log(heroes);
            document.getElementById("heroName").innerHTML = heroes.name;
            document.getElementById("heroImage").setAttribute("src",heroes.image.url);  
            
            document.getElementById("name").innerHTML = "NAME: "+heroes.name;
            document.getElementById("gender").innerHTML = "GENDER: "+heroes.appearance.gender;
            document.getElementById("height").innerHTML = "HEIGHT: "+heroes.appearance.height[1];
            document.getElementById("weight").innerHTML = "WEIGHT: "+heroes.appearance.weight[1];

            document.getElementById("intelligence").innerHTML = "INTELLIGENCE: "+heroes.powerstats.intelligence;
            document.getElementById("durability").innerHTML = "DURABILITY: "+heroes.powerstats.durability;
            document.getElementById("strength").innerHTML = "STRENGTH: "+heroes.powerstats.strength;
            document.getElementById("power").innerHTML = "POWER: "+heroes.powerstats.power;
            document.getElementById("speed").innerHTML = "SPEED: "+heroes.powerstats.speed;
            document.getElementById("combat").innerHTML = "COMBAT: "+heroes.powerstats.combat;
        })
        .catch(error => {
            console.log(error);
            console.log("Hero Name not found");
        });
}