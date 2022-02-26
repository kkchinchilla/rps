// VARIABLES AT THE TOP
let options = 
	["rock","paper","scissors"];
let computerchoice;
let userchoice;
let result, buttons, computer_result, your_wins, computer_wins, ties, round_count;

// FUNCTIONS AFTER VARIABLES
function makeComputerChoice(){
	console.log("Computer was",computerchoice);
	return computerchoice = Math.floor( Math.random() * options.length );   
}

function makeUserChoice(choice){
	makeComputerChoice();
	userchoice = choice; 
	//  show the options in console
	console.log(
		options[userchoice],
		"vs",
		options[computerchoice]
	);
	//  show the options on the document
	result.innerHTML =
		"<img src='images/"+
			options[userchoice]+"_left"+".svg'>"

	computer_result.innerHTML =
		"<img src='images/"+
			options[computerchoice]+"_right"+".svg'>";


	makeGameResult();
}
function makeGameResult(){
	let resultstring = "";
	if(userchoice == computerchoice) {
		console.log("It's a tie");
		ties.innerHTML = parseInt(ties.innerText)+1;
		
	}
	else if(
		(userchoice == 0 && computerchoice == 1) || 
        (userchoice == 1 && computerchoice == 2) || 
        (userchoice == 2 && computerchoice == 0) 
		) {
		console.log("You lost!");
		computer_wins.innerHTML = parseInt(computer_wins.innerText)+1;
		console.log(computer_wins);
	}
	else if( 
		(userchoice == 0 && computerchoice == 2) ||
        (userchoice == 1 && computerchoice == 0) ||
        (userchoice == 2 && computerchoice == 1)
        
		) {
		console.log("You won!");

		your_wins.innerHTML = parseInt(your_wins.innerText)+1;
		
	}

	result.innerHTML += 
		resultstring;
	// showResults();

	round_count.innerHTML = parseInt(round_count.innerText)+1;
}
//Show and hide the 3 buttons. When showing results, show play agian button; Click play button, show three options.
function showOptions(){
	buttons.style.display = "block";
	result.style.display = "none";
}
function showResults(){
	buttons.style.display = "none";
	result.style.display = "block";
}


// model view controller MVC

// Everything is set up ready to go. Let the browser display your buttons. By default, showOptions() will display buttons and hide the result.
// Since we put our js on top, we need to add onload 
window.onload = function(){
	result = document.querySelector("#yourchoice");
	computer_result = document.querySelector("#computerchoice");
	// buttons = document.querySelector("#yourchoice");
    document.querySelector(".btn_rock").addEventListener("click", function(){makeUserChoice(0);}, false)
    document.querySelector(".btn_paper").addEventListener("click", function(){makeUserChoice(1);}, false)
    document.querySelector(".btn_scissors").addEventListener("click", function(){makeUserChoice(2);}, false)
    your_wins = document.querySelector("#yourwincount");
    ties = document.querySelector("#tiecount");
    computer_wins = document.querySelector("#computerwincount");
    round_count = document.querySelector("#roundcount");
}
