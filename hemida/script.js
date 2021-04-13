function topnavFunction() {
  document.getElementById("top-lista-id").classList.toggle("show2");
}

function batarnaFunction() {
  document.getElementById("båtarnainnehållid").classList.toggle("show");
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("logga").style.width = "5%";
    document.getElementById("sidhuvud").style.top = "0%";
    document.getElementById("sidhuvud").style.paddingTop = "10px";

    document.getElementsByClassName("top-lista-id a").style.fontSize = "100px";
  } else {
    document.getElementById("logga").style.width = "10%";
    document.getElementById("sidhuvud").style.background = "";
    document.getElementById("sidhuvud").style.top = "";
    document.getElementById("sidhuvud").style.paddingTop = "";
    
    document.getElementsByClassName("top-lista-text a").style.fontSize = "";
  }
  if (window.innerWidth>1500) {
    document.getElementById("sidhuvud").style.backgroundColor = "#0000a0";
  } else{
    document.getElementById("sidhuvud").style.backgroundColor = "";
  }
}

function backtotopFunction() {
  window.scrollTo(0, 0);
}