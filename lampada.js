const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp')
const reparar = document.getElementById('consertar');

function isLampBroken  ()  {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn() {
    if(!isLampBroken() ){
    lamp.src =  './img/ligada.jpg';}
}

function lampOff ()  {
    if(!isLampBroken() ){
    lamp.src = './img/desligada.jpg';}
}

function quebrar () {
    lamp.src = './img/quebrada.jpg';
}

function consertar () {
    if(isLampBroken()){
        lamp.src = './img/desligada.jpg';
    }
}




turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', quebrar);
reparar.addEventListener('click', consertar);