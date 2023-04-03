let conteudoPrato = null;
let conteudoBebida = null;
let conteudSobremesa = null;
let precoPrato;
let precoBebida;
let precoSobremesa;
let valorTotal;
let relacaoPedido;

function escolherPrato(prato, buscaTitulo){
     
    const divAnterior = document.querySelector('.menu-prato .selecionado');

    if (divAnterior !== null){
        divAnterior.classList.remove('selecionado');
    }

    prato.classList.add('selecionado');
    
    const descricaoTitulo = document.querySelector(buscaTitulo+' .titulo');
    const valorPreco = document.querySelector(buscaTitulo+' .preco');

    conteudoPrato = descricaoTitulo.innerHTML;
    precoPrato = valorPreco.innerHTML;
    precoPrato = precoPrato.replace('R$ ','');
    precoPrato = precoPrato.replace(',','.');
    
    
    verificaSelecao();
    
    
    
    
}
function escolherBebida(bebida, buscaTitulo){
    const divAnterior = document.querySelector('.menu-bebida .selecionado');

    if (divAnterior !== null){
        divAnterior.classList.remove('selecionado');
    }
   
    bebida.classList.add('selecionado');

    const descricaoTitulo = document.querySelector(buscaTitulo+' .titulo');
    const valorPreco = document.querySelector(buscaTitulo+' .preco');

    conteudoBebida = descricaoTitulo.innerHTML;
    precoBebida = valorPreco.innerHTML;
    precoBebida = precoBebida.replace('R$ ','');
    precoBebida = precoBebida.replace(',','.');

    verificaSelecao();
    
   
   
}
function escolherSobremesa(sobremesa, buscaTitulo){
    const divAnterior = document.querySelector('.menu-sobremesa .selecionado');

    if (divAnterior !== null){
        divAnterior.classList.remove('selecionado');
    }

    sobremesa.classList.add('selecionado');

    const descricaoTitulo = document.querySelector(buscaTitulo+' .titulo');
    const valorPreco = document.querySelector(buscaTitulo+' .preco');

    conteudSobremesa = descricaoTitulo.innerHTML;
    precoSobremesa = valorPreco.innerHTML;
    precoSobremesa = precoSobremesa.replace('R$ ','');
    precoSobremesa = precoSobremesa.replace(',','.');
    
    verificaSelecao();
    
    
}

function verificaSelecao(){
    if( conteudoPrato !== null){
        if(conteudoBebida !== null){
            if(conteudSobremesa !== null){
                const divFinalizar = document.querySelector('.finalizar');
                divFinalizar.classList.add('escondido');

                const divFechar = document.querySelector('.fechar-pedido');
                divFechar.classList.remove('escondido');

            }
        }
    }
    
}

function fecharPedido(){

    const nomeCliente = prompt("informe seu nome: ");
    const endereco = prompt("Informe seu endereço: ");

    valorTotal = parseFloat(precoPrato) + parseFloat(precoBebida) + parseFloat(precoSobremesa);
    relacaoPedido = `Olá, gostaria de fazer o pedido:
    - Prato: ${conteudoPrato}
    - Bebida: ${conteudoBebida}
    - Sobremesa: ${conteudSobremesa}
    Total: R$ ${valorTotal.toFixed(2)}
    
    Nome: ${nomeCliente}
    Endereço: ${endereco}`;
    
    const novaTela = document.querySelector('.container-final');
    novaTela.classList.remove('escondido');

    const nomePrato = document.querySelector('.prato .nome');
    const precoEscolhido = document.querySelector('.prato .preco-final');
    nomePrato.innerHTML = conteudoPrato;
    precoPrato = precoPrato.replace('.',',');
    precoEscolhido.innerHTML = precoPrato;
    
    const nomeBebida = document.querySelector('.bebida .nome');
    const bebidaEscolhida = document.querySelector('.bebida .preco-final');
    nomeBebida.innerHTML = conteudoBebida;
    precoBebida = precoBebida.replace('.',',');
    bebidaEscolhida.innerHTML = precoBebida;

    const nomeSobremesa = document.querySelector('.sobremesa .nome');
    const sobremesaEscolhida = document.querySelector('.sobremesa .preco-final');
    nomeSobremesa.innerHTML = conteudSobremesa;
    precoSobremesa = precoSobremesa.replace('.',',');
    sobremesaEscolhida.innerHTML = precoSobremesa;

    const valorFinal = document.querySelector('.total .preco-total');
    valorFinal.innerHTML = ('R$ '+valorTotal.toFixed(2));
}

function mandarParaWhats(){
    
    const msgWhats = encodeURIComponent(relacaoPedido);
    window.open(`https://wa.me/5561985681998?text=${msgWhats}`);
}
function cancelar(){
    const novaTela = document.querySelector('.container-final');
    novaTela.classList.add('escondido');
}