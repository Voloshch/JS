//Работает только с русскими буквами
const btn1 = document.getElementById("button1"); 
const btn2 = document.getElementById("button2"); 
const text1 = document.getElementById("text1"); 
const text2 = document.getElementById("text2");
btn1.addEventListener("click", function(){ 
if (String(text1.value)!=""&&String(text2.value)==""){
console.log(String(text1.value));
text2.value=(String(kodirovka(1,text1.value)));
console.log(kodirovka(1,text1.value));
}
else alert ("Вы неправиьно заполнили поля ввода");
});
btn2.addEventListener("click", function(){ 
if (String(text1.value)==""&&String(text2.value)!=""){
console.log(String(text2.value));
text1.value=(String(kodirovka(2,text2.value)));
console.log(kodirovka(2,text2.value));
}
else alert ("Вы неправиьно заполнили поля ввода");
});

function kodirovka (a,b){
	 var d="",c = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",e="абвгдеёжзийклмнопрстуфхцчшщъыьэюя",g=3;
	 if (a==1){
	 	for (var i=0;i<b.length;i++){
	 		for (var j=0;j<c.length;j++){
	 			if(b[i]==c[j]){
	 				if(j+g+1>c.length)d=d+c[j+g-c.length];
	 				else d=d+c[j+g];
	 			}
	 		}
	 		for (var j=0;j<e.length;j++){
	 			if(b[i]==e[j]){
	 				if(j+g+1>e.length)d=d+e[j+g-c.length];
	 				else d=d+e[j+g];
	 			}
	 		}

	 	}
	 	//console.log(d);
	 }
	 if (a==2){
	 	for (var i=0;i<b.length;i++){
	 		for (var j=0;j<c.length;j++){
	 			if(b[i]==c[j]){
	 				if(j-g<0)d=d+c[j-g+c.length];
	 				else d=d+c[j-g];
	 			}
	 		}
	 		for (var j=0;j<e.length;j++){
	 			if(b[i]==e[j]){
	 				if(j+g<0)d=d+e[j-g+c.length];
	 				else d=d+e[j-g];
	 			}
	 		}

	 	}
	 	//console.log(d);
	 }
	 return d;
}