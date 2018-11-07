/*var n = prompt("Введите n");
n=Number(n);
var x = prompt("Введите x");
x=Number(x);
function fact(n){
	if(n==1||n==0)return 1;
	return n*fact(n-1);
}
//console.log(2*)
var sum =0;
for(var i=0; i<n;i++){
	if(i==0){
		sum=x;
		console.log(sum);
	}
	else sum=sum+fact((2*n))/((4**n)*(fact(n)**2)*(2*n+1))*(x**(2*n+1));
}
console.log(sum);*/
var n = prompt("Введите n");
n=Number(n);
var x = prompt("Введите x");
x=Number(x);
function fact(n){
	if(n==1||n==0)return 1;
	return n*fact(n-1);
}
//console.log(2*)
var sum =0;
for(var i=0; i<n;i++){
	if(i==0){
		sum=x;
		console.log(sum);
	}
	else sum=sum+fact((2*n))/((4**n)*(fact(n)**2)*(2*n+1))*(x**(2*n+1));
}
console.log(sum);