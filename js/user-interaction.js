"use strict";

(function () {

	console.log("Is this working...?");

	// TODO: Ask the user for their name.
	//       Keep asking if an empty input is provided.

	var userName = prompt("Please enter your name.");

	console.log(userName);

	while (userName == false) {
		userName = prompt("Please enter your name.");
	} 

	// TODO: Show an alert message that welcomes the user based on their input.
	alert("Welcome, " + userName + "!");

	// TODO: Ask the user if they like pizza.
	//       Based on their answer show a creative alert message.
	var userPizza = prompt("What pizza do you like?");

	while (userPizza === "") {
		userPizza = prompt("Come on! Tell me what pizza you like!");
	} 

	userPizza = userPizza.toLowerCase();

	if (userPizza.indexOf("pepperoni") != -1) {
		alert("That's my favorite!!");
	} else if (userPizza.indexOf("meat lovers") != -1) {
		alert("Decent choice.");
	} else if (userPizza.indexOf("cheese") != -1) {
		alert("Pretty yum!!");
	} else if (userPizza.indexOf("hawiian") != -1) {
		alert("Wimp.");
	} else if (userPizza.indexOf("supreme") != -1) {
		alert("Guess you like it all...");
	} else {
		alert("You are weird!!");
	}


	var gender = confirm("Are you a man?");

	if (gender == true) {
		alert("Hey bro!")
	} else {
		alert("Hey dudette!")
	}

})();