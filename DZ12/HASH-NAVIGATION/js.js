const Routes={
  "#out":{
    path:"out.html",
    handler: function(){
      var text = document.getElementById("txt"),span=document.getElementById("span");
      txt.addEventListener('keyup',function(){
        span.innerHTML=txt.value;
        span.style.marginLeft="50px";
        span.style.marginTop="20px";
        span.style.position="absolute";
      })
    }
  },
  "#color":{
    path: "color.html",
    handler: function(){
      var text = document.getElementById("text"),red = document.getElementById("red"),
      yellow = document.getElementById("yellow"),blue = document.getElementById("blue"),
      black = document.getElementById("black"),green = document.getElementById("green");
      red.addEventListener('click',function(){
        text.style.color="red";
      })
      yellow.addEventListener('click',function(){
        text.style.color="yellow";
      })
      black.addEventListener('click',function(){
        text.style.color="black";
      })
      green.addEventListener('click',function(){
        text.style.color="green";
      })
      blue.addEventListener('click',function(){
        text.style.color="blue";
      })
    }
  },
  "#konv":{
    path: "konv.html",
    handler: function(){
var t1=document.getElementById("text1"),
t2=document.getElementById('text2'),
v1=document.getElementById('val1'),
v2=document.getElementById('val2');
t1.addEventListener('keyup', function(){
  switch(String(v1.value)){
    case 'Dollar':switch(String(v2.value)){
      case 'Dollar':t2.value=Number(t1.value);break;
      case 'Euro':t2.value=Number(t1.value)*0.88;break;
      case 'Rrub':t2.value=Number(t1.value)*66.1;break;
      case 'Brub':t2.value=Number(t1.value)*2.12;break;
      case 'Gr':t2.value=Number(t1.value)*28.02;break;
    }break;
    case 'Euro':switch(v2.value){
      case 'Dollar':t2.value=Number(t1.value)*1.14;break;
      case 'Euro':t2.value=Number(t1.value);break;
      case 'Rrub':t2.value=Number(t1.value)*75.42;break;
      case 'Brub':t2.value=Number(t1.value)*2.42;break;
      case 'Gr':t2.value=Number(t1.value)*31.85;break;
    }break;
    case 'Rrub':switch(v2.value){
      case 'Dollar':t2.value=Number(t1.value)*0.015;break;
      case 'Euro':t2.value=Number(t1.value)*0.013;break;
      case 'Rrub':t2.value=Number(t1.value);break;
      case 'Brub':t2.value=Number(t1.value)*0.032;break;
      case 'Gr':t2.value=Number(t1.value)*0.43;break;
    }break;
    case 'Brub':switch(v2.value){
      case 'Dollar':t2.value=Number(t1.value)*0.47;break;
      case 'Euro':t2.value=Number(t1.value)*0.41;break;
      case 'Rrub':t2.value=Number(t1.value)*31.12;break;
      case 'Brub':t2.value=Number(t1.value);break;
      case 'Gr':t2.value=Number(t1.value)*213.19;break;
    }break;
    case 'Gr':switch(v2.value){
      case 'Dollar':t2.value=Number(t1.value)*0.036;break;
      case 'Euro':t2.value=Number(t1.value)*0.031;break;
      case 'Rrub':t2.value=Number(t1.value)*2.33;break;
      case 'Brub':t2.value=Number(t1.value)*0.076;break;
      case 'Gr':t2.value=Number(t1.value)*28.02;break;
    }break;
  }
  //console.log(t1.value);
});
    }
  },
    "#countries":{
    path:"countries.html",
    handler: function(){
const xhr=new XMLHttpRequest();
xhr.open("GET", 'data2.csv', true);
var s="", arr1=[], g=0,ar=0, arr2=[], countries=[];
xhr.onload=function(){
  s=this.responseText;
  var names=s.slice(0,s.indexOf("\n"));
  var objects=s.slice(s.indexOf("\n"),s.length);
  arr1=names.split("; ");
  arr2=objects.replace(/\n/gm, ", ").split(", ");
  arr2.splice(0,1);
  var flag=0,k=0;
  for(var i=0;i<arr2.length;i++){
    flag++;
    if(flag==1)countries.push({
      country:"",
      flag:"",
      code:"",
      population:""

    })
    switch(flag%4){
      case 1:countries[k].country=arr2[i];break;
      case 2:countries[k].flag=arr2[i];break;
      case 3:countries[k].code=arr2[i];break;
      case 0:countries[k].population=arr2[i];break;

    }
    if(flag==4){flag=0;k++;}
  }
  var r, c;
  var el=document.getElementById("tab");
  for(var i=0;i<countries.length;i++){
    r=el.insertRow(i);
    for(var j=0;j<4;j++){
      if(j==0){
        c=r.appendChild(document.createElement("td"));
      }
      else{
        c=r.insertCell(j);
      }
      switch(j){
      case 0:c.innerHTML=countries[i].country;break;
      case 1:var pic = document.createElement("IMG");pic.src = countries[i].flag;c.appendChild(pic);;break;
      case 2:c.innerHTML=countries[i].code;break;
      case 3:c.innerHTML=countries[i].population;break;

    }
    }
  }
};
xhr.send(null);

    }
  },
    "#clock":{
    path:"clock.html",
    handler: function(){
var k=true;
const time=setInterval(function(){
var date = new Date();
var date1=new Date(date.getFullYear(), date.getMonth(), (date.getDate()+1), 0, 0, 0, 0);
var hours=Math.floor((date1-date)/3600000);
var minutes=Math.floor((((date1-date)/60000)-hours*60));
var seconds=Math.floor((date1-date)/1000-hours*3600-minutes*60);
if(hours<10)hours="0"+hours;
if(minutes<10)minutes="0"+minutes;
if(seconds<10)seconds="0"+seconds;
var str=hours+":"+minutes+":"+seconds;
//console.log(typeof(str));
var str1=hours+" "+minutes+" "+seconds;
if(k==true){
document.getElementById("clock").innerHTML=str;
k=false;
}
else {document.getElementById("clock").innerHTML=str1;
k=true;}
},500);
    }
  }
} 
function refreshContainer(){
  const hash=location.hash;
  if(hash in Routes){
    const path=Routes[hash].path;
    const xhr=new XMLHttpRequest();
    xhr.open('GET',path,true);
    xhr.onload=function(){
      onPageLoaded(this.responseText,hash);
    }
    xhr.send(null);
  }
}
function onPageLoaded(text,hash){
  const div = document.getElementById('container');
  div.innerHTML = text;
  if(typeof Routes[hash].handler=="function"){  //проверяем есть ли в пути такие элементы
    Routes[hash].handler();
  }
}
window.onhashchange=refreshContainer;
refreshContainer();