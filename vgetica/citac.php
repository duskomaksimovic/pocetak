<!DOCTYPE html>
<html lang="en">
<head>
	<title>citac</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
 	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>
	<?php 
$username = "root"; 
$password = ""; 
$database = "vg"; 
$mysqli = new mysqli("localhost", $username, $password, $database); 
$query = "SELECT * FROM customers";


echo '
   

      <div class="container">
        <h2>Hoverable Dark Table</h2>
        <p>The .table-hover class adds a hover effect (grey background color) on table rows:</p>            
        <table class="table table-dark table-hover">
        <thead>
        <tr>
         <th>ime</th>
          <th>prezime</th>
          <th>adresa</th>
          <th>grad</th>
          <th>telefon</th>
          <th>email</th>
          <th>pol</th>
        </tr>
        </thead>
       
      ';

if ($result = $mysqli->query($query)) {
    while ($row = $result->fetch_assoc()) {
        $ime = $row["ime"];
        $prezime = $row["prezime"];
        $adresa = $row["adresa"];
        $grad = $row["grad"];
        $telefon = $row["telefon"];
        $email = $row["email"];
        $pol = $row["pol"]; 

        echo ' <tbody>
                <tr> 
                  <td>'.$ime.'</td> 
                  <td>'.$prezime.'</td> 
                  <td>'.$adresa.'</td> 
                  <td>'.$grad.'</td> 
                  <td>'.$telefon.'</td>
                  <td>'.$email.'</td> 
                  <td>'.$pol.'</td> 
               </tr>
              </tbody>';
    }
    $result->free();
} 
?>

</body>
</html>

 <!--// <table border="0" cellspacing="2" cellpadding="2"> 
    //   <tr> 
    //       <td> <font face="Arial">ime</font> </td> 
    //       <td> <font face="Arial">prezime</font> </td> 
    //       <td> <font face="Arial">adresa</font> </td> 
    //       <td> <font face="Arial">grad</font> </td> 
    //       <td> <font face="Arial">telefon</font> </td> 
    //       <td> <font face="Arial">email</font> </td> 
    //       <td> <font face="Arial">pol</font> </td> 
    //   </tr> --> 

    <!-- <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>
          <tr>
           <td>July</td>
           <td>Dooley</td>
           <td>july@example.com</td>
          </tr>
       </tbody>
     </table>
    </div> -->