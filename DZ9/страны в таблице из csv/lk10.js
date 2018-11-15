const xhr=new XMLHttpRequest();
xhr.open("GET", 'data2.csv', true);
var s="", arr1=[], g=0,ar=0, arr2=[], countries=[];
xhr.onload=function(){
	s=this.responseText;
	var names=s.slice(0,s.indexOf("\n"));
	var objects=s.slice(s.indexOf("\n"),s.length);
	arr1=names.split("; ");
	arr2=objects.replace(/\n/gm, ", ").split(", ");
	arr2.splice(0,1);
	var flag=0,k=0;
	for(var i=0;i<arr2.length;i++){
		flag++;
		if(flag==1)countries.push({
			country:"",
			flag:"",
			code:"",
			population:""

		})
		switch(flag%4){
			case 1:countries[k].country=arr2[i];break;
			case 2:countries[k].flag=arr2[i];break;
			case 3:countries[k].code=arr2[i];break;
			case 0:countries[k].population=arr2[i];break;

		}
		if(flag==4){flag=0;k++;}
	}
	var r, c;
	var el=document.getElementById("tab");
	for(var i=0;i<countries.length;i++){
		r=el.insertRow(i);
		for(var j=0;j<4;j++){
			if(j==0){
				c=r.appendChild(document.createElement("td"));
			}
			else{
				c=r.insertCell(j);
			}
			switch(j){
			case 0:c.innerHTML=countries[i].country;break;
			case 1:var pic = document.createElement("IMG");pic.src = countries[i].flag;c.appendChild(pic);;break;
			case 2:c.innerHTML=countries[i].code;break;
			case 3:c.innerHTML=countries[i].population;break;

		}
		}
	}
};
xhr.send(null);
