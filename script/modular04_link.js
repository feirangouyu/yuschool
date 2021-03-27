var link = document.getElementsByClassName("link");
var tagA = link[0].getElementsByTagName("a");
var preA = '',preFlag = 0;
var fontColor = '',hoverColor = '';

//文本框获取取色板
tagA[0].parentNode.addEventListener("mousemove", function (e) {
    if(e.target.tagName === 'A') { e.target.style.color = hoverColor;preA = e.target; preFlag = 1;}
    else {
        if(preA === ''|| preFlag === 0) return;
        preA.style.color = fontColor;
        preFlag = 0;
    }
},false);


//修改子标题与链接
function modify(e) {
    var p2 = e.previousElementSibling;
    var p1 =p2.previousElementSibling;
    var btn1 = e.nextElementSibling.nextElementSibling;
    var btn2 =btn1.nextElementSibling;
    p1.setAttribute('contenteditable','true');
    p2.setAttribute('contenteditable','true');
    p1.classList.add('on');
    p2.classList.add('on');
    e.nextElementSibling.style.zIndex = -10;
    e.style.zIndex = -10;
    btn1.style.display = "block";
    btn2.style.display = "block";
}

//删除子标题
function del(e) {
    var p = e.parentNode;
    p.parentNode.removeChild(p);
}

//修改确认
function linkDetermine(e) {
    var li = e.parentNode;
    var p1 = li.getElementsByClassName("link-page")[0];
    var p2 = li.getElementsByClassName("link-site")[0];
    var p3 = li.getElementsByClassName('modify')[0];
    var p4 = li.getElementsByClassName('delete')[0];
    var cancel = e.nextElementSibling;

    p1.setAttribute('contenteditable','false');
    p2.setAttribute('contenteditable','false');
    e.style.display = "none";
    cancel.style.display = "none";
    p3.style.zIndex = 0 ;
    p4.style.zIndex = 0;

    p1.classList.remove("on");
    p2.classList.remove("on");

    p1.setAttribute ( 'data-text' , p1.textContent );
    p2.setAttribute ( 'data-text' , p2.textContent );
}

//修改取消
function linkCancel(e) {
    var li = e.parentNode;
    var p1 = li.getElementsByClassName("link-page")[0];
    var p2 = li.getElementsByClassName("link-site")[0];
    var p3 = li.getElementsByClassName('modify')[0];
    var p4 = li.getElementsByClassName('delete')[0];
    var determine = e.previousElementSibling;

    p1.setAttribute('contenteditable','false');
    p2.setAttribute('contenteditable','false');
    e.style.display = "none";
    determine.style.display = "none";
    p3.style.zIndex = 0 ;
    p4.style.zIndex = 0;

    p1.classList.remove("on");
    p2.classList.remove("on");

    p1.textContent= p1.getAttribute ('data-text');
    p2.textContent = p2.getAttribute ('data-text');

}

(function () { 
    var links = document.querySelectorAll('.set-link .links');
    for(var i = 0; i < 3; i++){
        links[i].setAttribute('check','1');
    }
})()

function checkLink(e) {
    var p = e.parentNode;
    if(p.getAttribute('check')==='0') p.setAttribute('check','1')
    else if(p.getAttribute('check')==='1')  p.setAttribute('check','0');
}

//添加链接
function addLinnk(e) {
    var data = document.createElement('li');
    data.className = "links iconfont";
    data.setAttribute('check','0');
    data.innerHTML ='<input type="checkbox" name="setLink" class="check" onclick="checkLink(this) "><p class="link-page"  data-text =" "></p>'+
    '<p class="link-site" data-text = " "></p>'+
    '<p class="modify iconfont" onclick="modify(this)">&#xe605;</p><p class="delete iconfont" onclick="del(this)">&#xe60e;</p>'+
    '<button class="link-determine" onclick="linkDetermine(this)">确定</button><button class="link-cancel" onclick="linkCancel(this)">取消</button>';
    var p = e.parentNode;
    p.parentNode.insertBefore(data,p);
    modify(data.getElementsByClassName('modify')[0]);
}


//点击确认
function setLink(e) {
    var links = document.querySelectorAll('.popup .links');
    var content = document.getElementsByClassName("link-content")[0];
    var contentA = content.querySelectorAll('a');
    var btnSet =  content.querySelector('button');
    for(var i = 0; i < contentA.length; i++){
        content.removeChild(contentA[i]);
    }

    for(var i = 0; i < links.length; i++){
        var btn = links[i].getElementsByClassName('link-determine')[0];
        if(links[i].getAttribute('check')=== '1' && btn.style.display != 'block' )
        {
            var linkA = document.createElement('a');
            var site = links[i].getElementsByClassName('link-site')[0].innerHTML;
            var page = links[i].getElementsByClassName("link-page")[0].innerHTML;
            linkA.innerHTML =  page ;
            linkA.setAttribute('href', site );
            linkA.setAttribute('target','_blank');
            content.insertBefore(linkA,btnSet);
        }
    }


    var color = link[1].querySelectorAll('input[name="rgb"]');
    fontColor = color[0].value;
    hoverColor = color[1].value
    if(fontColor === '') fontColor = color[0].placeholder;
    if(hoverColor === '') hoverColor = color[1].placeholder;
    
    for(var i = 0;i < tagA .length; i++) {
        tagA [i].style.color = fontColor;
    }
    retain(e);
    
    var setinput = document.querySelectorAll('.mod input[name="setLink"]');

    for(var i = 0; i < links.length; i++){
        if(links[i].getAttribute('check')=== '1')  setinput[i].setAttribute('checked','checked');
        else setinput[i].removeAttribute('checked');
    }

}

