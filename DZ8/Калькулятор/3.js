var but1=document.getElementById("button1"),
    but2=document.getElementById("button2"),
    but3=document.getElementById("button3"),
    but4=document.getElementById("button4"),
    but5=document.getElementById("button5"),
    but6=document.getElementById("button6"),
    but7=document.getElementById("button7"),
    but8=document.getElementById("button8"),
    but9=document.getElementById("button9"),
    but0=document.getElementById("button0"),
    text=document.getElementById("text1"),
    butp=document.getElementById("buttonp"),
    butm=document.getElementById("buttonm"),
    buty=document.getElementById("buttony"),
    butd=document.getElementById("buttond"),
    butr=document.getElementById("buttonr"),
    butMR=document.getElementById("buttonMR"),
    butMC=document.getElementById("buttonMC"),
    butMM=document.getElementById("buttonMM"),
    butMP=document.getElementById("buttonMP"),
    butAC=document.getElementById("buttonAC");
var mass=[], buf=[];
but1.addEventListener("click", function(){ 
if(mass.length>=4&&String(typeof mass[mass.length-1])=="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.splice(0,mass.length)
	text.value="";
};
text.value=text.value+1;
});
but2.addEventListener("click", function(){ 
if(mass.length>=4&&String(typeof mass[mass.length-1])=="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.splice(0,mass.length)
	text.value="";
};
text.value=text.value+2;
});
but3.addEventListener("click", function(){ 
if(mass.length>=4&&String(typeof mass[mass.length-1])=="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.splice(0,mass.length)
	text.value="";
};
text.value=text.value+3;
});
but4.addEventListener("click", function(){ 
if(mass.length>=4&&String(typeof mass[mass.length-1])=="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.splice(0,mass.length)
	text.value="";
};
text.value=text.value+4;
});
but5.addEventListener("click", function(){ 
if(mass.length>=4&&String(typeof mass[mass.length-1])=="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.splice(0,mass.length)
	text.value="";
};
text.value=text.value+5;
});
but6.addEventListener("click", function(){ 
if(mass.length>=4&&String(typeof mass[mass.length-1])=="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.splice(0,mass.length)
	text.value="";
};
text.value=text.value+6;
});
but7.addEventListener("click", function(){ 
if(mass.length>=4&&String(typeof mass[mass.length-1])=="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.splice(0,mass.length)
	text.value="";
};
text.value=text.value+7;
});
but8.addEventListener("click", function(){ 
if(mass.length>=4&&String(typeof mass[mass.length-1])=="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.splice(0,mass.length)
	text.value="";
};
text.value=text.value+8;
});
but9.addEventListener("click", function(){ 
if(mass.length>=4&&String(typeof mass[mass.length-1])=="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.splice(0,mass.length)
	text.value="";
};
text.value=text.value+9;
});
but0.addEventListener("click", function(){ 
if(mass.length>=4&&String(typeof mass[mass.length-1])=="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.splice(0,mass.length)
	text.value="";
};
text.value=text.value+0;
});




butp.addEventListener("click", function(){ 
if(mass[mass.length-1]=='/'&&text.value==0){alert("На ноль делить нельзя");text.value="";}else{
if(text.value=="")alert("Ошибка");
if(text.value==""&&String(typeof mass[mass.length-1])!="number"&&mass.length!=0){
	mass.splice(mass.length-1,1);
	mass.push("+");
}
else if(mass.length>=4&&String(typeof mass[mass.length-1])=="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.splice(0,mass.length);
	mass.push(Number(text.value));
    mass.push("+");
}
else if(mass.length>=2&&String(typeof mass[mass.length-1])!="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.push(Number(text.value));
    mass.push("+");
}
else if(mass.length==0){
	mass.push(Number(text.value));
    mass.push("+");	
}
console.log(mass);
text.value="";
}
});



butm.addEventListener("click", function(){ 
if(mass[mass.length-1]=='/'&&text.value==0){alert("На ноль делить нельзя");text.value="";}else{
if(text.value=="")alert("Ошибка");
if(text.value==""&&String(typeof mass[mass.length-1])!="number"&&mass.length!=0){
	mass.splice(mass.length-1,1);
	mass.push("-");
}
else if(mass.length>=4&&String(typeof mass[mass.length-1])=="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.splice(0,mass.length);
	mass.push(Number(text.value));
    mass.push("-");
}
else if(mass.length>=2&&String(typeof mass[mass.length-1])!="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.push(Number(text.value));
    mass.push("-");
}
else if(mass.length==0){
	mass.push(Number(text.value));
    mass.push("-");	
}
console.log(mass);
text.value="";
}
});



