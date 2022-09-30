var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guessName = prompt("What is your name? ");

if (guestList.includes(guessName)) {
  alert("Welcome");
} else {
  alert("Sorry, Maybe next time");
}