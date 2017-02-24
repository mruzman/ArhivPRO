<?php

include_once "./baza_class.php";
$baza = new Baza();
$baza->spojiDB();


$input=$_GET['source'];

if($input=="dohvati_datoteke"){
$upit="SELECT datoteka FROM tablica";
$rezultati = $baza->selectDB($upit);
echo json_encode($rezultati);
}
//dodati s servera sve datoteke u listu
?>

<html>
    <head>
        <title>Marko Ružman - Posao</title>
        <script src="preuzmi.js "></script>
        <meta charset="UTF-8">
    </head>
    <body>
        <input id="gumb_nesort" type="submit" value="Pogledaj nesortirano" 
        <input id="gumb_sortiraj" type="submit" value="Sortiraj" />
    </body>
</html>

