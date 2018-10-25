var str=String(prompt("Введите строку"));
var n=Number(prompt("Введите количество номеров"));
var arr=new Array(n);
for (var i=0;i<n;i++){
    arr[i]=prompt((i+1)+"-й номер:");
}
function stroka(str, arr){
    var s="";
    for (var i=0;i<arr.length;i++){
        s=s+str[arr[i]-1];
    }
    console.log(s);
    return s;
}
alert(stroka(str, arr));