var a=prompt("Введите количество элементов");
a=Number(a);
var q=[1,2],flag;
var el = document.getElementById("tab");
for (var i=3;i<=a;i++){
	flag=0;
	for(var j=1;j<q.length;j++){
		if(i%q[j]==0)flag++;
	}
	if(flag==0)q.push(i);
}
console.log(q);
var d=Math.ceil(a/10);
for (var i=0;i<a/10;i++){
	r=el.insertRow(i);
	for (var j=0;j<10;j++){
		if((i*10+j+1)<=a){
		c=r.insertCell(j);
        c.innerHTML=i*10+j+1;
        for (var k=0;k<q.length;k++){
        if((i*10+j+1)==q[k])c.style.backgroundColor="red";}
    }
	}
}