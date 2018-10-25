var mass=[
{
	country:"Belarus",
	flag:"img/Belarus.png",
	code:375,
	population:9500000
},
{
	country:"Russia",
	flag:"img/Russia.png",
	code:7,
	population:146800000
},
{
	country:"Ukrain",
	flag:"img/Ukraine.png",
	code:380,
	population:42200000
},
{
	country:"Poland",
	flag:"img/Poland.png",
	code:48,
	population:38600000
},
{
	country:"Lithuania",
	flag:"img/Lithuania.png",
	code:370,
	population:2800000
},
{
	country:"Latvia",
	flag:"img/Latvia.png",
	code:371,
	population:2100000
},
{
	country:"Estonia",
	flag:"img/Estonia.png",
	code:372,
	population:1300000
},
{
	country:"Romania",
	flag:"img/Romania.png",
	code:40,
	population:19600000
},
{
	country:"Croatia",
	flag:"img/Croatia.png",
	code:385,
	population:4100000
},
{
	country:"Denmark",
	flag:"img/Denmark.png",
	code:45,
	population:5700000
},
{
	country:"Hungary",
	flag:"img/Hungary.png",
	code:36,
	population:9800000
},
{
	country:"Sweden",
	flag:"img/Sweden.png",
	code:46,
	population:10100000
}]
var li, ob=[];
for (var i in mass){
	var ul=document.createElement('ul');
    document.body.appendChild(ul);
	li=document.createElement('li');
	li.innerHTML=mass[i].country;
	ul.appendChild(li);
	ob=Object.keys(mass[i]);
	for (var j=1;j<4;j++){
		if(ob[j]=="code"){
		var lii=document.createElement('li');
	    lii.innerHTML="Код страны: "+mass[i].code;
	    li.appendChild(lii);
	}
	if(ob[j]=="population"){
		var lii=document.createElement('li');
	    lii.innerHTML="Население страны: "+mass[i].population;
	    li.appendChild(lii);
	}
	if(ob[j]=="flag"){
		var lii=document.createElement('li');
		var pic = document.createElement("IMG");
        pic.src = mass[i].flag;
        lii.appendChild(pic);
        li.appendChild(lii);
	}
	}

}
//console.log(ob);
