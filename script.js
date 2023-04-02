let conteudoPrato = null;
let conteudoBebida = null;
let conteudSobremesa = null;


function escolherPrato(prato, buscaTitulo){
     
    const divAnterior = document.querySelector('.menu-prato .selecionado');

    if (divAnterior !== null){
        divAnterior.classList.remove('selecionado');
    }

    prato.classList.add('selecionado');
    
    const descricaoTitulo = document.querySelector(buscaTitulo+' .titulo');

    conteudoPrato = descricaoTitulo.innerHTML;
    
    verificaSelecao();
    
    
    
    
}
function escolherBebida(bebida, buscaTitulo){
    const divAnterior = document.querySelector('.menu-bebida .selecionado');

    if (divAnterior !== null){
        divAnterior.classList.remove('selecionado');
    }
   
    bebida.classList.add('selecionado');

    const descricaoTitulo = document.querySelector(buscaTitulo+' .titulo');

    conteudoBebida = descricaoTitulo.innerHTML;

    verificaSelecao();
    
   
   
}
function escolherSobremesa(sobremesa, buscaTitulo){
    const divAnterior = document.querySelector('.menu-sobremesa .selecionado');

    if (divAnterior !== null){
        divAnterior.classList.remove('selecionado');
    }

    sobremesa.classList.add('selecionado');

    const descricaoTitulo = document.querySelector(buscaTitulo+' .titulo');

    conteudSobremesa = descricaoTitulo.innerHTML;
    
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