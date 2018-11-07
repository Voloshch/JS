var str="  sdfg@gmail.com, fg,    f,agfhfjfj@gmail.com, agfhfjfj@dfg, cv@mai,agfhfjfj@mail.ru,agfhfjfj@mail.ru,asd@mail.ru";
var newString=str.replace(/\s/g, '');
var arr=newString.split(',');
console.log("Строка, разбитая на массив:")
for (var i in arr)console.log(arr[i]);
var arr1=[];
const reg=/[A-Za-z0-9]{1,64}@[A-Za-z0-9]+/;
for (var i in arr){
	if(arr[i].match(reg)!=null)arr1.push(arr[i]);
}
console.log("////////////////////////////////");
console.log("Массив только с е-mail");
for (i in arr1)console.log(arr1[i]);
var newString1, arr2=[];
for (i in arr1){
			arr2.push({
				x:String(arr1[i]).substr(0,String(arr1[i].indexOf('@'))),
				y:String(arr1[i]).substr(String(arr1[i].indexOf('@')),String(arr1[i]).length)
			})
}
console.log("arr2[i]");
for (i in arr2)console.log(arr2[i]);
var arr3=arr2.slice(),arr4=[];
var f=0;
for (i=0;i<arr3.length; i++){
	f=1;
	for (j=i+1;j<arr3.length; j++){
		if (arr3[i].y==arr3[j].y){
			f++;
			arr3.splice(j, 1);  
			j--;
		}
	}
	arr4.push({
				z:arr3[i].y,
				k:f
			})
}
var arr5=[];
for (i in arr4){
	arr5[i]=arr4[i].k;
}
arr5.sort(function(a,b){
    return b-a;
});
for (i=0;i<arr5.length; i++){
	f=1;
	for (j=i+1;j<arr5.length; j++){
		if (arr5[i]==arr5[j]){
			arr5.splice(j, 1);  
			j--;
		}
	}
}
console.log("arr5[i]");	
for (i=0;i<arr5.length;i++){
console.log(arr5[i]);
}
console.log("arr4[i]");
for (i in arr4){
	console.log(arr4[i]);
}
console.log("Отсортированный список почтовых операторов по частоте их встречаемости по возрастанию")
for (i=0;i<arr5.length;i++){
	for ( var j=0;j<arr4.length;j++){
	if(arr5[i]==arr4[j].k)
	{
		console.log(arr4[j].z)
		console.log("Количество адресов этого оператора равно:"+arr4[j].k)
	}
}
}
var sum, fll, max, min,pl_max, pl_min;
for (i in arr4){
	sum=0,fll=0,max=0, min=100, pl_max=0,pl_min=0;
	for (j in arr2){
		if(arr4[i].z==arr2[j].y){
			sum=sum+arr2[j].x.length+arr2[j].y.length;
			fll++;
			if((arr2[j].x.length+arr2[j].y.length)>max){
				max=arr2[j].x.length+arr2[j].y.length;
				pl_max=j;
			}
			if((arr2[j].x.length+arr2[j].y.length)<min){
				min=arr2[j].x.length+arr2[j].y.length;
				pl_min=j;
			}
		}
	}
	//console.log("Длина="+sum);
	//console.log(fll);	
	console.log("/////////////////////////////////////////////////////////////");
	console.log("Средняя длина адресов оператора "+arr2[pl_max].y+" равна "+sum/fll);
	console.log("Максимальная длина адреса оператора "+arr2[pl_max].y+" равна "+max+" и этот адрес: "+(arr2[pl_max].x+arr2[pl_max].y));
    console.log("Минимальная длина адреса оператора "+arr2[pl_min].y+" равна "+min+" и этот адрес: "+(arr2[pl_min].x+arr2[pl_min].y));

}
var str="";
for (i in arr2)str=str+arr2[i].x;
var str1="";
for(i=0;i<str.length;i++)str1=str1+str[i]+" ";
console.log(str1);
var v=str1.split(' ');
var arr6=[], u;
for (i=0;i<v.length; i++){
	f=1,u=v[i];
	for (j=i+1;j<v.length; j++){
		if (v[i]==v[j]){
			f++;
			v.splice(j, 1);  
			j--;
		}
	}
	arr6.push({
				symbol:v[i],
				number:f
			})
}
arr6.pop();
//for (i in arr6)console.log(arr6[i].symbol+" "+arr6[i].number);
//for (i in arr6)console.log(arr6[i]);
	arr6.sort(function(a,b){
    return b.number-a.number;
});
for (i in arr6)console.log(arr6[i].symbol+" "+arr6[i].number);