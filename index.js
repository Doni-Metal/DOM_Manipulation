console.log("Hello, World!!");

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const result = document.getElementById('result');

// console.log(input1.value);

// console.log({h1,p,parrafito,pid,input,});

// console.log(h1.getAttribute('pantalla'));
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo')
// h1.classList.add('rojo')
// h1.classList.remove('verde')
// h1.classList.toggle('verde')
// h1.classList.contains('verde')

// h1.innerText = 'Titulo Patito feo';

// input.value = "456"

h1.addEventListener("mouseover", changeText)
h1.addEventListener("mouseout", backH1)

function changeText() {
  h1.innerText = "Que chingados!"
}
function backH1() {
  h1.innerText = "Titulo Patito feo"
}

const img = document.createElement('img');
img.setAttribute('src', 'https://www.spirit-of-metal.com/membre_groupe/photo/Suzuka_Nakamoto_(aka_Su-Metal)-370136_0af5.jpg')

// pid.replaceWith(img)
pid.addEventListener("mouseover", addImage)
img.addEventListener("mouseout", backPid)

function addImage(){
  pid.replaceWith(img);
}
function backPid(){
  img.replaceWith(pid);
}



btn.addEventListener('click', btnOnClick);

function btnOnClick() {
  let sum = Number(input1.value) + Number(input2.value)
  result.innerText = 'Resultado: ' + sum

  console.log(Number(input1.value) + Number(input2.value));
}