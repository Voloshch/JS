var t1=document.getElementById("text1"),
t2=document.getElementById('text2'),
v1=document.getElementById('val1'),
v2=document.getElementById('val2'),
but=document.getElementById('but'),
div=document.getElementById('divv');
const xhr=new XMLHttpRequest();
xhr.open("GET", '1.json', true);
var flag=0, stroka2, str="";
xhr.onload=function(){
	const data = this.responseText;
	const items = JSON.parse(data);  
	console.log(items);
	t1.addEventListener('keyup', function(){
	for(var i=0;i<items.length;i++){
		if(items[i].from==v1.value&&items[i].to==v2.value){
			t2.value=Number(t1.value)*items[i].value;
			stroka2=Number(t1.value)*items[i].value;
		}
	}
	var temp, obj=[];
	for(var i=0;i<mass.length;i++){
		if(String(mass[i])!=String(v1.value)&&String(mass[i])!=String(v2.value)){
			//temp=Number(t1.value)*items[i].value;
			for(var j=0;j<items.length;j++){
				if(items[j].from==v1.value&&items[j].to==mass[i]){
					for(var k=0;k<items.length;k++){
						if(items[k].from==mass[i]&&items[k].to==v2.value){
							//console.log(items[j].value);
							//console.log(items[k].value);
							//console.log(Number(t1.value));
							temp=Number(t1.value)*items[j].value*items[k].value;
							//console.log("/////////////");
							//console.log(temp);
							if (obj.length==0){
								//console.log("kuku");
								obj.push({
								currency1:v1.value,
							    currency2:mass[i],
								currency3:v2.value,
								value:temp
							});
							}
							else if(Number(obj[0].value)<temp){
								//console.log("фффф");
								obj.splice(0,1);
								obj.push({
								currency1:v1.value,
								currency2:mass[i],
								currency3:v2.value,
								value:temp
							});
							}	
						}
					}
				}
			}
		}
	}
	console.log(obj[0]);
	if(stroka2<obj[0].value)str="Лучший курс вычисляется двухшаговым конвертированием из "+obj[0].currency1+" в "+obj[0].currency3+" с промежуточной валютой "+obj[0].currency2+". Результат равен "+obj[0].value;
	else str="Лучшего курса нет";
	console.log(str);
	console.log(obj);
});
	var mass=[],flag;
	mass.push(items[0].from);
	for(var i=1;i<items.length;i++){
		flag=0;
		for(var j=0;j<mass.length;j++){
			if(String(items[i].from)!=String(mass[j]))flag++;
		}
		if(flag==mass.length)mass.push(String(items[i].from));
	}
	console.log(mass);
	but.addEventListener('click',function(){
		div.style.backgroundColor="#ccc";
		if(str=="Лучшего курса нет"){
			div.style.marginTop="180px";
			div.style.marginLeft="350px";
			div.style.width="150px";
			div.style.height="20px";
			div.style.borderRadius="5px";
		}
		else {
			div.style.marginTop="200px";
			div.style.marginLeft="300px";
			div.style.width="290px";
			div.style.height="75px";
			div.style.borderRadius="5px";
		}
		div.innerHTML=str;
	})
	/*var temp;
	for(var i=0;i<mass.length;i++){
		if(String(mass[i])!=String(v1.value)&&String(mass[i])!=String(v2.value)){
			//temp=Number(t1.value)*items[i].value;
			for(var j=0;j<items.length;j++){
				if(items[j].from==v1.value&&items[j].to==mass[i]){
					for(var k=0;k<items.length;k++){
						if(items[k].from==mass[i]&&items[k].to==v2.value){
							console.log(items[j].value);
							console.log(items[k].value);
							console.log(Number(t1.value));
							temp=Number(t1.value)*items[j].value*items[k].value;
							console.log(temp);
						}
					}
				}
			}
		}
	}*/
};
xhr.send(null);