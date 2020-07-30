class Player {
	constructor(name, job) {
		this.name = name;
		this.level = 1;
		this.currentHealth = 50;
		this.maxHealth = 50;
		this.strength = 10;
		this.intelligence = 10;
		this.agility = 5;
		this.currentStamina = 20;
		this.maxStamina = 20;
		this.currentMana = 20;
		this.maxMana = 20;
		this.physicalDefense = 10;
		this.magicalDefense = 10;
		this.hack= 0;
		this.job = job;
		this.leftWeapon;
		this.rightWeapon;
		this.rightRing;
		this.leftRing;
		this.head;
		this.body;
		this.legs;
	}

}

class Job {
	constructor(name) {			
	
		switch(name) {
		
			case 'Warrior':
				name = "Warrior";
				this.strY = 1.4;
				this.intY = 0.8;
				this.agiY = 1.1;
				this.hpY = 1.25;
				this.stamY = 1.15;
				this.manaY = 0.8;
				this.physDefY = 1.1;
				this.magDefY = 0.9;
				break;

			case 'Mage':
				name = "Mage";
				this.strY = 0.75;
				this.intY = 1.5;
				this.agiY = 0.95;
				this.hpY = 1;
				this.stamY = 0.95;
				this.manaY = 1.3;
				this.physDefY = 0.9;
				this.magDefY = 1.2;
				break;
			case 'Ranger':
				name = "Ranger";
				this.strY = 1.1;
				this.intY = 0.8;
				this.agiY = 1.3;
				this.hpY = 1.1;
				this.stamY = 1.3;
				this.manaY = 0.8;
				this.physDefY  = 1;
				this.magDefY = 1;
				break;
			default:
				name = "Beginner";
				this.strY = 1;
				this.intY = 1;
				this.agiY = 1;
				this.hpY = 1;
				this.stamY = 1;
				this.manaY = 1;
				this.physDefY = 1;
				this.magDefY = 1;

		}
	}
}
