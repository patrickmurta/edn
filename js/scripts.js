//youtube
document.addEventListener("DOMContentLoaded",
function() {
var div, n,
v = document.getElementsByClassName("youtube-player");
for (n = 0; n < v.length; n++) {
div = document.createElement("div");
div.setAttribute("data-id", v[n].dataset.id);
div.innerHTML = labnolThumb(v[n].dataset.id);
div.onclick = labnolIframe;
v[n].appendChild(div);
}
});
function labnolThumb(id) {
var thumb = '<img id="thumb" src="https://idebrasil.com.br/ednpalhoca/imagens/hqdefault.jpg">',
play = '<div class="play"></div>';
return thumb.replace("ID", id) + play;
}
function labnolIframe() {
var iframe = document.createElement("iframe");
var embed = "https://www.youtube.com/embed/_0Cbbve2Qrk?autoplay=1";
iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
iframe.setAttribute("frameborder", "0");
iframe.setAttribute("allowfullscreen", "1");
this.parentNode.replaceChild(iframe, this);
}

//modal

var modal = document.getElementById("myModal");
var btn = document.getElementById("botao-1");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("botao-2");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal = document.getElementById("myModal");
var btn = document.getElementById("botao-3");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal = document.getElementById("myModal");
var btn = document.getElementById("botao-4");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

