let valores = [0, 1, 7, 2, 9]

console.log(valores)

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for (let pos in valores) {
    console.log(`Posição ${pos} tem o valor ${valores[pos]}`)
}