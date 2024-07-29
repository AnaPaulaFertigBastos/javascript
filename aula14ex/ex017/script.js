function tabuada () {
    var numero = document.getElementById('numero').value
    var lista = document.getElementById('lista')
    if (numero.length == 0) {
       window.alert('Verifique os dados e tente novamente!')
      
    } else {
        lista.innerHTML = ''
        for (var i=0; i<=10; i++) {
          numero = Number(numero)
          var mult = numero*i
          let item = document.createElement('option')
          item.text = `${numero} x ${i} = ${mult}`
          item.value = `tab${i}` 
          lista.appendChild(item)
      }
    }  

}