var elem = document.getElementById('cat-pic1');
var elem2 = document.getElementById('cat-pic2');
var clicks1 = 0;
var clicks2 = 0;
elem.addEventListener('click', function(){
  clicks1 ++;
  $("#counter1").html("You clicked on the cat " + clicks1 + " times.");
}, false);

elem2.addEventListener('click', function() {
  clicks2 ++;
  $("#counter2").html("You clicked on the cat " + clicks2 + " times.");
}, false);
