var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    //pevents refresh
    e.preventDefault();
    //api link
    let urlForm = "https://pokeapi.co/api/v2/pokemon/";
    //parsing input value
    let id = document.getElementById("name");
    urlForm = urlForm + this.name.value;
    urlForm = urlForm.toLocaleLowerCase();

    //Id Content
    let answer = document.getElementById("content");
    //img
    let image = document.getElementById("imgPokemon");
    //HTML answer
    let html = "";

    //Fetch() - Request something from API;
    fetch(urlForm)
        .then(answer => answer.json())
        .then(function (data) {
            html = "Nome: " + upperCase(data.name) + "<br>"
            html = html + "Type: " + upperCase(data.types[0].type.name);
            answer.innerHTML = html;

            image.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>";
        })
        .catch(function (err) {
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokémon não encontrado! 😒'
            } else {
                html = err
            }
            answer.innerHTML = html
        })
});

function upperCase(val) {
    return val[0].toUpperCase() + val.substr(1);
}