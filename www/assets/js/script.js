"use strict";

var chaine = document.getElementById('sapintxt'); 
var nb_car = chaine.length; 
var tableau = chaine.split("");
texte = new Array;
var txt = '';
var nb_msg = nb_car - 1;
for (i = 0; i < nb_car; i++) {
	texte[i] = txt + tableau[i];
	var txt = texte[i];
}

actual_texte = 0;