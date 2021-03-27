var butSet = document.getElementsByClassName("button-set");
var mod = document.getElementsByClassName("mod");
var pop = document.getElementById("popupBox");
var popBox = pop.parentNode;

var on = 0; //0为未弹出状态，1未弹出状态
var target = 0;


//为悬浮设置按钮绑定点击事件监听器----完成功能1与功能2
for(var i = 0; i < butSet.length; i++){
    butSet[i].index = i;
    butSet[i].addEventListener("click",function(e){
        if(target != e.target.index) buttonSet(e.target);
        if(!on) popMove(target,e.target.index);
    });
}

//功能1.右侧窗口内容填入
function buttonSet (e) {
    pop.innerHTML = mod[e.index].innerHTML; 
    target = e.index;
}

buttonSet (butSet[0]);

//功能2.右侧窗口弹出与关闭函数
function popMove () {
    var speed = (1915 - 1595) / 10;
    if(on) {
        on = 0;
        var left = 1595;
        var p = setInterval(function () {
            left += speed;
            if(left > 1915) { left = 1915;clearInterval(p);}
            popBox.style.marginLeft = left + "px";
            },10);
    }
    else {
        on = 1;
        var left = 1915;
        var p = setInterval(function () {
        left -= speed;
        if(left < 1595) { left = 1595;clearInterval(p);}
        popBox.style.marginLeft = left + "px";
        },10);
    }
}


//功能3.数据保留
function retain(e){
    var set = document.getElementsByClassName( e.parentNode.className.split(" ")[1]);
    
    var setPage = set[1].parentNode;
    var popPage = set[0].parentNode;
    console.log(setPage,popPage)
    setPage.innerHTML = popPage.innerHTML;
}


//功能4.滑入滑出
var body = document.body;
body.addEventListener("click", function (e) {
    if(e.target.classList.contains('popup-btu')) return;
    if(on === 1 && (e.target.className === 'content' || e.target.classList.contains('background-content') ||  e.target.className === 'header') ) popMove ();
})