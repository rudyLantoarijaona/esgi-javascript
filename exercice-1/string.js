function ucfirst(word){
    if(word[0] != null){
        word = word[0].toUpperCase() + word.substring(1)
    }
    else {
        word = "";
    }
    return word;
}

function capitalize(word){
    words = word.split(" ").map(function(word) {
        return ucfirst(word);
    });
    return words.join(" ");
}


function camelCase(word){
    words = word.split(" ").map(function(word) {
        return ucfirst(word);
    });
    return words.join("");
}

function snake_case(word){
    words = string.split(" ").map(function(string) {
        return string.toLowerCase();
    });
    return words.join("-");
 }

function leet(word){
    word = word.replace(/[aA]+/g, "4");
    word = word.replace(/[oO]+/g, "0");
    word = word.replace(/[eE]+/g, "3");
    word = word.replace(/[sS]+/g, "5");
    word = word.replace(/[tT]+/g, "7");
    word = word.replace(/[iI]+/g, "1");
    word = word.replace(/[bB]+/g, "8");
    return word;
}

function prop_access(word){

}

function verlan(word){

}

function yoda(word){
    return word.split(" ").reverse().join("");
}

function vig(word){

}



