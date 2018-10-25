var N=prompt("Введите N (количество имен)");
var name1=[];
for (var i=0;i<N;i++){
	name1[i]=prompt("Введите "+(i+1)+"е имя");
}
var M=prompt("Введите M (количество городов)");
var city=[];
for (var i=0;i<M;i++){
	city[i]=prompt("Введите "+(i+1)+"-й город");
}
function getRandom(a, b){
	var r = Math.random();
	return Math.ceil((b-a)*r+a)-1;
}
var person=[];
for (i=0;i<N;i++){
	person[i]={
		name: name1[getRandom(0,Number(N))],
		age: getRandom(1,99),
		town: city[getRandom(0,Number(M))],
		print: function(){
			console.log("Имя человека: "+this.name+"\nГород: "+this.town+"\nВозраст: "+this.age);
		}
	}
}
//for (i in person){person[i].print();}
person.sort(function(a,b){
    return b.age-a.age;
});
for (i in person){person[i].print();}