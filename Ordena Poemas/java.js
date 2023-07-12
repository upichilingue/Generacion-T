let poemaDesordenado = "Los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de afuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos"
let arregloDesordenado=[]
arregloDesordenado=poemaDesordenado.split(" ")

let arregloOrdenado=[]

for(let i=0; i<14; i++){
    
    
    arregloOrdenado.push(arregloDesordenado.shift()+" "+arregloDesordenado.pop())
    
}
console.log(arregloOrdenado.join(" "))

alert("Voy a ordenar el siguiente poema: ")
alert(poemaDesordenado)
alert("Dejame pensar...")
alert(arregloOrdenado.join(" "))
alert("Fue un placer!")
