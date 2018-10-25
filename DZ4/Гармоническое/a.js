var n=Number(prompt("Введите количество аргументов"));
var arr=new Array(n);
for (var i=0;i<n;i++){
	arr[i]=Number(prompt("Введите "+(i+1)+"й аргумент"));
}
var sum=0;
for (i=0;i<arr.length;i++)sum=sum+1/arr[i];
console.log(sum);
function gar (a){
	var sum=0;
	console.log(a);
	for (var i in a){
		sum=sum+1/a[i];
		console.log(a[i]);
	}
	return sum;
}
console.log(gar(arr));