var h5Src = "imgs/h5_bg.jpg";

var h5_flag = 0;

function setBacground1() {
    var bg = document.querySelector(".h5");
    var bgSrc = document.querySelector('#h5_id').src;
    if(h5_flag === 1) {
        return; 
    }
    else if(h5_flag == 0) {bgSrc = h5Src;h5_flag = 1;}
    bg.style.background = "url(" + '"' + bgSrc + '"' + ") no-repeat ";
    bg.style.backgroundSize = "100%";
}
setBacground1();

function showBacground1(e) {
    h5_flag = 2; 
    showImg (e);
}
