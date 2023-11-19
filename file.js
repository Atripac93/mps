// se premi esce la parola ciao
const mostraData = function(){
    document.querySelector(".ok").innerHTML = "ciao"
}
// premi ed esce la data attuale
const mostrami = function(){
    document.querySelector(".si").innerHTML = new Date()
}
//selezioni qualcosa e ti stampa quello che hai scelto
const opizion = function(){
   let scrivi = document.querySelector(".selet").value
let risult = document.querySelector(".scegli").innerHTML = "Hai scelto" + "" + scrivi;
}
const sisi = function(){
    const input = document.querySelector("input")
    console.log(input.value)
    input = ""
  
}

//con questa si vede il target ovvero con cui abbiamo interagito
//c´e´ anche event in html
const carl = function(keyupEvent){
   // const camb = document.querySelector(".stri")
    console.log(keyupEvent)
}
const color = function(colorEvent){
   //const co = document.querySelector(".oro") 
   console.log(colorEvent.target)
   //const h1 = document.querySelector("h1")
   //h1.style.color = co.value

}
const mostraTarget = function(mostraTar){
    console.log(mostraTar.target)

}

const button = document.querySelector(".cicc")
button.addEventListener("change", mostraTarget)

const dammiValore = function(){
    const valor = document.querySelector(".value")
    return valor.value
    
}
const addTask = function(){
    const list = document.querySelector(".addTask")
    list.innerHTML += `<ul> ${dammiValore()} <ul>`
}

input.addEventListener("change",addTask)