/*function clock(){
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
//var k=true;
//if(k==true)
document.getElementById("clock").innerHTML=str;//инициализируем содержимое элемента, имеющего id clock значением str
//else document.getElementById("clock").innerHTML=str1;
//setTimeout("clock()",500);
}
setInterval(clock, 1000);*/
/////////////
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



/*var par = document.getElementById("par");
par.style.color = 'black';
 
 
function sec() {
    if(par.style.color == 'black') par.style.color='white'
       else par.style.color='black';
}
setInterval(sec, 2000);*/