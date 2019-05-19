var catnames = ['Pickels', 'Paws', 'Salt & Pepper', 'Dominoe', 'Cardboard'];
var srcs = ["https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
"https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
"https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
"https://kittentoob.com/wp-content/uploads/2018/11/Cat-Toys.jpg",
"https://boygeniusreport.files.wordpress.com/2015/06/funny-cat.jpg?quality=98&strip=all&w=782"];

for (var i = 0; i < catnames.length; i++) {
	$('#catList').append('<li>'+ catnames[i] + '</li>');

	$('#cat-name').html(catnames[i]);
	
	$('#cat-pic').html('<img src=' + srcs[i] + '>');
}





  
  //$("#counter1").html("You clicked on " + catname1 + " " + clicks1 + " times.");
//}, false);

//elem2.addEventListener('click', function() {
  //clicks2 ++;
  //$("#counter2").html("You clicked on " + catname2 + " " + clicks2 + " times.");
//}, false);
