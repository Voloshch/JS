var t1=document.getElementById("text1"),
t2=document.getElementById('text2'),
v1=document.getElementById('val1'),
v2=document.getElementById('val2');
t1.addEventListener('keyup', function(){
	switch(String(v1.value)){
		case 'Dollar':switch(String(v2.value)){
			case 'Dollar':t2.value=Number(t1.value);break;
			case 'Euro':t2.value=Number(t1.value)*0.88;break;
			case 'Rrub':t2.value=Number(t1.value)*66.1;break;
			case 'Brub':t2.value=Number(t1.value)*2.12;break;
			case 'Gr':t2.value=Number(t1.value)*28.02;break;
		}break;
		case 'Euro':switch(v2.value){
			case 'Dollar':t2.value=Number(t1.value)*1.14;break;
			case 'Euro':t2.value=Number(t1.value);break;
			case 'Rrub':t2.value=Number(t1.value)*75.42;break;
			case 'Brub':t2.value=Number(t1.value)*2.42;break;
			case 'Gr':t2.value=Number(t1.value)*31.85;break;
		}break;
		case 'Rrub':switch(v2.value){
			case 'Dollar':t2.value=Number(t1.value)*0.015;break;
			case 'Euro':t2.value=Number(t1.value)*0.013;break;
			case 'Rrub':t2.value=Number(t1.value);break;
			case 'Brub':t2.value=Number(t1.value)*0.032;break;
			case 'Gr':t2.value=Number(t1.value)*0.43;break;
		}break;
		case 'Brub':switch(v2.value){
			case 'Dollar':t2.value=Number(t1.value)*0.47;break;
			case 'Euro':t2.value=Number(t1.value)*0.41;break;
			case 'Rrub':t2.value=Number(t1.value)*31.12;break;
			case 'Brub':t2.value=Number(t1.value);break;
			case 'Gr':t2.value=Number(t1.value)*213.19;break;
		}break;
		case 'Gr':switch(v2.value){
			case 'Dollar':t2.value=Number(t1.value)*0.036;break;
			case 'Euro':t2.value=Number(t1.value)*0.031;break;
			case 'Rrub':t2.value=Number(t1.value)*2.33;break;
			case 'Brub':t2.value=Number(t1.value)*0.076;break;
			case 'Gr':t2.value=Number(t1.value)*28.02;break;
		}break;
	}
	//console.log(t1.value);
});



/*var map = {};
var innerMap = {};

var str = 'dollar';
var innerStr = 'rub';
var anotherInnerStr = 'blr';

innerMap[innerStr] = 66;
innerMap[anotherInnerStr] = 2.2;
map[str] = innerMap;

var getMap = map[str];
console.log(getMap[innerStr]);
console.log(getMap[anotherInnerStr]);

var anotherInnerMap = {};
anotherInnerMap[innerStr] = 80;
anotherInnerMap[anotherInnerStr] = 3;


var eurKey = 'eur';
map[eurKey] = anotherInnerMap;

var getMap = map[eurKey];
console.log(getMap[innerStr]);
console.log(getMap[anotherInnerStr]);*/
/*var keyBox = document.getElementById("key");
 
