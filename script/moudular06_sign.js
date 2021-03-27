var signOn = 1;
var signP = document.querySelectorAll(".sign-mode > p");
var signBox = document.querySelectorAll(".sign-content > div > div");
var signSpan = document.querySelectorAll(".sign-mode > p > span");

var signFont = document.querySelectorAll(" .set-sign input[name = 'rgb']");
var signCheck = document.querySelectorAll(".set-sign input[name = 'setSign']");


var font1 = signFont[0].placeholder;//默认
var font2 = signFont[1].placeholder;//悬浮
var font3 = signFont[3].placeholder;//选中

var span1= signFont[2].placeholder;//悬浮
var span2= signFont[4].placeholder;//选中

signP[signOn].style.color = font3;

for(var i = 0; i < signP.length; i++){
    signP[i].index = i;
    signP[i].addEventListener("click",function (e) {
        signBox[signOn].style.display = "none";
        signBox[e.target.index].style.display = "block";
        signSpan[signOn].style.display = "none";
        signSpan[e.target.index].style.display = "block";

        signSpan[e.target.index].style.backgroundColor = span2;
        signP[signOn].style.color = font1;
        e.target.style.color = font3;
        signOn = e.target.index;
    })

    signP[i].addEventListener("mouseover",function (e) {
        if(e.target.index === signOn || e.target.tagName != 'P') return ;
        e.target.style.color = font2;
        signSpan[e.target.index].style.display = "block";
        signSpan[e.target.index].style.backgroundColor = span1;
    })

    signP[i].addEventListener("mouseout",function (e) {
        if(e.target.index === signOn || e.target.tagName != 'P') return ;
        e.target.style.color = font1;
        signSpan[e.target.index].style.display = "none";
    })
}

function checkSign(e) {
    if(e.getAttribute('check') === '0') e.setAttribute('check','1');
    else e.setAttribute('check','0');
}

//设置完成
function setSign(e) {
    var signColor = document.querySelectorAll(".popup .set-sign input[name = 'color']");
    var content = document.getElementsByClassName("sign-content")[0];
    var popCheck = document.querySelectorAll(".popup input[name = 'setSign']");
    var clic = -1;

    font1 = signColor[0].value;
    font2 = signColor[1].value;
    font3 = signColor[3].value;

    span1 = signColor[2].value;
    span2 = signColor[4].value;
    for(var i = 0; i < signP.length; i++){
        signP[i].style.color = font1;
        signSpan[i].style.backgroundColor = span2;
    }
    signP[signOn].style.color = font3;

    content.style.backgroundColor = signColor[5].value;

    for(var i = 0; i < popCheck.length; i++) {
        if(popCheck[i].getAttribute('check') ==='1') {if(clic === -1) clic = i; signP[i].style.display = "block";signCheck[i].setAttribute('checked','checked');}
        else {signP[i].style.display = "none";signCheck[i].removeAttribute('checked');}
        signCheck[i].setAttribute('check',popCheck[i].getAttribute('check'));
    }


    signBox[signOn].style.display = "none";
    signBox[clic].style.display = "block";
    signSpan[signOn].style.display = "none";
    signSpan[clic].style.display = "block";

    signSpan[clic].style.backgroundColor = span2;
    signP[signOn].style.color = font1;
    signP[clic].style.color = font3;
    signOn = clic;
}




