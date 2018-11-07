var numRows=prompt("Введите количество строк в треугольнике");
var triangle;
document.write ('<style>\n')
document.write ('p {text-align: center; margin: 0; font-family: monospace; font-size: 8pt }\n');
document.write ('</style>\n');
document.write ('<p>');
function pascalRecursive(n, a){
    if(n<2)return a;
    var prevRow=a[a.length-1];
    var curRow=[1];
    for(var i=1; i<prevRow.length;i++){
        curRow[i]=prevRow[i]+prevRow[i-1];
    }
    curRow.push(1);
    a.push(curRow);
    return pascalRecursive(n-1, a);
}
var triangle=pascalRecursive(numRows, [[1]]);
for(var i=0; i<triangle.length;i++) document.write(triangle[i]+"<br>");