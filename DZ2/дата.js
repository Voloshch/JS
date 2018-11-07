var date = new Date();
var date1=new Date(date.getFullYear(), date.getMonth(), (date.getDate()+1), 0, 0, 0, 0);
alert("До конца дня осталось "+(date1-date)+" милисекунд");