var k=true;
const time=setInterval(function(){
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
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