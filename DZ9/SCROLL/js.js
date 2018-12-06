var str,div = document.getElementById('txt1');
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  str=String(scrolled)+"px";
  if(Number(scrolled)>400){
    div.style.marginTop="0px";
    div.style.marginLeft="150px";
    div.style.position="fixed";
  }
  else {
    div.style.position="absolute";
    div.style.marginTop="300px";
    div.style.marginLeft="150px";
  }
}