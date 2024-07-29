
function contar() {
    let inicio = document.getElementById('inicio').value;
    let fim = document.getElementById('fim').value;
    let passo = document.getElementById('passo').value;
    let res = document.querySelector('div#res')

    if ((inicio.length == 0) || (fim.length == 0) || (passo.length == 0)) {
      res.innerHTML = 'Impossível contar'  
      window.alert('Verifique os dados e tente novamente!')  
    }
    else {
      res.innerHTML = 'Contando: <br>'
      inicio = Number(inicio);
      fim = Number(fim);
      passo = Number(passo);
      if (passo<= 0) {
        window.alert('Passo inválido. Considerando PASSO 1')
        passo = 1
      }
      if (inicio < fim) {
        //Contagem crescente
        for (let seq = inicio; seq < fim; seq = seq + passo) {
          res.innerHTML += `${seq} \u{1F449} ` 
        }
      } else {
        for(let seq = inicio; seq > fim; seq = seq - passo) {
          res.innerHTML += `${seq} \u{1F449} `
        }
      }
      res.innerHTML += `\u{1F3C1}` 
    
  }
}
