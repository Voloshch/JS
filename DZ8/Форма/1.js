var t1=document.getElementById("text1"),
t2=document.getElementById('text2'),
t3=document.getElementById('text3'),
t4=document.getElementById('text4'),
btn=document.getElementById('button1'),
t5=document.getElementById('text5');
const patterns={
	name: /^[a-z\-\s\_]{3,20}$/i,
	phone: /^\+375\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/,
	email: /^[a-z0-9\_]{3,20}@[a-z]{3,10}\.[a-z]{2,5}$/i,
	site: /^[a-z0-9\_\-]{3,20}\.[a-z]{2,5}$/,
	age: /\d{2}/
}
var ob=[];
t1.addEventListener('keyup', function(){
	if(t1.value.match(patterns.name)==null){t1.style.borderColor="red";ob[0]=0;}
	else {t1.style.borderColor="green";
	ob[0]=1;
	}
});
t2.addEventListener('keyup', function(){
	if(t2.value.match(patterns.phone)==null){t2.style.borderColor="red";ob[1]=0;}
	else {t2.style.borderColor="green";ob[1]=1;}
});
t3.addEventListener('keyup', function(){
	if(t3.value.match(patterns.email)==null){t3.style.borderColor="red";ob[2]=0;}
	else {t3.style.borderColor="green";ob[2]=1;}
});
t4.addEventListener('keyup', function(){
	if(t4.value.match(patterns.site)==null){t4.style.borderColor="red";ob[3]=0;}
	else {t4.style.borderColor="green";ob[3]=1;}
});
t5.addEventListener('keyup', function(){
	if(t5.value.length==2){
		if(Number(t5.value)>=14&&Number(t5.value)<=90){
			if(t5.value.match(patterns.age)!=null){t5.style.borderColor="green";ob[4]=1;}
			else {t5.style.borderColor="red";ob[4]=0;}
		}
		else {t5.style.borderColor="red";ob[4]=0;}
	}
});
btn.addEventListener('click', function(){
	var flag=0;
	for(var i=0;i<ob.length;i++){
		if(ob[i]==1)flag++;
	}
	if(flag==5)alert("Все поля заполнены верно");
	else alert ("Ошибка ввода");
});
