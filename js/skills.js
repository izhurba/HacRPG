//Basic Attack
function basicAttackPhys(Player) {
	return Math.max((player.strength * (player.agility * .2) - enemy.physicalDefense), 1); 
}

function basicAttackMag(Player) {
	return Math.max((player.intelligence * (player.agility * .2) - enemy.magicalDefense), 1); 
}
