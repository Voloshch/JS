var a=prompt("Ввелите строку");
a=String(a);
const exp=/^[A-Z][a-z\s]+/;
var h=a.match(exp);
console.log(a);
console.log(h);
if(h==a)alert("Строка введена верно");
else alert("Строка введена неверно");