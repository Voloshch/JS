var s=prompt("Введите строку со скобками");
s=String(s);
flag=0, s1=0, s2=0, s3=0;
for(var i=0; i<s.length;i++){
	if(s[i]=="("||s[i]==")"){
		flag++;
		if(s[i]==")")s1++;
		else if(s[i]=="(")s2++;
	}
	if(s1>s2){
		s3=1;
		break;
}
}
if(flag==0)alert("В строке нет скобок");
else if(s1==s2&&s3==0)alert("Скобки расставлены правильно");
else alert("Скобки расставлены неправильно");