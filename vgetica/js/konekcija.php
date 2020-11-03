<?php

	$ime = $_POST['ime'];
	$prezime = $_POST['prezime'];
	$adresa = $_POST['adresa'];
	$grad = $_POST['grad'];
	$telefon = $_POST['telefon'];
	$email = $_POST['email'];
	$pol = $_POST['pol'];

	// $nazivArtikla = $_POST['nazivArtikla'];
	// $cena = $_POST['cena'];
	// $sajt = $_POST['sajt'];
	// $spakovano = $_POST['spakovano'];
	// $prijavljeno = $_POST['prijavljeno'];

	//db conncection

	$conn= new mysqli('localhost','root','duca','vg');	
	if($conn->connect_error){
		die('Connection Failed :'.$conn->connect_error);
	}else {
		$stmt= $conn->prepare("insert into customers (ime, prezime, adresa, grad, telefon, email, pol) values(?,?,?,?,?,?,?)");
		$stmt->bind_param("ssssiss", $ime, $prezime, $adresa, $grad, $telefon, $email, $pol);
		$stmt->execute();

		// $stmt1= $conn->prepare("insert into product (nazivArtikla, cena) values(?,?)");
		// $stmt1->bind_param("si", $nazivArtikla, $cena);
		// $stmt1->execute();	

		echo "registracija je uspjela!!!";
		$stmt->close();
		// $stmt1->close();
		$conn->close();
	}

?>