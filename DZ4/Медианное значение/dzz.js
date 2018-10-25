function med (...args){
	for(var i = args.length-1 ; i > 0 ; i--){
        for(var j = 0 ; j < i ; j++){
            if( args[j] > args[j+1] ){
                var tmp = args[j];
                args[j] = args[j+1];
                args[j+1] = tmp;
            }
        }
    }
console.log(args.length/2);
if (args.length%2==0){
	alert("Медианное значение равно: "+((args[Math.floor(args.length/2)-1]+args[Math.floor(args.length/2)])/2));
}
else {
	alert("Медианное значение равно: "+(args[Math.ceil(args.length/2)-1]));
}
}
med(4,3,8,5,7,9,0,10);