/*
let vetor = [];



function adicionar() {
    let num = document.getElementById('num')
    let lista = document.getElementById('lista')
    lista.innerHTML = ''
    vetor[i] = num

    // 3 4 5

    for (i in []) {
      // let item = document.createElement('option')
      // item.text = `Valor ${vetor[i]} adicionado`
      // lista.appendChild(item)
    }
}

*/

let vetor = [];

function isNumero() {
    let num = document.getElementById('numero').value;
    console.log(`Número encontrado na lista: ${num}`);
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(num, l) {
    console.log(`Número encontrado na lista: ${num}`);

    if (l.indexOf(Number(num)) != -1) {
        console.log(num)
        return true
    } else {
        return false
    }
}

function adicionar() {
    let num = document.getElementById('numero').value;
    let lista = document.getElementById('lista');
    
    if (!isNumero(num) || inLista(num, vetor)) {
        window.alert('Insira um número válido')
    } else {
        lista.innerHTML = '';
        console.log(num)
        vetor.push(Number(num))

        for (i in vetor) {
          let item = document.createElement('option')
          item.text += `Valor ${vetor[i]} adicionado`
          lista.appendChild(item)
        }
      }
}
   /* if (num.length == 0) {
        window.alert('Insira um número')
    } else {
        lista.innerHTML = '';
        vetor.push(Number(num))

        for (i in vetor) {
          let item = document.createElement('option')
          item.text += `Valor ${vetor[i]} adicionado`
          lista.appendChild(item)
        }
      }
*/

function maiormenor() {
    let maiornum = vetor[0]
    let menornum = vetor[0]
    for (let i=0; i < vetor.length; i++) {
        
        if (maiornum < vetor[i]) {
            maiornum = vetor[i]
        }
        if (menornum > vetor[i]) {
            menornum = vetor[i]
        }
    }

    return { maiornum, menornum };
}

function finalizar() {
    if (vetor.length == 0) {
        window.alert('Adicione os números antes de finalizar')
    } else {
        let res = document.getElementById('res')

        let { maiornum, menornum } = maiormenor()
        
        res.innerHTML = ''
        //vetor = vetor.sort((a, b) => a - b);
        //console.log()
        //let maiornum = vetor[vetor.length - 1]
        //let menornum = vetor[0]
        
        res.innerHTML += `O maior número é ${maiornum}. <br> O menor número é ${menornum}. <br>`
        
        let soma = 0; 
        for (let i=0; i < vetor.length; i++) {
          soma = soma + vetor[i]
        }
        res.innerHTML += `A soma de todos os elementos é ${soma}. <br> A média é ${soma/vetor.length}.`

    }
    
}

