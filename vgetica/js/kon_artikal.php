<?php

	$nazivArtikla = $_POST['nazivArtikla'];
	$cena = $_POST['cena'];

	$sajt = $_POST['sajt'];
	// $spakovano = $_POST['spakovano'];
	// $prijavljeno = $_POST['prijavljeno'];

	//db conncection

	$conn= new mysqli('localhost','root','duca','vg');	
	if($conn->connect_error){
		die('Connection Failed :'.$conn->connect_error);
	}else {
		$stmt1= $conn->prepare("insert into product (nazivArtikla, cena, sajt) values(?,?,?)");
		$stmt1->bind_param("sis", $nazivArtikla, $cena, $sajt);
		$stmt1->execute();	

		echo "registracija je uspjela!!!";
		
		$stmt1->close();
		$conn->close();
	}

?>