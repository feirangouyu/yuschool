// 模块一
var yuxiaoSrc = "imgs/logo.png";
var flag = 1;

//读取logo图片的路径
function setImg () {
    var logo = document.querySelector(".logo-content > img");
    if(flag) {logo.src = yuxiaoSrc; return;}
    var logoSrc = document.querySelector('#img_id');
    logo.src = logoSrc.src;
};
setImg();


function showImg (e) {
    var file =  e.files[0];
    var re = new FileReader();
    re.readAsDataURL(file);
    re.onload = function(re){
        var id = e.id.split("_")[0]+'_id';
        var imgurl = document.getElementById(id);
        imgurl.src = re.target.result;
    }
}

function showLogo () {
    flag = 0;
    var logoBox = document.getElementsByClassName("upload-box")[0];
    logoBox.style.display = "block";
}

function offLogo () {
    flag = 1;
    var logoBox = document.getElementsByClassName("upload-box")[0];
    logoBox.style.display = "none";
}
