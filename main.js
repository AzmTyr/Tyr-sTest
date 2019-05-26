var critMultee = 0.5;
var avoidMultee = 0.1;
function Fighter(agility, strenght, hitpoints, name) {
	this.agility = agility; 
	this.strenght = strenght;
	this.hitpoints = hitpoints;
	this.name = name;
} 
function battle(fighter1, fighter2){
	var attack, deff;
	if (fighter1.agility > fighter2.agility) {
		attack = fighter1;
		deff = fighter2;
	} 
	else if (fighter2.agility > fighter1.agility) {
		attack = fighter2;
		deff = fighter1;
	}
	else {
		var random = Math.random();
		attack = random >= 0.5 ? fighter1 : fighter2;
		deff = random < 0.5 ? fighter1 : fighter2;		
	}
	
	while (fighter1.hitpoints > 0 && fighter2.hitpoints > 0) {
		var damage = attack.strenght + calcCrit(attack.agility, attack.strenght) - calcAvoid(deff.agility, attack.strenght);
		deff.hitpoints = deff.hitpoints - damage;
		console.log(attack.name + ' deal ' + damage + ' to ' + deff.name); 
		
		var buffer = attack;
		attack = deff;
		deff = buffer;
	} 
	var win = fighter1.hitpoints > 0 ? fighter1 : fighter2;
	console.log(win.name + ' Wins, FATALITY');
		
	/*if (fighter1.hitpoints > 0) {
		console.log(fighter1.name + ' Wins, FATALITY');
	}
	else {
		console.log(fighter2.name + ' Wins, ANIMALITY');
	} */
}

function calcCrit(agility, strenght){
	var result = 0;
	
	var random = Math.random() * 100;
	result = random > agility ? result : strenght * critMultee;
	
	return result;
}

function calcAvoid(agility, strenght){
	var result = 0;
	
	var random = Math.random() * 100;
	result = random > agility ? result : strenght * avoidMultee;
	
	return result;
}
