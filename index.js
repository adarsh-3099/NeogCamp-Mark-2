const read = require("readline-sync")

var userName = read.question("Tell me your name: ");
var welcomeMsg = "Welcome " + userName + " Let's see how much you know about movies and shows p.s. some questions are based on my personal opinion ;__;"
console.log("\n" + welcomeMsg)

console.log("\nThere will be some MCQ questions where you have to enter your choice (no only)\nWhich you feel is correct option.\nYou will get +1 score for every right answer.\n+1 Level for two consecutive correct answers and -1 level for every wrong answer\nSo, let's start")

var score = 0;
var level = 1;

function checkLevel(score, result) {
	if (result == 't') {
		if (score % 2 == 0) {
			level += 1;
		}
	}
	if (level < 1) {
		level = 1;
	}
}

function question(que, options, corAns) {
	console.log("\n" + que)
	for (var i = 0; i < options.length; i++) {
		console.log(`${i + 1}. ${options[i]}`);
	}
	usrAns = read.question("Your Choice: ");
	if (usrAns == corAns) {
		score += 1;
		checkLevel(score, 't');
		console.log('\nCongratulations..! You are right');
	}

	else {
		level -= 1;
		checkLevel(score, 'f')
		console.log(`\nDamn..! You are wrong..! Correct Answer is ${options[corAns - 1]}.`);
	}
	console.log(`Your current Score: ${score}\nYour current Level: ${level}`)
}

question("For which film Brad Pitt won an oscar?", ["Snatch", "OUTIH", "Moneyball", "Ocean's 11"], 2);
question("Which one of this show is time travel related anime?", ["Haikyu", "Breaking Bad", "Steins;Gate", "Attack on Titan"], 3);
question("Eren Jaegar is protagonist of which anime?", ["Attack on Titan", "Terror in Resonance", "FullMetal Alchemist Brotherhood", "Ocean's 11"], 1);
question("Which one of this movie had Marlon Brando?", ["Sicario", "Arrival", "Scarface", "On the WaterFront"], 4);
question("Which Show is Better?", ["Steins;Gate", "Dark"], 1);
question("Which is the highest rated show among the following shows?", ["Steins;Gate", "Dark","Breaking Bad","Game of Thrones"], 3);

function finalRes(score) {
	if (score >= 6) {
		console.log("\n\nWoah you know quite well")
	}
	else {
		console.log("\n\nYou doesn't know me very well")
	}
	console.log(`\nYou Scored ${score}/6. And managed to reach Level ${level}.\nGood Bye ${userName}..! See You Again`)
}

finalRes(score);