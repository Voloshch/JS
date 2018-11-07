var Company={
    employees:[{
        name:"Egor",
        age:29,
        department:"Cleening",
        salary:400,
        experience:40*12,
        print: function(){
            console.log(`${this.name}-${this.salary}`);
        }},
        {
        name:"Fedya",
        age:29,
        department:"Cleening",
        salary:400,
        experience:30*1,
        print: function(){
            console.log(`${this.name}-${this.salary}`);
        }},
        {
        name:"Igor",
        age:29,
        department:"Cleening",
        salary:200,
        experience:44*12,
        print: function(){
            console.log(`${this.name}-${this.salary}`);
        }},
        {
        name:"Kavaki",
        age:29,
        department:"Cleening",
        salary:400,
        experience:40*12,
        print: function(){
            console.log(`${this.name}-${this.salary}`);
        }},
        {
        name:"Katya",
        age:23,
        department:"Banking",
        salary:600,
        experience:2*12,
        print: function(){
            console.log(`${this.name}-${this.salary}`);
        }},
        {
        name:"Ivan",
        age:45,
        department:"Reception",
        salary:500,
        experience:15*12,
        print: function(){
            console.log(`${this.name}-${this.salary}`);
        }},
        {
        name:"Karina",
        age:25,
        department:"Reception",
        salary:550,
        experience:25*12,
        print: function(){
            console.log(`${this.name}-${this.salary}`);
        }}
    ],
    printAll: function(){
        for(var i in this.employees){
            this.employees[i].print();
        }
    },
    add: function(h1,a,b,c,d,e){
        //console.log(this.employees.length);
        if(h1==1){
        this.employees.push({
            name:a,
            age:b,
            department:c,
            salary:d,
            experience:e,
            print: function(){
            console.log(`${this.name}-${this.salary}`);
        }
        });
    }
    else {
        for(var i in this.employees){
            if(this.employees[i].name==a)
                //delete this.employees[i];
            this.employees.splice(i, 1); 
        }
    }
        /*this.employees[this.employees.length].name=a;
        this.employees[this.employees.length].age=b;
        this.employees[this.employees.length].department=c;
        this.employees[this.employees.length].salary=d;
        this.employees[this.employees.length].experience=e;*/
    },
    sortBySalary: function(){

        var a=[], kk=this.employees.slice();
        for (var i in kk){
            a[i]=kk[i].salary;
        }
        console.log(a.sort(function(a,b){
    return a-b;
}));
        for (i in a){
            for (var j in kk){
            if (a[i]==kk[j].salary){console.log(kk[j].name);
            kk.splice(j, 1);  
            j--;    
            }
        }
        }
        return a.reduce(function(prew, curr){
    return prew+curr;},0);
    },
    zp: function(){
        var a=[];
        for (var i in this.employees){
            a[i]=this.employees[i].salary;
        }
        var zp1=a.reduce(function(prew, curr){
        return prew>curr?prew:curr;});
            for (var j in this.employees)
                if(this.employees[j].salary==zp1)console.log("Максимальная зп равна: "+zp1+" и ее получает "+this.employees[j].name);
        var zp2=a.reduce(function(prew, curr){
        return prew<curr?prew:curr;});
        for (var j in this.employees)
            if(this.employees[j].salary==zp2)console.log("Минимальная зп равна: "+zp2+" и ее получает "+this.employees[j].name);
        var sum=a.reduce(function(prew, curr){
        return prew+curr;},0);
        console.log("Средняя зп равна: "+sum/a.length);
    },
    zp2: function(){
        var sum=0, age=0,age1,flag=0,arr=this.employees.slice();
        var i;
        for(i=0;i<arr.length;i++){
            sum=arr[i].salary;
            age=arr[i].age;
            age1=arr[i].experience;
            flag=1;
            for(var j=i+1;j<arr.length;j++){
                if(arr[i].department==arr[j].department){
                    sum=sum+arr[j].salary;
                    age=age+arr[j].age;
                    flag++;
                    //arr[j].experience>age1?(age1=arr[j].experience):(age1=age1);  
                    if(arr[j].experience>age1)age1=arr[j].experience;
                    arr.splice(j, 1);  
                    j--;    
                }
            }
            console.log("Суммарная зп отдела "+arr[i].department+" равна "+sum);
            console.log("Средняя зп отдела равна "+sum/flag);
            console.log("Количество сотрудников отдела равно "+flag);
            console.log("Средний возраст сотрудников равен "+age/flag);
            for(var k in this.employees) {
                if(this.employees[k].experience==age1)
                console.log("Самый опытный сотрудник отдела "+this.employees[k].name+" и его стаж "+this.employees[k].experience);
            }
        }
    }

}
var num=1;
while (num==1)
{
var h=prompt("1-зачислить или уволить сотрудника, 2-вывести людей, отсортированных по зарплате и суммарную зп по всем людям, 3-вывести человека с максимальной, минимальной зп, а так же среднюю зп по предприятию, 4-работа с отделами предприятия");
h=Number(h);
switch(h){
    case 1:
var h1=prompt("1-зачислить сотрудника, 2-уволить:");
h1=Number(h1);
if(h1==1){
Company.printAll();
var name=prompt("Введите имя сотрудника:");
name=String(name);
var age=prompt("Введите возраст:");
age=Number(age);
var department=prompt("Введите департамент:");
department=String(department);
var salary=prompt("Введите зарплату:");
salary=Number(salary);
var experience=prompt("Введите стаж работы:");
experience=Number(experience);
Company.add(h1,name,age,department,salary,experience);
Company.printAll();
}
else {
    var name=prompt("Введите имя сотрудника:");
    name=String(name);
    Company.add(h1,name);
    Company.printAll();
}
break;
case 2:
Company.printAll();
console.log(Company.sortBySalary());
break;
case 3:
Company.printAll();
Company.zp();
break;
case 4:
Company.zp2();
break;
}
var answer=prompt("Желаете продолжить? 1-да, 2-нет");
answer=Number(answer);
if(answer==2)num=2;
}