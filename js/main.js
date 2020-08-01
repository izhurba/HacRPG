var player;
var job;
var enemy;

function startGame() {
	var x = document.getElementById("startScreen");
 	x.style.display = "none";
	var y = document.getElementById("mainScreen");
	y.style.display = "block";
	var f = document.getElementById("statsFooter");
	f.style.display = "block";
	
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

function updateHealth() {
	var health = document.getElementById("health");
	health.value = 100 * (player.maxHealth / player.currentHealth);
}

function nextLevel(level) {
	return math.floor(1000 * (level ^ 1.2));
}


