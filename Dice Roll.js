/* Want to roll dice for input of xdy + z, where */
/* x = number of dice being rolled. y = type of dice. z = modifier to the dice roll. */
/* rolls an x amount of y dice n times and adds z to each roll. */

function roll(dice) {
	var splitdice = dice.split("d");
	if (splitdice[0] === "") {
		splitdice[0] = 1;
		};
	var splitdice2;
	if (dice.indexOf("-") > 0) {
		splitdice2 = splitdice[1].split("-");
	}
	else {
		splitdice2 = splitdice[1].split("+");
	}
		var finalsplit = [splitdice[0],splitdice2[0],splitdice2[1]];
		if (finalsplit[2] === undefined) {
			finalsplit[2] = 0;
		}
		else if (dice.indexOf("-") > 0) {
			finalsplit[2] = -parseInt(finalsplit[2]);
		}
		else {finalsplit[2] = parseInt(finalsplit[2]);}
	var rollsum = 0;
	for (let i = 0; i < parseInt(finalsplit[0]); i+=1) {
			rollsum += (Math.floor(Math.random() * (parseInt(finalsplit[1]))) + 1);
	}
		return "You rolled a " + (rollsum + finalsplit[2]) + ".";
}
