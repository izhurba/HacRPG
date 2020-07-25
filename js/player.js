class Player {
	constructor(name, level, strength, intelligence, agility, stamina,  mana, job) {
		this.name = name;
		this.level = level;
		this.strength = strength;
		this.intelligence = intelligence;
		this.agility = agility;
		this.stamina = stamina;
		this.mana = mana;
		this.hack= 0;
		this.job = job;
	}

}

class Job {
	constructor(name) {			
	
		this.name = name;
		var strY;
		var intY;
		var agiY;
		var stamY;
		var manaY;
	
		switch(name) {
		
			case 'Warrior':
				name = "Warrior";
				strY = 1.3;
				intY = 0.75;
				agiY = 1.05;
				stamY = 1.1;
				manaY = 0.8;
				break;

			case 'Mage':
				name = "Mage";
				strY = 0.75;
				intY = 1.3;
				agiY = 0.95;
				stamY = 0.9;
				manaY = 1.1;
				break;
			case 'Ranger':
				name = "Ranger";
				strY = 1.1;
				intY = 0.7;
				agiY = 1.3;
				stamY = 1.2;
				manaY = 0.7;
				break;
			default:
				name = "Beginner";
				strY = 1;
				intY = 1;
				agiY = 1;
				stamY = 1;
				manaY = 1;

		}
	}
}
