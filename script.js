let prato;
let bebida;
let sobremesa;

function escolherCarne() {
    document.getElementById('carne').style.borderColor = "#32B72F";
    document.getElementById('frango').style.borderColor = "#FFFFFF";
    document.getElementById('peixe').style.borderColor = "#FFFFFF";
    prato = "Carne";

}
function escolherFrango() {
    document.getElementById('frango').style.borderColor = "#32B72F";
    document.getElementById('carne').style.borderColor = "#FFFFFF";
    document.getElementById('peixe').style.borderColor = "#FFFFFF";
    prato = "Frango";

}
function escolherPeixe() {
    document.getElementById('peixe').style.borderColor = "#32B72F";
    document.getElementById('frango').style.borderColor = "#FFFFFF";
    document.getElementById('carne').style.borderColor = "#FFFFFF";
    prato = "Peixe";

}
function escolherCoca() {
    document.getElementById('coca').style.borderColor = "#32B72F";
    document.getElementById('suco').style.borderColor = "#FFFFFF";
    document.getElementById('agua').style.borderColor = "#FFFFFF";
    bebida = "Coca-Cola";

}
function escolherSuco() {
    document.getElementById('suco').style.borderColor = "#32B72F";
    document.getElementById('coca').style.borderColor = "#FFFFFF";
    document.getElementById('agua').style.borderColor = "#FFFFFF";
    bebida = "Suco";
    

}
function escolherAgua() {
    document.getElementById('agua').style.borderColor = "#32B72F";
    document.getElementById('suco').style.borderColor = "#FFFFFF";
    document.getElementById('coca').style.borderColor = "#FFFFFF";
    bebida = "Agua";

}
function escolherSundae() {
    document.getElementById('sundae').style.borderColor = "#32B72F";
    document.getElementById('mousse').style.borderColor = "#FFFFFF";
    document.getElementById('pudim').style.borderColor = "#FFFFFF";
    sobremesa = "Sundae";

}
function escolherMousse() {
    document.getElementById('mousse').style.borderColor = "#32B72F";
    document.getElementById('sundae').style.borderColor = "#FFFFFF";
    document.getElementById('pudim').style.borderColor = "#FFFFFF";
    sobremesa = "Mousse";

}
function escolherPudim() {
    document.getElementById('pudim').style.borderColor = "#32B72F";
    document.getElementById('mousse').style.borderColor = "#FFFFFF";
    document.getElementById('sundae').style.borderColor = "#FFFFFF";
    sobremesa = "Pudim";

}

