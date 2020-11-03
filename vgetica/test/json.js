
// CITANJE JSON FAJLA
window.onload = function(){
	var b = document.getElementById('getBtn');
	
	b.addEventListener("click",function(){
		var xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function(){
			if(xhttp.readyState == 4 && xhttp.status == 200){

				var jsonPerson = JSON.parse(xhttp.responseText);

				document.getElementById('contentContainer').innerHTML = "first name: "+jsonPerson.firstName + "<br>" 
				+ "last name: " + jsonPerson.lastName + "<br>" + "hair color: " + jsonPerson.hairColor  ; 

				}

			}
			xhttp.open("GET", "data.json", true);
			xhttp.send();		
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