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

window.onbeforeunload = function () {
    window.scrollTo(0, 0);}

document.addEventListener("DOMContentLoaded", function() {
  var links = document.querySelectorAll('a[href^="#"]');

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e) {
      e.preventDefault();

      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: targetOffset,
          behavior: "smooth"
        });
      }
    });
  }
});

