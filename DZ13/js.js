class Product{
  constructor(id, title, type, cost, date){
    this.id=id;
    this.title=title;
    this.type=type;
    this.cost=cost;
    this.date=date;
    Object.freeze(this);
  }
}
class Shop{
  constructor(title, adress, profit){
    this.title=title;
    this.adress=adress;
    this.products=[];
    this.markup=markup;
    this.profit=profit;
    Object.freeze(this);
  }
  addProduct(product){
    this.products.push(product);
  }
}
class Request{
  constructor (path){
    this.xhr=new XMLHttpRequest();
    this.xhr.open("GET", path, true);
    this.xhr.send(null);
  }
  then(f){
    this.xhr.onload=function(){
      f(JSON.parse(this.responseText));
    }
  }
}
var Market={
  outShops:function(){

  }
}

var request=new Request("1.json");
request.then(d=>console.log(d));
var shops=[];
request.then(function(data){
  shops=data.map(function(obj){
    var shop=new Shop(obj.title, obj.adress, obj.profit);
    Object.keys(obj.products).forEach(function(p){
      var prop=new Product(p,obj.products[p]);
      shop.addProduct(prop);
    })
    return shop;
  })

})