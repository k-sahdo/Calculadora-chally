const btn = document.getElementsByClassName('btn')
const btnopera = document.getElementsByClassName('btnopera')
const temas = document.getElementsByClassName('temas')
const visor = document.getElementById('visor')
const reset = document.getElementById('reset')
const soma = document.getElementById('soma')
const subtrai = document.getElementById('subtrai')
const multiplica = document.getElementById('multiplica')
const divide = document.getElementById('divide')
const igual = document.getElementById('igual')
const acalcular = document.getElementById('acalcular')
const deleta = document.getElementById('deleta')
const ponto = document.getElementById('ponto')
var testeigual = false
var tipoCalculo = 0
var escolhetema = 1
acalcular.style.visibility = 'hidden'


for (var i = 0; i<btn.length; i++){
    btn[i].addEventListener('click',apertaBotao)
}


function apertaBotao(){
    if (visor.innerHTML.length == 12){
        visor.style.fontSize = "1.5rem"
    }
    if (visor.innerHTML.length <= 20){

        if (visor.innerHTML == '0' || testeigual == true){
            visor.innerHTML = this.innerHTML
            testeigual = false
        }else{
            visor.innerHTML = visor.innerHTML+this.innerHTML
        }

    }
    
}


// ------------ soma

soma.addEventListener('click',function(){
    calcularValor2()
    apertado(soma)
    tipoCalculo = 1
    }
)

// ---------- sub

subtrai.addEventListener('click',function(){
    calcularValor2()
    apertado(subtrai)
    tipoCalculo = 2
}
)

// --------- mult

multiplica.addEventListener('click',function(){
    calcularValor2()
    apertado(multiplica)
    tipoCalculo = 3
}
)

// ---------- div

divide.addEventListener('click',function(){
    calcularValor2()
    apertado(divide)
    tipoCalculo = 4
}
)

// -------- del
deleta.addEventListener('click',function(){
    if (visor.innerHTML.length > 1){
    visor.innerHTML = visor.innerHTML.substring(0,visor.innerHTML.length - 1)
    }else{
        visor.innerHTML = '0'
    }
})

// PONTO
ponto.addEventListener('click',function(){
    if (visor.innerHTML.length == 12){
        visor.style.fontSize = "1.5rem"
    }
    if (visor.innerHTML.indexOf('.')>0 || testeigual == true){
    }else{
        visor.innerHTML = visor.innerHTML + '.'
    }
    
})

// --------- reset

reset.addEventListener('click',function(){
    visor.innerHTML=0
    acalcular.innerHTML = 0
    acalcular.style.visibility = "hidden"
    visor.style.fontSize = "2.5rem"
    desapertado(soma)
    desapertado(subtrai)
    desapertado(multiplica)
    desapertado(divide)

})

// ------------- igual

igual.addEventListener('click',function(){
    testeigual = true
    console.log(testeigual)
    calcularValor()
})

// ---------- entr

function calcularValor(){
    var result = 0
    switch (tipoCalculo){
        case 1:
            result = Number(acalcular.innerHTML)+Number(visor.innerHTML)
            acalcular.innerHTML = 0
            acalcular.style.visibility = "hidden"
            desapertado(soma)
        break
        case 2:
            result = Number(acalcular.innerHTML)-Number(visor.innerHTML)
            acalcular.innerHTML = 0
            acalcular.style.visibility = "hidden"
            desapertado(subtrai)
        break
        case 3:
            result = Number(acalcular.innerHTML)*Number(visor.innerHTML)
            acalcular.innerHTML = 0
            acalcular.style.visibility = "hidden"
            desapertado(multiplica)
        break
        case 4:
            result = Number(acalcular.innerHTML)/Number(visor.innerHTML)
            acalcular.innerHTML = 0
            acalcular.style.visibility = "hidden"
            desapertado(divide)
        break
    }
    if(result.toString().length>=14){
        visor.style.fontSize = "1.5rem"
        visor.innerHTML = result.toPrecision(12)
        alert("oi")
    }else{
        visor.innerHTML = result
    }
}

// ---------------- calc 2

function calcularValor2(){
    visor.style.fontSize = "2.5rem"
    if (acalcular.style.visibility == 'visible'){
        calcularValor()
    }
    if (visor.innerHTML != 0){
        acalcular.innerHTML = visor.innerHTML
        visor.innerHTML = 0
        acalcular.style.visibility = "visible"
    }
    testeigual = false
    console.log(acalcular.innerHTML)

}

// ----------- press

function apertado(elem){
    fechadura.innerHTML = 'lock'
    switch (escolhetema){
        case 1:
            elem.style.backgroundColor = "#C75000"
            elem.style.color = "white"
            elem.style.boxShadow = "0 3px #9A8C98"
            elem.style.transform = "translateY(2px)"
        break
        case 2:
            elem.style.backgroundColor = "#62AB37"
            elem.style.color = "white"
            elem.style.boxShadow = "0 3px #9A8C98"
            elem.style.transform = "translateY(2px)"
        break
        case 3:
            elem.style.backgroundColor = "#2D93AD"
            elem.style.color = "white"
            elem.style.boxShadow = "0 3px #9A8C98"
            elem.style.transform = "translateY(2px)"
        break
    }
    
}

//---------- nopress

function desapertado(elem){
    fechadura.innerHTML = 'lock_open'
    switch (escolhetema){
        case 1:
            elem.style.backgroundColor = "#F2E9E4"
            elem.style.color = "black"
            elem.style.boxShadow = "0 6px #9A8C98"
            elem.style.transform = "translateY(0px)"
        break
        case 2:
            elem.style.backgroundColor = "#F5F0F6"
            elem.style.color = "black"
            elem.style.boxShadow = "0 3px #9A8C98"
            elem.style.transform = "translateY(2px)"
        break
        case 3:
            elem.style.backgroundColor = "#160F29"
            elem.style.color = "white"
            elem.style.boxShadow = "0 6px #9A8C98"
            elem.style.transform = "translateY(0px)"
        break
    }
    
}