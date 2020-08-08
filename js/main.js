var player;
var job;
var enemy;
var canvas;
var ctx;
var deltaX = 0;
var deltaY = 0;


function startGame() {
	var x = document.getElementById("startScreen");
 	x.style.display = "none";
	var y = document.getElementById("mainScreen");
	y.style.display = "block";

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
	
	canvas = document.getElementById("mapCanvas");
	ctx = canvas.getContext("2d");
	drawCanvas();
	drawTri();

}



function drawCanvas() {
	canvas.width = window.innerWidth - 250;
	canvas.height= window.innerHeight- 200;
	ctx.fillStyle = "#777777";
	ctx.fillRect(0,0, canvas.width, canvas.height);
}

function redraw() {
	//Redraw canvas on events
}

function drawTri() {
	ctx.clearRect(0,0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.moveTo(200 + deltaX,100 + deltaY);
	ctx.lineTo(170 + deltaX,150 + deltaY);
	ctx.lineTo(230 + deltaX,150 + deltaY);
	ctx.closePath();

	ctx.lineWidth = 10;
	ctx.strokeStyle = "rgba(102, 102, 102, 1)";
	ctx.stroke();

}


window.addEventListener("keydown", characterControl, false);

function characterControl(e) {
	switch(e.keyCode) {
		case 65:
			//KeyA
			deltaX -= 2;
			break;

		case 68:
			//KeyD
			deltaX += 2;
			break;

		case 87:
			//KeyW
			deltaY -= 2;
			break;

		case 83:
			//KeyS
			deltaY += 2;
			break;
	}

	drawTri();
}



function updateHealth() {
	var health = document.getElementById("health");
	health.value = 100 * (player.maxHealth / player.currentHealth);
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




