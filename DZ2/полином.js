var x=prompt("Введите х");
x=Number(x);
var n=prompt("Введите степень полинома");
n=Number(n);
var a=new Array(n);
for(var i=0; i<n;i++){
	a[i]=Number(prompt("Введите "+(i+1)+" член"));
}
var sum=0;
for(i=0; i<n;i++){
	sum=sum+a[n-i-1]*(x**i);
}
alert(sum);