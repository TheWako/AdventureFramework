"use strict";

var txt = "Hey, salut ! Ravi de te voir ! Bienvenue dans le monde de POKéMONS ! Je m'appelle SAPIN. Les gens m'appellent aussi le PROFESSEUR POKéMON. Ce monde est peuplé par des créatures appelés POKéMONS. Pour certaines personnes, les POKéMONS sont des animeaux de compagnie. D'autres les utilisent pour des combats. Et en ce qui me concerne : Mon métier est d'étudier les POKéMONS. Maintenant, parle-moi un peu de toi. Es-tu un garçon ? Ou es-tu une fille ?";
var txt2 = "Très bien. Comment t'appelles-tu ?";
var txt3 = "D'accord, donc ton nom est [PLAYER]. Il y a aussi mon petit-fils, Red. Vous êtes rivaux depuis votre enfance. Tu vas avoir besoin d'un POKéMON pour commencer ton aventure ! Je te laisse choisir parmi ces 3 POKéMONS. Choisis bien ton POKéMON, tu ne pourras pas le changer après :";
var display = document.getElementById('sapintxt');
var choose = document.getElementById('choose');
var garcon = document.getElementById('garcon');
var fille = document.getElementById('fille');

for(var i = 0; i < txt.length; i++) {
 	(function(i) {
        setTimeout(function() {
            display.innerHTML += txt.charAt(i);
            if(i == 446){
				garcon.style.display = "inline";
				fille.style.display = "inline";
				garcon.onclick = function(){
					garcon.style.display = "none";
					fille.style.display = "none";
					display.innerHTML = "";
				}
				fille.onclick = function(){
					fille.style.display = "none";
					garcon.style.display = "none";
					display.innerHTML = "";
				}
			}
        }, i * 5);
	}(i));
}

if(display.innerHTML == ""){
	for(var y = 0; y < txt2.length; y++) {
		(function(y) {
	        setTimeout(function() {
	            display.innerHTML += txt2.charAt(y);
	        }, y * 40);
	    }(y));
	}
}

if(i == 759){
	console.log(i);
	choose.style.display = "inline";
}