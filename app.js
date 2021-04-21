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
    //construyendo HTML
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

//Lógica de palabras

function Word(word, quantity=1){
    this.word = word;
    this.quantity = quantity;
};
//función que busca y agrega letras
function findWords(word, words){
    var find_it = false;
    for (const w in words) {
        if (words[w].word == word) {
            words[w].quantity += 1;
            find_it = true;
            break;
        };
    };
    if(!find_it){words.push(new Word(word))};
};
//Funcion que cuenta palabras

function countWords() {
    var str = (document.getElementById("texto-entrada").innerHTML).toString().trim().replace(/ /g,",").toLowerCase().split(",");
    var words = [];
    for (const p of str) {
        findWords(p, words);
    };
    //Construyendo HTML
    var resultados = document.getElementById("resultados");
    for (const i in words) {
        var p = document.createElement("p");
        var strong = document.createElement("strong");
        var span = document.createElement("span");
        strong.appendChild(document.createTextNode("Palabra "+words[i].word+": "));
        span.appendChild(document.createTextNode(words[i].quantity));
        p.appendChild(strong);
        p.appendChild(span);
        resultados.appendChild(p);
    };
};

//llamar funciones
countCharacter()
countWords()



