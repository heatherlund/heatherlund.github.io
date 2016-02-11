// Javascript game created by Heather Lund

// Variables
var mysteryNumber = 7;
var playerGuess = 0;
var guessesRemaining = 10;
var guessesMade = 0;
var playerScore = 0;


// Initialize the input and output fields
var output = document.querySelector("#output");
var input = document.querySelector("#input");
var outputScore = document.querySelector("#outputScore");

// Button Code
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler);

function clickHandler()
{
	playerGuess = parseInt(input.value);

	
	if(playerGuess > mysteryNumber)
	{
		output.innerHTML = "That's too high!";
		guessesMade ++;
		guessesRemaining --;
		
			if(guessesMade === 1)
			{
				outputScore.innerHTML = "You have made " + guessesMade + " guess and have " + guessesRemaining + " guesses left."
			}
			
			else if(guessesMade > 1)
			{
				outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guesses left."
			}
	}
	
	else if(playerGuess < mysteryNumber)
	{
		output.innerHTML = "That's too low!";
		guessesMade ++;
		guessesRemaining --;
		outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guesses left."
			
			if(guessesMade === 1)
			{
				outputScore.innerHTML = "You have made " + guessesMade + " guess and have " + guessesRemaining + " guesses left."
			}
			
			else if(guessesMade > 1)
			{
				outputScore.innerHTML = "You have made " + guessesMade + " guesses and have " + guessesRemaining + " guesses left."
			}

	}
	
	else if(playerGuess === mysteryNumber)
	{
		output.innerHTML = "You win!";
		playerScore += guessesRemaining;
		guessesMade = 0;
		guessesRemaining = 10;
		outputScore.innerHTML = "Your current score is " + playerScore;
		mysteryNumber = Math.floor(Math.random()*100);
	}
	
	else 
	{
		output.innerHTML = "Stop messing around and play the game!";
	}
	
}