// pravljenje json dokumenta
"use strict"
window.onload = function(){

	var b = document.getElementById('getBtn');
	
	b.addEventListener("click",function(){	
		var msgs = {
			msg1 : "aloooo ajmo svi",
			msg2 : "eo je druga por",
			msg3 : "op op eo je i treca X)"
		};

		var novijson = JSON.stringify(msgs);
		console.log("oe texta napravitog: "+novijson);
		
		var fs = require('fs');
		fs.writeFile("thing.json", novijson, function(err, result) {
    if(err) console.log('error', err);

		});
	});
	}

// // pravljenje json fajla

// // 1step : make your obj:
// var dict = {"one" : [15, 4.5],
//     "two" : [34, 3.3],
//     "three" : [67, 5.0],
//     "four" : [32, 4.1]};

// // 2step : make it JSON
// var dictstring = JSON.stringify(dict);

// // 3- save your json file and dont forget that fs.writeFile(...)
//  // requires a third (or fourth) parameter which is a callback
//   // function to be invoked when the operation completes

//   var fs = require('fs');
// fs.writeFile("thing.json", dictstring, function(err, result) {
//     if(err) console.log('error', err);
// });