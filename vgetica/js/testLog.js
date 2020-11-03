



function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function prolaz(){

		var usr = document.getElementById("ulog");
		var pass = document.getElementById("plog");
		var poruka = document.getElementById("vozdrica");
		var novaPoruka = document.getElementById("poruka");
		var linkara = document.getElementById("vozdricah1");


	

	if (usr.value==="dov" && pass.value==="dovla") {
		
		window.open("dov/index_dov.html");
		
		
	}else
	if (usr.value==="mar" && pass.value==="marija") {
		
		window.open("mar/index_mar.html");
		
		
	}else
	if (usr.value==="bok" && pass.value==="bokaco") {
		
		window.open("bok/index_bok.html");
		
		
	}else{
		novaPoruka.innerHTML = "ALOOOOOO NE VALJAAAAA";
		alert("ooooo nesto smrdi ovdjeeee!!!");
	}
}

