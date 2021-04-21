function Character(character, quantity = 1) {
    this.character = character;
    this.quantity = quantity;
};
//función que busca y agrega letras
function findCharacter(character, characters) {
    var find_it = false;
    for (let i in characters) {
        if(characters[i].character == character){
            characters[i].quantity += 1;
            find_it = true;
            break;
        };
    };
    if(!find_it){characters.push(new Character(character))};
};
//función que cuenta letras
function countCharacter(){
    var characters = [];
    var str = (document.getElementById("texto-entrada").innerHTML).toString().trim().replace(/ /g,"").toLowerCase().split("");
    for (let i of str) {
        findCharacter(i, characters);
    };
    var resultados = document.getElementById("resultados");
    for (let i in characters) {
        var strong = document.createElement("strong");
        var span = document.createElement("span");
        var p = document.createElement("p");
        strong.appendChild(document.createTextNode("Letra "+characters[i].character+": "));
        span.appendChild(document.createTextNode(characters[i].quantity));
        p.appendChild(strong);
        p.appendChild(span);
        resultados.appendChild(p);
    }
};

countCharacter()



