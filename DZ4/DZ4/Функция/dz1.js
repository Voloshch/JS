function argum (...argss){

	function xx (x){
		var sum=0;
		for (var i=0;i<argss.length;i++){
			sum=sum+argss[i]*(x**i);
		}
		return sum;

	}
	return xx;
}
var a=argum(1,2,3,4,5);
alert(a(3));
