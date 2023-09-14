var radio = document.querySelectorAll('.manual-btn');
var cont = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    proximaImg();
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1;
    }
    document.getElementById('radio'+cont).checked = true;
}



function menuShow(){
    let menuMobile = document.querySelector(".mobile-links");

    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }
    else{
        menuMobile.classList.add('open');
    }
}