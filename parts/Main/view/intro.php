<?php
global $bdd;
$reponse = $bdd->query('SELECT * FROM pokemon');

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <title>Pokémon Nocturne</title>
    <script src='/assets/js/jquery-2.2.0.min.js'></script>
	<script src='/assets/js/typed.js'></script>
	<script type="text/javascript" src="/assets/js/script.js"></script>
    <link rel="stylesheet" type="text/css" href="/assets/css/style.css">
</head>
<body>
	<div class="container">
		<div class=imgBox>
			<img class="prof" src="assets/img/professor.png">
			<img class="boy" src="assets/img/pkmTrainer_boy.png">
			<img class="girl" src="assets/img/pkmTrainer_girl.png">
			<form id="pokemonForm" action="fight" method="POST">
				<?php

				while ($donnees = $reponse->fetch())
				{
			?>
			    <label><input type="radio" id="pokemonChoice" name="pokemonChoice" value="<?php echo $donnees['id'] ?>"/><img class="imgPokemon" alt="<?php echo $donnees['name'] ?>" src="<?php echo $donnees['imgPokemon'] ?>"></label>
					<?php
				}
				$reponse->closeCursor();
					?>
				<input type="submit" id='submit'>
				</form>	
		</div>
		<div class="dialogueBox">
			<img src="assets/img/dialogueBox.png">
			<div class="txtintro"></div>
		<div>
	</div>
</body>
</html>