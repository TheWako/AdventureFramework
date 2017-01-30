"use strict";

function dialogueFunction(block, counter){
	var tbTxt = ['Hey, salut ! Ravi de te voir ! <span class="blink">▼</span>',
	'Bienvenue dans le monde de Pokémon ! Je m\'appelle SAPIN. Les gens m\'appellent aussi le PROFESSEUR POKéMON. <span class="blink">▼</span>',
	'Ce monde est peuplé par des créatures appelés POKéMONS. Pour certaines personnes, les POKéMONS sont des animeaux de compagnie. D\'autres les utilisent pour des combats. <span class="blink">▼</span>',
	'Et en ce qui me concerne : Mon métier est d\'étudier les POKéMONS. <span class="blink">▼</span>',
	'Maintenant, parle-moi un peu de toi. Es-tu un garçon ? Ou es-tu une fille ? <span class="blink">▼</span>',
	'Très bien. Comment t\'appelles-tu ? <span class="blink">▼</span>',
	'D\'accord, donc ton nom est '+nameTrainer+'. <span class="blink">▼</span>' ,
	'Il y a aussi mon petit-fils, Red. Vous êtes rivaux depuis votre enfance. <span class="blink">▼</span>',
	'Tu vas avoir besoin d\'un POKéMON pour commencer ton aventure ! Je te laisse choisir parmi ces 3 POKéMONS. Choisis bien ton POKéMON, tu ne pourras pas le changer après <span class="blink">▼</span>'];
	counter = counter+1;
	$(block).typed({
	    strings: [tbTxt[counter]],
	    typeSpeed: 5
	});
	return counter;
}

function myAjax() {
      $.ajax({
           type: "POST",
           url: '/fight.php',
           data:{action:'call_this'},
           success:function(html) {
             alert(html);
           }

      });
 }

var counter = 0;
var nameTrainer="";

$(function (){
	counter = dialogueFunction('.txtintro', -1);
	$("body").click(function() {
		var tbChar = $('.txtintro').text().split("");
		if(tbChar[tbChar.length-1] == "▼" && $('.txtintro').text() != 'Très bien. Comment t\'appelles-tu ? ▼' && $('.txtintro').text() != 'Maintenant, parle-moi un peu de toi. Es-tu un garçon ? Ou es-tu une fille ? ▼' && $('.txtintro').text() != 'Tu vas avoir besoin d\'un POKéMON pour commencer ton aventure ! Je te laisse choisir parmi ces 3 POKéMONS. Choisis bien ton POKéMON, tu ne pourras pas le changer après ▼'){
			console.log(counter);
			counter = dialogueFunction('.txtintro', counter);
		}else if($('.txtintro').text() == 'Maintenant, parle-moi un peu de toi. Es-tu un garçon ? Ou es-tu une fille ? ▼'){
			$('.prof').css('display','none');
			$('.boy').css('display','inline-block');
			$('.girl').css('display','inline-block');
			$('.txtintro').text() == "";
		}else if($('.txtintro').text() == 'Très bien. Comment t\'appelles-tu ? ▼'){
			$('.txtintro').text() == "";
			nameTrainer = prompt("Très bien. Comment t'appelles-tu ?","");
			if (nameTrainer != null) {
    			counter = dialogueFunction('.txtintro', counter);
			}
		}else if($('.txtintro').text() == 'Tu vas avoir besoin d\'un POKéMON pour commencer ton aventure ! Je te laisse choisir parmi ces 3 POKéMONS. Choisis bien ton POKéMON, tu ne pourras pas le changer après ▼'){
			$('.prof').css('display','none');
			$('.imgPokemon').css('display','inline-block');
			$('.txtintro').text() == "";
		}
	});
	$(".boy").click(function() {
		$('.prof').css('display','inline-block');
		$('.boy').css('display','none');
		$('.girl').css('display','none');
		counter = dialogueFunction('.txtintro', counter);
	});

	$(".girl").click(function() {
		$('.prof').css('display','inline-block');
		$('.boy').css('display','none');
		$('.girl').css('display','none');
		counter = dialogueFunction('.txtintro', counter);
	});

	$(".imgPokemon").click(function() {
		$('.txtintro').text() == "";
		$('#submit').css('display','block');
		$(".txtintro").typed({
		    strings: ['Vous avez choisi ' + $(this).attr('alt') + '. Etes vous sûr de votre choix.'],
		    typeSpeed: 5
		});
	});
});