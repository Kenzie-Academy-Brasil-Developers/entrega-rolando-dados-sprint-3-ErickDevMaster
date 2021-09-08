const dado = [1,2,3,4,5,6]
const dado1 = [1,2,3,4,5,6]
let count = [['2: ',0],['3: ',0],['4: ',0],['5: ',0],['6: ',0],['7: ',0],['8: ',0],
['9: ',0],['10: ',0],['11: ',0],['12: ',0]]
let num = 1000
let resuD = 0
let resuD1 = 0
let index = 0

const Html = document.querySelector('html')
const bodyP = document.querySelector('body')
const principal = document.createElement('div')
principal.classList.add('principal');
principal.style.display = 'flex'
Html.style.textAlign = 'center'
bodyP.style.display = 'inline-block'
bodyP.appendChild(principal)

for(let i = 0 ; i < num ; i++){
    resuD = dado[Math.floor(Math.random() * 6)]
    resuD1 = dado1[Math.floor(Math.random() * 6)]
    index = (resuD + resuD1) - 2
    count[index][1] += (1)
   
}
criarBlocos(1)
for(let i = 0 ; i < count.length ; i++){
    const body = document.querySelector('.Bloco1')
    const bloco = document.createElement('div')
    bloco.style.margin = '0 15px 0 0'
    bloco.innerText = count[i][0]+count[i][1]
    body.appendChild(bloco)
}

function atualizar(){
   document.location.reload()
}
const teste = document.querySelector('.relogar')
teste.addEventListener('click',() => atualizar())
console.log(count)

// function criarElementos (valor){
//     const body = document.querySelector('body')
//     const bloco = document.createElement('div')
//     bloco.innerText = count[i][0]+count[i][1]
//     body.appendChild(bloco)
//     return 
// }

// for(let i = 0; i < count.length; i++){
    criarBlocos(2)
    for(let i = 0; i < count.length; i++){
        const body = document.querySelector('.Bloco2')
        const minhaBarra = document.createElement('div')
        minhaBarra.style.width = `${count[i][1]}px`;
        minhaBarra.style.border = '5px solid red'
        minhaBarra.style.margin = '9.5px 0 0 0'
        minhaBarra.classList.add('Barra'+i);
        // element.style.backgroundColor = 'red'
        body.appendChild(minhaBarra)
    }
    const Barra0 = document.querySelector('.Barra0')
    Barra0.style.marginTop = '4px'
// }
function criarBlocos(n){
    const body = document.querySelector('.principal')
    const div = document.createElement('div')
    body.appendChild(div)
    div.classList.add('Bloco'+n);
   
}