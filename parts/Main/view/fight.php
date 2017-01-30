<?php
include('../config/connectDB.php');
$reponse = $bdd->query('SELECT * FROM pokemon where id=' + $_POST['pokemonChoice']);
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <title>Pokémon Nocturne</title>
    <link rel="stylesheet" type="text/css" href="/assets/css/style.css">
</head>
<body>
<?php

				while ($donnees = $reponse->fetch())
				{
	 				echo $donnees['spriteFront'];
				}
				$reponse->closeCursor();
?>
</body>
</html>