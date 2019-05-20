var catnames = ['Pickels', 'Paws', 'Salt & Pepper', 'Dominoe', 'Cardboard'];
var srcs = ["https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
"https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
"https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
"https://kittentoob.com/wp-content/uploads/2018/11/Cat-Toys.jpg",
"https://boygeniusreport.files.wordpress.com/2015/06/funny-cat.jpg?quality=98&strip=all&w=782"];
var counters = [0,0,0,0,0];
var attached = [false,false,false,false,false]

for (var i = 0; i < catnames.length; i++) {
	$('#catList').append('<li id=cat' + i + '>'+ catnames[i] + '</li>');

	document.getElementById("cat"+ i).addEventListener('click', (function(icopy){
		return function(){
		$('#catName').html(catnames[icopy]);
		$('#catPic').html('<img src= '+ srcs[icopy] + '>');
		$('#counter').html('');
		if (attached[icopy] == false){
		 document.getElementById("catPic").addEventListener('click', function(){
			counters[icopy] ++;
			attached[icopy] = true;
			$('#counter').html("You clicked on " + catnames[icopy] + " " + counters[icopy] + " times.");

		});
		};
	};
		})(i));


};