buty.addEventListener("click", function(){ 
if(mass[mass.length-1]=='/'&&text.value==0){alert("На ноль делить нельзя");text.value="";}else{
if(text.value=="")alert("Ошибка");
if(text.value==""&&String(typeof mass[mass.length-1])!="number"&&mass.length!=0){
	mass.splice(mass.length-1,1);
	mass.push("*");
}
else if(mass.length>=4&&String(typeof mass[mass.length-1])=="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.splice(0,mass.length);
	mass.push(Number(text.value));
    mass.push("*");
}
else if(mass.length>=2&&String(typeof mass[mass.length-1])!="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.push(Number(text.value));
    mass.push("*");
}
else if(mass.length==0){
	mass.push(Number(text.value));
    mass.push("*");	
}
console.log(mass);
text.value="";
}
});




butd.addEventListener("click", function(){ 
if(mass[mass.length-1]=='/'&&text.value==0){alert("На ноль делить нельзя");text.value="";}else{
if(text.value=="")alert("Ошибка");
if(text.value==""&&String(typeof mass[mass.length-1])!="number"&&mass.length!=0){
	mass.splice(mass.length-1,1);
	mass.push("/");
}
else if(mass.length>=4&&String(typeof mass[mass.length-1])=="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.splice(0,mass.length);
	mass.push(Number(text.value));
    mass.push("/");
}
else if(mass.length>=2&&String(typeof mass[mass.length-1])!="number"&&String(typeof mass[mass.length-2])=="number"){
	mass.push(Number(text.value));
    mass.push("/");
}
else if(mass.length==0){
	mass.push(Number(text.value));
    mass.push("/");	
}
console.log(mass);
text.value="";
}
});




butr.addEventListener("click", function(){ 
var res=0;
for (i in mass){
	console.log(String(typeof mass[i]));
}
if(Number(text.value)==0&&mass[mass.length-1]=="/"){alert("Ошибка при делении на 0"); text.value="";}
else{
mass.push(Number(text.value));
console.log(mass);
if(mass.length==3){
	switch(mass[1]){
		case '+':
		text.value="";
		text.value=mass[0]+mass[2];
		mass.push(Number(text.value));
		console.log(mass.length);
		break;
		case '-':
		text.value="";
		text.value=mass[0]-mass[2];
		mass.push(Number(text.value));
		console.log(mass.length);
		break;
		case '*':
		text.value="";
		text.value=mass[0]*mass[2];
		mass.push(Number(text.value));
		console.log(mass.length);
		break;
		case '/':
		text.value="";
		text.value=mass[0]/mass[2];
		mass.push(Number(text.value));
		console.log(mass.length);
		break;
	}
}
else {
	var f1=0,f2=0,res=0;
	for (i in mass){
		(i%2==0)?((String(typeof mass[i])=="number")?(f1++):(f1=f1)):((String(typeof mass[i])!="number")?(f2++):(f2=f2));
	}
	if(Number(f1+f2)==mass.length){
		for (i=0;i<mass.length;i++){
			if(i==1){
		switch(mass[1]){
		case '+':
		text.value="";
		res=mass[0]+mass[2];
		console.log(res);
		break;
		case '-':
		text.value="";
		res=mass[0]-mass[2];
		console.log(res);
		break;
		case '*':
		text.value="";
		res=mass[0]*mass[2];
		console.log(res);
		break;
		case '/':
		text.value="";
		res=mass[0]/mass[2];
		console.log(res);
		break;
	}
			}
		else{
			if(String(typeof mass[i])=="string"){
				console.log("Ono zashlo!");
				console.log(mass[i]);
		switch(mass[i]){
		case '+':
		text.value="";
		console.log(mass[i+1]);
		console.log(res);
		res=res+mass[i+1];
		console.log(res);
		break;
		case '-':
		text.value="";
		console.log(mass[i+1]);
		console.log(res);
		res=res-mass[i+1];
		console.log(res);
		break;
		case '*':
		text.value="";
		console.log(mass[i+1]);
		console.log(res);
		res=res*mass[i+1];
		console.log(res);
		break;
		case '/':
		text.value="";
		console.log(mass[i+1]);
		console.log(res);
		res=res/mass[i+1];
		console.log(res);
		break;
	}
			}
		}
		}
		text.value=res;
		mass.push(Number(text.value));
	}else alert("Ошибка");
}
}
console.log(mass);
});

butAC.addEventListener("click", function(){ 
text.value="";
});

butMC.addEventListener("click", function(){ 
	buf.splice(0,1);
	console.log(buf);
});
butMR.addEventListener("click", function(){ 
	text.value="";
	text.value=buf[0];
	console.log(buf);
});
butMM.addEventListener("click", function(){ 
if(buf.length==0){
	if(text.value=="")alert("Сначала введите чилсо в поле");
	else buf.push(-Number(text.value));
}else{
	buf[0]=Number(text.value)-buf[0];
}
console.log(buf);
});
butMP.addEventListener("click", function(){ 
if(buf.length==0){
	if(text.value=="")alert("Сначала введите число в поле");
	else buf.push(Number(text.value));
}else{
	buf[0]=buf[0]+Number(text.value);
	//text.value=buf[0];
}
console.log(buf);
});