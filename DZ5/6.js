var Employees=[
{
	name:"Ivan",
	salary:350,
	department:"Banking",
	age:34
},
{
	name:"Katya",
	salary:300,
	department:"Reception",
	age:30
},
{
	name:"Egor",
	salary:100,
	department:"Cleening",
	age:49
},
{
	name:"Evstafiy",
	salary:100,
	department:"Banking",
	age:20
},
{
	name:"Karina",
	salary:250,
	department:"Reception",
	age:26
},
{
	name:"Vitya",
	salary:150,
	department:"Cleening",
	age:50
},
{
	name:"Anna",
	salary:100,
	department:"Banking",
	age:39
},
{
	name:"Kristina",
	salary:200,
	department:"Reception",
	age:50
},
{
	name:"Yura",
	salary:100,
	department:"Cleening",
	age:49
}
]
Employees.sort((a,b)=>b.salary-a.salary);
console.log(Employees);
var Em=[];
Em=Employees.slice();
for (var i=0;i<Em.length-3;i++){
	var flag=1, sum=Em[i].salary, age=Em[i].age;
	for (var j=0;j<Em.length;j++){
		if(j>i){
			if(Em[i].department==Em[j].department){
			sum=sum+Em[j].salary;
			age=age+Em[j].age;
			flag++;
			Em.splice(j,1);
			j--;
		}
	}
}
	Em.push({
		department:Em[i].department,
		name:Em[i].name,
		salary:Em[i].salary,
		avgsalary:(sum/flag),
		avgage:(age/flag)
	});
	Em.splice(i,1);
	i=i-1;
}
for (i in Em){
	console.log("В отделе "+Em[i].department+" максимальная зп равна "+Em[i].salary+" у работника "+Em[i].name);
	console.log("Средняя зп по отделу составляет "+Em[i].avgsalary+", средний возраст по отделу составляет "+Em[i].avgage);
}
console.log("Средняя зп среди максимумов по отделам составляет: "+Em.reduce((a,b)=> a+b.salary,0)/Em.length);
