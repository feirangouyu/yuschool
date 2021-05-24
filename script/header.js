var web = document.getElementsByClassName("web")[0];
var h5 = document.getElementsByClassName("h5")[0];
var webp = document.getElementById("WEB");
var h5p = document.getElementById("H5");

var webd = webp.nextElementSibling;
var h5d = h5p.nextElementSibling;  

function page(e) {
    if(e){
        web.style.display = "none";
        h5.style.display = "block";

        h5p.style.color = '#2fa2fe';
        webp.style.color = '#555f69';
        
        webd.style.display = "none";
        h5d.style.display = "block";
    }
    else {
        h5.style.display = "none";
        web.style.display = "block";
       
        webp.style.color = '#2fa2fe';
        h5p.style.color = '#555f69';

        h5d.style.display = "none";
        webd.style.display = "block";
    }
}

var h5page = document.querySelectorAll('.h5 > div');
function h5Page(e) {
    if(e){
        h5page[1].style.display = "none";
        h5page[0].style.display = "block";
    }
    else {
        h5page[0].style.display = "none";
        h5page[1].style.display = "block";
    }
}

var cont = document.getElementsByClassName('cont');

var popBtu = document.getElementsByClassName('popup-btu')[0];
var contDis = ['block','none'];
var contBor = ['#2fa2fe','#2fa1fe00'];
var popDis = ['block','none'];
var h5flag = 0;
for(var i = 0; i < cont.length; i++) {

    cont[i].addEventListener('mouseover', function (e) {
        var t = e.target;
        while( !t.classList.contains('cont')) {
            t = t.parentNode;
        }
        var contBtn = t.getElementsByClassName('button-set')[0];
        contBtn.style.display = contDis[h5flag];
        t.style.borderColor = contBor[h5flag];
        
    });

    cont[i].addEventListener('mouseout', function (e) {
        var t = e.target;
        while( !t.classList.contains('cont')) {
            t = t.parentNode;
        }
        var contBtn = t.getElementsByClassName('button-set')[0];
        contBtn.style.display = contDis[1];
        t.style.borderColor = contBor[1];

    });
}
    

var contentBox = document.getElementsByClassName('content')[0];
var bgBox = document.getElementsByClassName('background-content')[0];
var signBox1 = document.getElementsByClassName('sign-content')[0];
var h5Box = document.getElementsByClassName('h5')[0];
var widthBox = ['1720px','1920px'];
var heightBox = ['960px','1080px'];
var marginBox = ['20px 95px','5px 0px'];
var leftBox = ['700px','740px'];
var margLeftBox = ['650px','750px'];

function preview(e) {
    if(!h5flag) {
        h5flag = 1;
        e.textContent = '取消预览';
    }
    else {
        h5flag = 0;
        e.textContent = '预览';
    }
    popBtu.style.display = popDis[h5flag];
    contentBox.style.width = widthBox[h5flag];
    contentBox.style.margin = marginBox[h5flag];
    bgBox.style.width = widthBox[h5flag];
    bgBox.style.height = heightBox[h5flag];
    signBox1.style.left = leftBox[h5flag];
    h5Box.style.marginLeft = margLeftBox[h5flag];
   
}

function preserve(e) {
    if(!h5flag) preview(e.previousElementSibling);
    e.previousElementSibling.style.display = 'none';
    e.style.display = 'none';
}