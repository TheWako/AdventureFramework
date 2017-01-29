"use strict";

var txt = "Hey, salut ! Ravi de te voir ! Bienvenue dans le monde de POKéMONS ! Je m'appelle SAPIN. Les gens m'appellent aussi le PROFESSEUR POKéMON. Ce monde est peuplé par des créatures appelés POKéMONS. Pour certaines personnes, les POKéMONS sont des animeaux de compagnie. D'autres les utilisent pour des combats. Et en ce qui me concerne : Mon métier est d'étudier les POKéMONS. Maintenant, parle-moi un peu de toi. Es-tu un garçon ? Ou es-tu une fille ? Très bien. Comment t'appelles-tu ? D'accord, donc ton nom est [PLAYER]. Lui, c'est mon petit-fils, Red. Vous êtes rivaux depuis votre enfance. Tu vas avoir besoin d'un POKéMON pour commencer ton aventure ! Je te laisse choisir parmi ces 3 POKéMONS. Choisis bien ton POKéMON, tu ne pourras pas le changer après :";
var display = document.getElementById('sapintxt');
var choose = document.getElementById('choose');
var space = false;
var speed = 150;

document.onkeyup = function(evt) {
	if (evt.keyCode == 32) {
	  space = false;
	}
}
document.onkeydown = function(evt) {
	if (evt.keyCode == 32) {
	  space = true;
	  speed = 40;
	}
};
 
for(var i = 0; i < txt.length; i++) {
    (function(i) {
        setTimeout(function() {
            display.innerHTML += txt.charAt(i);
        }, i * speed);
    }(i));
    if(txt.length == i){
    	choose.style.opacity = "1";
    }
}

