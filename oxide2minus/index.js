var cor = 0;
var incor = 0;
var total = 0;
var ranIndex;
var textOfSomeSort = document.getElementById("correct");
let elements = [
    ["HPO3", "Hydrogen Phosphite" ],
    ["HPO4", "Hydrogen Phosphate"],
    ["SO3", "Sulfite"],
    ["SO4", "Sulfate"],
    ["C2O4", "Oxalate"],
    ["S2O4", "Thiosulfate"],
    ["SiO3", "Silicate"],
    ["CrO4", "Chromate"],
    ["Cr2O7", "Dichromate"],
    ["CO3", "Carbonate"]
];

function homepage() {
    window.location.pathname = "/index.html"
}

function checkAnswer() {
    var ans = document.getElementById("answer");
    if (ans.value.toLowerCase().trim() == elements[ranIndex][1].toLowerCase()) {
        textOfSomeSort = document.getElementById("correct");
        textOfSomeSort.innerText = "Correct!!!";
        cor += 1;
        total += 1;
        setTimeout(changeElement, 1000);
        
        ans.value = "";
    }
    else {
        textOfSomeSort = document.getElementById("correct");
        textOfSomeSort.innerText = "you got it wrong, it should've been " + elements[ranIndex][1];
        incor += 1;
        total += 1;
        setTimeout(changeElement, 1000);
        
        ans.value = "";
    }
}
function changeElement() {
    var docId = document.getElementById("formula");
    ranIndex = Math.floor(Math.random() * elements.length);
    var ranElement = elements[ranIndex][0]
    docId.innerText = ranElement;
    textOfSomeSort = document.getElementById("correct");
    textOfSomeSort.innerText = "Waiting for input...";
    document.getElementById("corCount").innerText = cor + "/" + total;
    document.getElementById("incorCount").innerText = incor + "/" + total;
}

addEventListener("DOMContentLoaded", changeElement)
