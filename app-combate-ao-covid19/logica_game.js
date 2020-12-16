// área de visualização do jogo
    var alturaGame = 0;
    var larguraGame = 0;
    var vidas = 1;
    var tempo = 10;
    var velocidade = 1300;

var nivel = window.location.search
nivel = (nivel.replace('?', ''))

if (nivel === 'normal'){
    var tempo = 30;
    var velocidade = 1300;
 
}else if (nivel === 'dificil'){
    var tempo = 40;
    var velocidade = 900;
 
   
}
else if (nivel === 'muito_dificil'){
    var tempo = 60;
    var velocidade = 750;
    
}

// Captura o tamanho da tela
function ajustaTamanhoTela(){
    alturaGame = window.innerHeight
    larguraGame = window.innerWidth
    
}
ajustaTamanhoTela()

var cronometro = setInterval(function(){
    tempo = tempo - 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaInimigos)
        window.location.href="vitoria.html"
    }else{
        document.getElementById('cronometro').innerHTML = tempo 
    }
    
} ,1000)

// lógica mostrar na tela o vírus
function PosicaoRandom(){

    // verifica se já existe inimigo na tela
    if(document.getElementById('inimigo')){
        document.getElementById('inimigo').remove()

        if(vidas > 3){
             window.location.href="game_over.html"
        }else{

        document.getElementById('v' + vidas).src="img/coracao_vazio.png"
        vidas++
        }
    }
    
    var pX = Math.floor(Math.random() * larguraGame) - 90   // - 90 limite de segurança X
    var pY = Math.floor(Math.random() * alturaGame) - 90 // - 90 limite de segurança X

    // ajuste de bug para valores negativos gerados 
    if (pX < 0){
    pX = 0 
    }
    else{
        pX = pX
    }
    // ajuste de bug para valores negativos gerados 
    if (pY < 0){
        pY = 0 
    }
    else{
        pY = pY
    }
    
    // criação do elemento - inimigo na tela
    var inimigo = document.createElement('img')
    inimigo.src = 'img/covid.png'

    // posiciona o inimigo na tela  

    inimigo.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    inimigo.style.left = pX + 'px'
    inimigo.style.top = pY + 'px'
    inimigo.style.position = 'absolute'
    document.body.appendChild(inimigo)
    inimigo.id = 'inimigo'
    
    //função click para remover inimigo da tela
    inimigo.onclick = function(){
        inimigo.remove()
    }
   
}
// função para gerar o tamanho do inimigo
function tamanhoAleatorio(){
    var classe = Math.floor((Math.random() * 3))
    switch(classe){
        case 0:
            return 'covid'
        case 1:
            return 'covid1'
        case 2:
            return 'covid2'           
    }
  
}

//função para rotacionar o inimigo na tela
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch (classe){
        case 0:
            return 'lado1'
        case 1:
            return 'lado2'    
    }
} 

function iniciarJogo(){
    var nivel = document.getElementById('dificuldade').value

    if(nivel === ""){
        alert('Selecione um nível')
        return false
    }
    window.location.href = "jogo.html?" + nivel
}