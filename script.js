let conteudoPrato = null;
let conteudoBebida = null;
let conteudSobremesa = null;
let precoPrato;
let precoBebida;
let precoSobremesa;
let valorTotal;

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
    valorTotal = parseFloat(precoPrato) + parseFloat(precoBebida) + parseFloat(precoSobremesa);
    let relacaoPedido = `Olá, gostaria de fazer o pedido:
    - Prato: ${conteudoPrato}
    - Bebida: ${conteudoBebida}
    - Sobremesa: ${conteudSobremesa}
    Total: R$ ${valorTotal}`;

    alert(relacaoPedido);
    
    

    
}