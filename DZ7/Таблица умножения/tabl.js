var size=prompt("Введите размерность таблицы");
size=Number(size);
var r, c;
var el = document.getElementById("tab");
for (var i=0;i<size;i++){
	r=el.insertRow(i);
	for (var j=0;j<size;j++){

if(j==0){
c=r.appendChild(document.createElement("td"));
c.innerHTML=i+1;}
else{
c=r.insertCell(j);
c.innerHTML=(j+1)*(i+1);
}
if(i==j)c.style.backgroundColor="red";
	}
}
