//显示字数
function showLength(e) {
    var max = e.getAttribute('maxLength');
    var old= e.nextElementSibling;
    e.parentNode.removeChild(old);
    var p = document.createElement("p");
    p.innerHTML = e.value.length +"/" + max;
    e.parentNode.appendChild(p);
}

//显示字数
function showLength(e) {
    var max = e.getAttribute('maxLength');
    var old= e.nextElementSibling;
    e.parentNode.removeChild(old);
    var p = document.createElement("p");
    p.innerHTML = e.value.length +"/" + max;
    e.parentNode.appendChild(p);
}

//得到颜色值 
function getColor(e, i) {
    var color = document.querySelectorAll("input[name ='color']")[i];
    color.style.boxShadow = e.value +" 0px 2px 10px 1px";
    var rgb = document.querySelectorAll("input[name ='rgb']")[i];
    rgb.value = color.value;
}

//清除取色器盒子阴影
function cleadnShadow(i) {
    var color = document.querySelectorAll("input[name ='color']")[i];
    color.style.boxShadow = "white 0px 0px 0px";
}



var title = document.getElementsByClassName("title-content");
for(var i = 0; i < title.length; i++){
    title[i].cont = title[i].children[0].innerHTML;
    title[i].size = title[i].style.fontSize;
    title[i].color = title[i].style.color;
}

//修改内容，字体与字体颜色
function setTitle(i) {
    var t = title[i];
    var cont = document.querySelector("input[name ='content']").value;
    var size = document.querySelector("input[name ='size']").value;
    var rgb = document.querySelector("input[name ='rgb']").value;
    if(cont === '') t.children[0].innerHTML = t.cont;
    else t.children[0].innerHTML = cont;
    if(size === '') t.style.fontSize = t.size;
    else t.style.fontSize = size + 'px';
    if(rgb === '') t.style.color = t.color;
    else t.style.color = rgb;
}

