var seron = 1;
var flag2 = 0;
var serMod = document.getElementsByClassName("service")[0];
function serviceOn() {
    if(seron) seron = 0;
    else seron = 1;

}

function showService (e) {
    flag2 = 1;
    showImg(e);
}

function setService(e) {
    var ul = e.previousElementSibling;
    var color = ul.querySelector('input[name = "rgb"]').value;
    var text = ul.querySelector('input[name = "describe"]').value;
    var flie = ul.querySelector('img').src;

    var box = document.getElementsByClassName('service')[0];
    var img  = box.querySelector('img');
    var content = box.querySelector('p');
    if(color !="") content.style.color = color;
    if(text != "") content.innerHTML = text;
    if(flag2) img.src = flie;

    if(seron) serMod.style.display = "block";
    else serMod.style.display = "none";

}

