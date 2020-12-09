function resposta(){
    let resposta = document.getElementById('resposta')
    if(resposta.value === ""){
      document.getElementById('resposta').value = 'Digite Sim ou Não'
    }
    else if(resposta.value === "sim" || resposta.value === "Sim"){
        window.open('https://renatoabatista.github.io/', '_blank')
    }
}