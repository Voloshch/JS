function disp (...args){

    var sum=0, sum2=0;
    for (var i=0;i<args.length;i++){
        sum=sum+args[i];
    }
    var avg=sum/args.length;
    console.log(avg);
    console.log(args.length);
    for (var i=0;i<args.length;i++){
        //console.log("/////////////////////////");
        //console.log(sum2);
        //console.log("/////////////////////////");
        sum2=sum2+Math.pow((avg-args[i]),2);
        //console.log(avg-args[i]);
    }
    console.log(sum2);
    return sum2/args.length;
}
alert("Дисперсия числового ряда равна:"+disp(1,2,3));