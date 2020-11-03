window.onload = function(){
	var b = document.getElementById('getBtn');
	
	b.addEventListener("click",function(){
		var xhttp = new XMLHttpRequest();

		xhttp.onreadystatechange = function(){
			if(xhttp.readyState == 4 && xhttp.status == 200){

				document.getElementById('contentContainer').innerHTML = xhttp.responseText; 

				}

			}
			xhttp.open("GET", "./Text.txt", true);
			xhttp.send();		
		});
}

