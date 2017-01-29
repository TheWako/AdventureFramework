<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <title>Pokémon Nocturne</title>
    <link rel="stylesheet" type="text/css" href="/assets/css/style.css">
</head>
<body>


	<h1>Combat vs Red !</h1>

	<div class="introfight">
		<p id="fighttxt">

		</p>
	</div>

	<img class="redpoke" src="assets/img/">
	<img class="playerpoke" src="assets/img/">

<script type="text/javascript" >
	var introfight = "Red a pris le POKéMON [inverse]";
	var fighttxt = document.getElementById('fighttxt');

	for(var i = 0; i < introfight.length; i++) {
	 	(function(i) {
	        setTimeout(function() {
	            fighttxt.innerHTML += introfight.charAt(i);
	        }, i * 100);
		}(i));
	}
</script>
</body>
</html>