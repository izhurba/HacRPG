var player;
var job;
var enemy;

function startGame() {
	var i;
	
	var x = document.getElementsByClassName("startScreen");
 	
 	for (i = 0; i < x.length; i++) {
 		x[i].style.display = "none";
 	}

	var y = document.getElementsByClassName("mainScreen");
 	
 	for (i = 0; i < y.length; i++) {
 		y[i].style.display = "block";
 	}

	var pClass = document.getElementsByName("playerClass");
	for(i = 0; i < pClass.length; i++) {
		if(pClass[i].checked) {
			job = new Job(pClass[i].value);
		}
	}
	player = new Player(document.getElementById("pName").value, job);
	var health = document.getElementById("playerHealth");
	health.value = 100 * (player.maxHealth / player.currentHealth);
	var name = document.getElementById("playerName").innerHTML = player.name;

}

/*

window.addEventListener("click", function(evt) {
		characterMove(evt);
}, false)



function characterMove(event) {
	x = event.clientX;
	y = event.clientY;
	
}
*/


function updateHealth() {
	var health = document.getElementById("health");
	health.value = 100 * (player.maxHealth / player.currentHealth);
}


function startBattle(battleArea, player) {
	enemy = new Enemy(enemyName, enemyLevel, enemyType);

}



function addExp(character, exp) {
	character.exp += exp;
	if (character.exp >= character.nextLevelExp) {
		levelUp(character);
	}
}

function levelUp(character) {
	
	character.maxHealth += Math.floor(((character.job.hpY) * character.maxHealth) - character.maxHealth);
	character.strength += Math.floor(((character.job.strY) * character.strength) - character.strength);
	character.intelligence += Math.floor(((character.job.intY) * character.intelligence) - character.intelligence);
	character.agility += Math.floor(((character.job.agiY) * character.agility) - character.agility);
	character.maxStamina += Math.floor(((character.job.stamY) * character.maxStamina) - character.maxStamina);
	character.maxMana += Math.floor(((character.job.manaY) * character.maxMana) - character.maxMana);
	character.physicalDefense += Math.floor(((character.job.physDefY) * character.physicalDefense) - character.physicalDefense);
	character.magicalDefense += Math.floor(((character.job.magDefY) * character.magicalDefense) - character.magicalDefense);
	
	if (character.level % 10 == 0) {
		character.hack += 1;
	}

	character.nextLevelExp = math.floor(1000 * (character.level^ 1.2));
}




