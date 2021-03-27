//模块二
var yuxiaoSrc1 = "imgs/yuxiao.jpg";
var bg_start = "bg_start.jpn";
var flag1 = 0;

function setBacground() {
    var bg = document.querySelector(".background-content");
    var bgSrc = document.querySelector('#bg_id').src;
    if(flag1 == 0) {bgSrc = yuxiaoSrc1;}
    bg.style.background = "url(" + '"' + bgSrc + '"' + ") no-repeat ";
    bg.style.backgroundSize = "100%";
}
setBacground();

function showBacground(e) {
    flag1 = 1;
    showImg (e);
}

