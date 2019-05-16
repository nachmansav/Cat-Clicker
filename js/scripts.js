var elem = document.getElementById('cat-pic1');
var elem2 = document.getElementById('cat-pic2');
var clicks1 = 0;
var clicks2 = 0;
var catname1 = 'Pickels';
var catname2 = 'Paws';

$('#cat-name1').html(catname1);
$('#cat-name2').html(catname2);

elem.addEventListener('click', function(){
  clicks1 ++;
  $("#counter1").html("You clicked on " + catname1 + " " + clicks1 + " times.");
}, false);

elem2.addEventListener('click', function() {
  clicks2 ++;
  $("#counter2").html("You clicked on " + catname2 + " " + clicks2 + " times.");
}, false);
