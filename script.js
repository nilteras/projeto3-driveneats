let prato;
let bebida;
let sobremesa;

function escolherCarne() {
    document.getElementById('carne').style.borderColor = "#32B72F";
    document.getElementById('frango').style.borderColor = "#FFFFFF";
    document.getElementById('peixe').style.borderColor = "#FFFFFF";
    document.getElementById('icon-carne').style.color = "#32B72F";
    document.getElementById('icon-frango').style.color = "#FFFFFF";
    document.getElementById('icon-peixe').style.color = "#FFFFFF";
    prato = "Carne";

}
function escolherFrango() {
    document.getElementById('frango').style.borderColor = "#32B72F";
    document.getElementById('carne').style.borderColor = "#FFFFFF";
    document.getElementById('peixe').style.borderColor = "#FFFFFF";
    document.getElementById('icon-frango').style.color = "#32B72F";
    document.getElementById('icon-carne').style.color = "#FFFFFF";
    document.getElementById('icon-peixe').style.color = "#FFFFFF";
    prato = "Frango";

}
function escolherPeixe() {
    document.getElementById('peixe').style.borderColor = "#32B72F";
    document.getElementById('frango').style.borderColor = "#FFFFFF";
    document.getElementById('carne').style.borderColor = "#FFFFFF";
    document.getElementById('icon-peixe').style.color = "#32B72F";
    document.getElementById('icon-frango').style.color = "#FFFFFF";
    document.getElementById('icon-carne').style.color = "#FFFFFF";
    prato = "Peixe";

}
function escolherCoca() {
    document.getElementById('coca').style.borderColor = "#32B72F";
    document.getElementById('suco').style.borderColor = "#FFFFFF";
    document.getElementById('agua').style.borderColor = "#FFFFFF";
    document.getElementById('icon-coca').style.color = "#32B72F";
    document.getElementById('icon-suco').style.color = "#FFFFFF";
    document.getElementById('icon-agua').style.color = "#FFFFFF";
    bebida = "Coca-Cola";

}
function escolherSuco() {
    document.getElementById('suco').style.borderColor = "#32B72F";
    document.getElementById('coca').style.borderColor = "#FFFFFF";
    document.getElementById('agua').style.borderColor = "#FFFFFF";
    document.getElementById('icon-suco').style.color = "#32B72F";
    document.getElementById('icon-coca').style.color = "#FFFFFF";
    document.getElementById('icon-agua').style.color = "#FFFFFF";
    bebida = "Suco";
    

}
function escolherAgua() {
    document.getElementById('agua').style.borderColor = "#32B72F";
    document.getElementById('suco').style.borderColor = "#FFFFFF";
    document.getElementById('coca').style.borderColor = "#FFFFFF";
    document.getElementById('icon-agua').style.color = "#32B72F";
    document.getElementById('icon-suco').style.color = "#FFFFFF";
    document.getElementById('icon-coca').style.color = "#FFFFFF";
    bebida = "Agua";

}
function escolherSundae() {
    document.getElementById('sundae').style.borderColor = "#32B72F";
    document.getElementById('mousse').style.borderColor = "#FFFFFF";
    document.getElementById('pudim').style.borderColor = "#FFFFFF";
    document.getElementById('icon-sundae').style.color = "#32B72F";
    document.getElementById('icon-mousse').style.color = "#FFFFFF";
    document.getElementById('icon-pudim').style.color = "#FFFFFF";
    sobremesa = "Sundae";

}
function escolherMousse() {
    document.getElementById('mousse').style.borderColor = "#32B72F";
    document.getElementById('sundae').style.borderColor = "#FFFFFF";
    document.getElementById('pudim').style.borderColor = "#FFFFFF";
    document.getElementById('icon-mousse').style.color = "#32B72F";
    document.getElementById('icon-sundae').style.color = "#FFFFFF";
    document.getElementById('icon-pudim').style.color = "#FFFFFF";
    sobremesa = "Mousse";

}
function escolherPudim() {
    document.getElementById('pudim').style.borderColor = "#32B72F";
    document.getElementById('mousse').style.borderColor = "#FFFFFF";
    document.getElementById('sundae').style.borderColor = "#FFFFFF";
    document.getElementById('icon-pudim').style.color = "#32B72F";
    document.getElementById('icon-mousse').style.color = "#FFFFFF";
    document.getElementById('icon-sundae').style.color = "#FFFFFF";
    sobremesa = "Pudim";

}
