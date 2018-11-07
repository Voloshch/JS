var csv="Беларусь, Belarus, белорусский, 9500000, 207000, Минск, +03.00, 250\n" +
"Польша, Poland, польский, 38000000, 312000, Варшава, +02.00, 350\n"+
"Италия, Italy, итальянский, 15000000, 200000, Рим, +02.00, 450\n"+
"Германия, Germany, немецкий, 150000000, 800000, Берлин, +02.00, 600\n"+
"Португалия, Portugal, португальский, 10000000, 92000, Лиссабон, +01.00, 700\n"+
"Бразилия, Brazil, португальский, 212000000, 8500000, Бразилиа, -03.00, 200";
var reg1=/^[А-Яа-я]+/gm;
var reg2=/[A-Za-z],/gm;
var arr=csv.replace(/\n/gm, ',').replace(/\s/gm, '').split(',');
//console.log(arr);
//console.log(arr.length);
var arr1=[],arr2=[],arr3=[],arr4=[],arr5=[],arr6=[],arr7=[],arr8=[];
for (i=0,j=0;i<arr.length;i=i+8,j++)arr1[j]=arr[i];
for (i=1,j=0;i<arr.length;i=i+8,j++)arr2[j]=arr[i];
for (i=2,j=0;i<arr.length;i=i+8,j++)arr3[j]=arr[i];
for (i=3,j=0;i<arr.length;i=i+8,j++)arr4[j]=arr[i];
for (i=4,j=0;i<arr.length;i=i+8,j++)arr5[j]=arr[i];
for (i=5,j=0;i<arr.length;i=i+8,j++)arr6[j]=arr[i];
for (i=6,j=0;i<arr.length;i=i+8,j++)arr7[j]=arr[i];
for (i=7,j=0;i<arr.length;i=i+8,j++)arr8[j]=arr[i];
var country=[];
for (i=0;i<arr.length/8;i++){
		country.push({
				name:arr1[i],
				eName:arr2[i],
				language:arr3[i],
				population:arr4[i],
				sqare:arr5[i],
				capital:arr6[i],
				time:arr7[i],
				vvp:arr8[i]
			})
}
for (i=0;i<arr.length/8;i++)console.log(country[i]);
var plMax, plMin, max=0, min=0;
for(i=1;i<arr.length/8;i++){
	if(country[i].population/country[i].sqare>country[max].population/country[max].sqare){
		max=i;
		plMax=country[max].population/country[max].sqare;
	}
	if(country[i].population/country[i].sqare<country[min].population/country[min].sqare){
		min=i;
		plMin=country[min].population/country[min].sqare;
	}
}
console.log("Максимальная плотность у страны "+country[max].name+" и она составляет "+plMax);
console.log("Минимальная плотность у страны "+country[min].name+" и она составляет "+plMin);
var vMax, vMin, max=0, min=0;
for(i=1;i<arr.length/8;i++){
	if(country[i].population*country[i].vvp>country[max].population*country[max].vvp){
		max=i;
		vMax=country[max].population*country[max].vvp;
	}
	if(country[i].population*country[i].vvp<country[min].population*country[min].vvp){
		min=i;
		vMin=country[min].population*country[min].vvp;
	}
	else vMin=country[0].population*country[0].vvp;
}
console.log("Максимальный  ВВП у страны "+country[max].name+" и он составляет "+vMax);
console.log("Минимальный ВВП у страны "+country[min].name+" и он составляет "+vMin);
country.sort(function(a,b){
    return a.vvp-b.vvp;
});
var mediana;
if((country.length)%2==0)mediana=(Number(country[Math.floor(country.length/2)-1].vvp)+Number(country[Math.floor(country.length/2)].vvp))/2;
	else mediana=country[Math.ceil(country.length/2)-1].vvp;
console.log("Медианное значение доха на душу населения равно "+mediana);
var med=[];
for (i in country){
	med.push(
	{
		name:country[i].name,
		media:Math.abs(country[i].vvp-mediana)
	})
}
//for (i in med)console.log(med[i]);
med.sort(function(a,b){
    return a.media-b.media;
});
for (i=0;i<3;i++)console.log("Одна из трех стран с минимальным по модулю отклонением от медианного значения дохода на душу населения "+med[i].name+".Ее отклонение составляет "+med[i].media);
var countries="", populations, c=country.slice();
for(i=0;i<c.length;i++){
    countries=c[i].name;
    //console.log(countries);
    populations=Number(c[i].population);
    //console.log(populations);
    for(var j=i+1;j<c.length;j++){
        if(c[i].language==c[j].language){
            populations=populations+Number(c[j].population);
            countries=countries+", "+c[j].name;
            c.splice(j, 1);  
            j--;    
        }
    }
    console.log(c[i].language+" язык. На нем говорят в таких странах как "+countries+". Общая численность носителей языка "+populations+" человек");
}
function getRandom(a, b){
	var r = Math.random();
	return Math.ceil((b-a)*r+a);
}
var rand=[];
for (i=0;i<3;i++){
	rand[i]=getRandom(1,country.length);
	//console.log(rand[i]);
}
var date=new Date();
var hours=date.getHours();
var minutes=date.getMinutes();
var str="";
for (i=0;i<3;i++){
		if(country[rand[i]-1].time.charAt(0)=='+')
			{
				str=country[rand[i]-1].time.substr(1,country[rand[i]-1].time.length);
				//console.log(Number(str));
				console.log("Время в городе "+country[rand[i]-1].capital+": "+(hours+Number(str)-3)+" ч "+minutes+" мин");
			}
		else if (country[rand[i]-1].time.charAt(0)=='-')
			{
				str=country[rand[i]-1].time.substr(1,country[rand[i]-1].time.length);
				//console.log(Number(str));
				console.log("Время в городе "+country[rand[i]-1].capital+": "+(hours-Number(str)-3)+" ч "+minutes+" мин");
			}
}
var ff=0;
for (i in country){
	//console.log(country[i].eName.length);
	//console.log(country[i].name.length+1);
	if(country[i].eName.length>(country[i].name.length+1)){
		ff++;
		console.log(country[i].name);
	}
}
if(ff==0)console.log("Не найдено ни одной страны, чьё английское название длиннее, чем русское");