const text = document.querySelector('.text');
const prog = "Мы Honey Trap! Добро пожаловать!";
let j = 1;

setInterval(writeText, 50);

function writeText(){
    text.innerText = prog.slice(0, j)

    j++;

    if(j > prog.length){
        j =1;
    }

}

const background = document.querySelector('body');
const backgroundBtn = document.querySelector('.btn-change');
backgroundBtn.onclick = function(){
    background.classList.toggle('body-change')
}

let i = 0,
promoText = 'Используйте промокод iNt#4UtT, чтобы получить скидку 5%!',
speed = 100;
const btnClick = document.querySelector('.btn-promo');
function typeText(){
    if (i < promoText.length) {
        document.querySelector('.promocode').innerHTML += promoText.charAt(i);
        i++;
        setTimeout(typeText, speed)
    }
}
btnClick.addEventListener('click', typeText);

timeInfo();
function timeInfo() {
    setTimeout(one, 1000);
    setTimeout(two, 2000);
    setTimeout(three, 3000);
    setTimeout(four, 4000);
    setTimeout(five, 5000);
}
function one(){
    document.querySelector(".slogan").innerHTML = "Напишите промокод";
}
function two(){
    document.querySelector(".slogan").innerHTML = "в комментарии";
}
function three(){
    document.querySelector(".slogan").innerHTML = "к заказу";
}
function four(){
    document.querySelector(".slogan").innerHTML = "и получите скидку";
}
function five(){
    document.querySelector(".slogan").innerHTML = "5%";
}

let BtnCalc = document.querySelector('.btnCalc');
BtnCalc.onclick = myFunction;
function myFunction(){
    let x = document.getElementById("myNumber").value,
    select = document.getElementById('select_'),
    value = select.options[select.selectedIndex].value;
    document.querySelector(".result").innerHTML = x * value;
}

const img = document.querySelector('.like');
img.onclick = function(){
    let mySrc = img.getAttribute('src');
    if (mySrc === '../img/like.png'){
        img.setAttribute('src', '../img/dislike.png');
    }else {
        img.setAttribute('src', '../img/like.png');
    }
    alert('Вам понравилась данная позиция!');
}