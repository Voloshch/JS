var txt=document.getElementById("txt"),txt1=document.getElementById("txt1");
var flag=0, flag1=0;
document.addEventListener('contextmenu', function(e){
    event.preventDefault();
    var menu=document.createElement("div");
    menu.id = 'menu';
    menu.style.width="150px";
    menu.style.heigth="60px";
    var but1=document.createElement("input"), but2=document.createElement("input"),but3=document.createElement("input"),but4=document.createElement("input");
    but1.id="but1",but2.id="but2",but3.id="but3",but4.id="but4";
    but1.style.width="150px";
    but1.style.heigth="15px";
    but1.value="Изменить цвет текста";
    but1.type="button";
    but2.style.width="150px";
    but2.style.heigth="15px";
    but2.value="Добавить блок текста";
    but2.type="button";
    but3.style.width="150px";
    but3.style.heigth="15px";
    but3.value="Удалить блок текста";
    but3.type="button";
    but4.style.width="150px";
    but4.style.heigth="15px";
    but4.value="Изменить позицию";
    but4.type="button";
    menu.appendChild(but1);
    menu.appendChild(but2);
    menu.appendChild(but3);
    menu.appendChild(but4);
    var x,y;
    if(Number(e.x)>Number(1200))x=String(e.x-159)+"px";
    else  x=String(e.x-9)+"px";
    y=String(e.y-59)+"px";
    document.body.appendChild(menu);
    menu.style.marginTop=y;
    menu.style.marginLeft=x;
    document.addEventListener('click', function () {
    menu.style.display = 'none';
    if(document.getElementById('menu')){console.log("re");document.body.removeChild(menu)}
});
    document.addEventListener('contextmenu', function () {
    menu.style.display = 'none';
    if(document.getElementById('menu')){console.log("re");document.body.removeChild(menu)}
});
    but1.addEventListener('click', function(){
        if(flag==0){txt.style.color="red";flag=1;console.log(flag);}
        else {txt.style.color="black";flag=0;console.log(flag);}
        if(document.getElementById('menu')){
            console.log("re");
            document.body.removeChild(menu)}
    })
    but2.addEventListener('click', function(){
        txt.innerHTML=txt.innerHTML+"HELLO!";
        if(document.getElementById('menu')){console.log("re");document.body.removeChild(menu)}
    })
    but3.addEventListener('click', function(){
        if(txt.innerHTML!="HELLO!"){
        txt.innerHTML=txt.innerHTML.replace("HELLO!", "");
    }
    else alert("Остался один блок текста");
        if(document.getElementById('menu')){console.log("re");document.body.removeChild(menu)}
    })
    but4.addEventListener('click', function(){
        if(flag1==0){txt.style.textAlign="center";flag1=1;}
        else {txt.style.textAlign="left";flag1=0;}
        if(document.getElementById('menu')){
            console.log("re");
            document.body.removeChild(menu)}
    })
});


