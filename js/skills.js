//Basic Attacks
function basicAttackPhys(character, enemy) {
	return Math.max((character.strength * (player.agility * .2) - enemy.physicalDefense), 1);
}

function basicAttackMag(character, enemy) {
	return Math.max((character.intelligence * (player.agility * .2) - enemy.magicalDefense), 1);
}

