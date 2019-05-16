var elem = document.getElementById('cat-pic');
var clicks = 0
elem.addEventListener('click', function(){
  clicks ++;
  $("#counter").html("You clicked on the cat " + clicks + " times.")
}, false);

