const xhr=new XMLHttpRequest();
xhr.open("GET", 'data2.txt', true);
var s="", arr=[], g=0,ar=0;
xhr.onload=function(){
	s=this.responseText;
	console.log(s);
	arr=s.split(' ');
	arr.splice(0,1);
	arr.splice(arr.length-1,1);
	console.log(arr);
	for(var i=0;i<arr.length;i++){
		g=g+1/Number(arr[i]);
		ar=ar+Number(arr[i]);
		console.log(g);
	}
	console.log(ar);
	console.log(g);
	alert("Среднее гармоническое содержимого файла равно "+(arr.length/g)+"\nСреднее арифметическое содержимого файла равно "+(ar/arr.length));
	
};
xhr.send(null);
