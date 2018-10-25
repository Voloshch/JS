var Dom={
  Kvartira:[ 
   {
        square:30,
        number:1, 
        People:[
            {
            name:"Ivan",
            age:35
            },
             {
            name:"Karina",
            age:32
            },
             {
            name:"Katya",
            age:10
            }
        ]
   },
   {
        square:25,
        number:2, 
        People:[
         {
            name:"Erema",
            age:40
            },
             {
            name:"Veronika",
            age:35
            },
             {
            name:"Kavaki",
            age:15
            },
            {
            name:"Rik",
            age:5
            }

        ]
   },
   {
        square:35,
        number:5, 
        People:[
        {
            name:"Vika",
            age:10
            },
             {
            name:"Petya",
            age:12
            }
        ]
   },
   {
        square:29,
        number:3, 
        People:[]
   },
   {
        square:35,
        number:8, 
        People:[
        {
            name:"Vitya",
            age:10
            }
        ]
   }
],
zaselit:function(a, b, c){
    var flag=0;
    for (var i=0;i<this.Kvartira.length;i++){
        console.log(a);
        console.log(this.Kvartira[i].number);
        if(a==this.Kvartira[i].number){
            flag=1;
            this.Kvartira[i].People.push({
            name:c,
            age:b
        })}
    }
    if (flag==0)alert("Такой квартиры не существует");
}, 
viselit: function(a,b){
    var flag=0;
     for (var i=0;i<this.Kvartira.length;i++){
         if(a==this.Kvartira[i].number){
            //console.log("KUKU");
            for(var j=0;j<this.Kvartira[i].People.length;j++){
                //console.log(this.Kvartira[i].People[j]);
                if(b==this.Kvartira[i].People[j].name){
                    //console.log("KUKU2");
                    flag=1;
                    console.log("Жилец "+this.Kvartira[i].People[j].name+" был выселен из квартиры номер "+this.Kvartira[i].number);
                    this.Kvartira[i].People.splice(j, 1);     
                }
            }
         }
     }
     if(flag==0){console.log("Такой квартиры или имени не существует");}

},
printAll:function(){
    for(var i in this.Kvartira){
        console.log("Площадь квартиры равна: "+this.Kvartira[i].square);
        console.log("Номер квартиры равен: "+this.Kvartira[i].number);
        for(var j=0; j<this.Kvartira[i].People.length;j++){
            console.log("Жилец "+(j+1));
            console.log("Имя: "+this.Kvartira[i].People[j].name);
            console.log("Возраст: "+this.Kvartira[i].People[j].age);
        }
    }
},
ochistka: function(a){
    var f=0;
    for (var i in this.Kvartira){
        if(a==this.Kvartira[i].number){
            console.log("Квартира очищена");
            this.Kvartira[i].People.splice(0,this.Kvartira[i].People.length);
            f=1;
        }
    }
    if(f==0)console.log("Квартира с таким номером не найдена");
},
komunalka: function(a){
    var sq=0,mass1=[],mass2=[],f, flagg;
    for (var i in this.Kvartira){
        sq=sq+this.Kvartira[i].square;
    }
    for (var i=0;i<this.Kvartira.length;i++){
        f=0;
        for (var j in this.Kvartira[i].People){
            if(this.Kvartira[i].People[j].age<18)f++;
        }
        if(f==this.Kvartira[i].People.length&&this.Kvartira[i].People.length!=0)mass2.push(i);
    }
    for (var i=0;i<this.Kvartira.length;i++){
        if(this.Kvartira[i].People.length==0)mass2.push(i);
    }
    for (var i=0;i<this.Kvartira.length;i++){
        flagg=0;
        for(var j=0;j<mass2.length;j++){

            if(Number(i)!=Number(mass2[j]))flagg++;
        }
        if(flagg==mass2.length)mass1.push(i);
    }
    mass1.sort(function(a,b){
    return a-b;
})
    mass2.sort(function(a,b){
    return a-b;
})
    console.log(mass1);
    console.log(mass2);
    var zena=a/sq, ff,zena1,people=[];
    console.log(zena);
    for (var i=0;i<this.Kvartira.length;i++){
        for (var j=0;j<mass1.length;j++){
            if(i==mass1[j]){
                ff=0;
                for(var k=0;k<this.Kvartira[i].People.length;k++){
                    if(this.Kvartira[i].People[k].age>17)ff++;
                }
                zena1=zena*this.Kvartira[i].square/ff;
                for(var k=0;k<this.Kvartira[i].People.length;k++){
                    if(this.Kvartira[i].People[k].age>17)people.push({
                        name:this.Kvartira[i].People[k].name,
                        number:this.Kvartira[i].number,
                        plata:zena1
                    })
                }
            }
        }
        var sqq=0;
        for (var j=0;j<mass2.length;j++){
            if(i==mass2[j]){
                sqq=sqq+this.Kvartira[i].square;
            }
        }
        //console.log(sqq);
        var zena2=zena*sqq/people.length;
        for(var j=0;j<people.length;j++){
            people[j].plata=people[j].plata+zena2;
        }
    }
    console.log(people);
    console.log("Коммунальные расходы для каждого жильца дома:");
    for (i in people){
        console.log("Для жильца "+people[i].name+", проживающего в квартире номер "+people[i].number+" платеж составил "+people[i].plata);
    }
}
}

var num=1;
while (num==1)
{
//Dom.printAll();
var l=prompt("Выберите номер операции: 1-заселить (выселить человека), 2-очистить квартиру от жильцов, 3-распределить коммунальные расходы, 4-вывести информацию о всех жильцах");
l=Number(l);
switch(l){
    case 1: 
    var k=1;
    while(k==1){
    var l2=prompt("1-заселить, 2-выселить");
    if (l2==1){
        let num=prompt("Введите номер квартиры, в которую нужно заселить человека");
        let name1=prompt("Введите имя будущего жильца");
        let age1=prompt("Введите его возраст");
        Dom.zaselit(num, name1, age1);
        k=2;
        break;
    }
    else if(l2==2){
    let num=prompt("Введите номер квартиры, из которой нужно выселить человека");
    let name1=prompt("Введите имя выселяемого человека");
    Dom.viselit(num, name1);
    k=2;
    break;
    }
    else {
        alert("Вы ввели неправильную цифру, попробуйте еще раз");
    }
}
break;
case 2:
var nm=prompt("Введите номер квартиры, которую нужно очистить от жильцов");
nm=Number(nm);
Dom.ochistka(nm);
break;
case 3:
var kom=prompt("Введите сумму коммунального платежа");
kom=Number(kom);
Dom.komunalka(kom);
break;
case 4:
Dom.printAll();
break;
}
var answer=prompt("Желаете продолжить? 1-да, 2-нет");
answer=Number(answer);
if(answer==2)num=2;
}
