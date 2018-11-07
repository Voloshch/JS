var a = prompt("Введите первое число");
a=Number(a);
var b = prompt("Введите второе число");
b=Number(b);
var c = prompt("Введите операцию");
switch(c){
	case'+':console.log(a+b);
	break;
	case '-':console.log(a-b);
	break;
	case '*':console.log(a*b);
	break;
	case '/':console.log(a/b);
	break;
	default:console.log("Вы ввели неверную операцию!");

}
