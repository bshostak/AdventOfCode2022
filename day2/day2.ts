import {readFile} from "fs";

/*
Rock - 1
A
X

Paper - 2
B
Y

Scissors - 3
C
Z

Outcome
0 Lose
3 Draw
6 Win
*/

function gameScore(opponentChoice: string, playerChoice: string){
  //opponent chooses rock
  if(opponentChoice === "A") {
    if (playerChoice === "X") {
      //player chooses rock
      return 3;
    } else if(playerChoice === "Y") {
      // player chooses paper
      return 6;
    } else {
      return 0;
    }
  }

  //opponent chooses paper
  if (opponentChoice === "B") {
    if(playerChoice === "X") {
      //player chooses rock
      return 0;
    } else if(playerChoice === "Y") {
      //player chooses paper
      return 3;
    } else {
      return 6;
    }
  }

  //opponent chooses scissors
  if (opponentChoice === "C") {
    if (playerChoice === "X") {
      //player chooses rock
      return 6;
    } else if(playerChoice === "Y") {
      //player chooses paper
      return 0;
    } else {
      return 3;
    }
  }

  return 0;
}

function choiceScore(playerChoice: string) {
  if (playerChoice === "X") return 1;
  if (playerChoice === "Y") return 2;
  if (playerChoice === "Z") return 3;
  return 0;
}

function playGame(opponentChoice: string, playerChoice: string) {
  const scoreFromGame = gameScore(opponentChoice, playerChoice);
  const scoreFromChoice = choiceScore(playerChoice);
  return scoreFromGame + scoreFromChoice;
}

function runStrat() {
  readFile('./day2data.txt', "utf8", (err, data) => {
    if (err) throw err;
    const games = data.split("\n");
    let score = 0;
    for (const game of games) {
      score += playGame(game[0], game[2]);
    }
    console.log({score});
  })
}

runStrat();

// Part 2

/*
Rock - 1
A
X

Paper - 2
B
Y

Scissors - 3
C
Z

Outcome
0 Lose
3 Draw
6 Win
*/

/* 
X = Loss
Y = Draw
Z = Win
*/

function getPlayerChoice(opponentChoice: string, desiredOutcome: string) {
  //loss
  if (desiredOutcome === "X") {
    if (opponentChoice === "A") {
      //opponent chooses rock
      return "Z"; //player chooses scissors
    } else if (opponentChoice === "B") {
      //opponent chooses paper
      return "X"; //player chooses rock
    } else {
      return "Y"; //player chooses paper
    }
  }

  //draw
  if (desiredOutcome === "Y") {
    if (opponentChoice === "A") {
      //opponent chooses rock
      return "X"; //player chooses rock
    } else if (opponentChoice === "B") {
      //opponent chooses paper
      return "Y"; //player chooses paper
    } else {
      return "Z"; //player chooses scissors
    }
  }

  //win
  if (desiredOutcome === "Z") {
    if (opponentChoice === "A") {
      //opponent chooses rock
      return "Y"; //player chooses paper
    } else if (opponentChoice === "B") {
      //opponent chooses paper
      return "Z"; //player chooses scissors
    } else {
      return "X"; //player chooses rock
    }
  }

  return '';
}

function playGameTwo(opponentChoice: string, desiredOutcome: string) {
  //get recommended player choice based on new strategy
  const playerChoice = getPlayerChoice(opponentChoice, desiredOutcome);
  // get game score with known player choice
  const scoreFromGameTwo = gameScore(opponentChoice, playerChoice);
  const scoreFromChoice = choiceScore(playerChoice);
  return scoreFromGameTwo + scoreFromChoice;
}

function runStratTwo() {
  readFile('./day2data.txt', "utf8", (err, data) => {
    if (err) throw err;
    const games = data.split("\n");
    let scoreTwo = 0;
    for (const game of games) {
      scoreTwo += playGameTwo(game[0], game[2]);
    }
    console.log({scoreTwo});
  })
}

runStratTwo();