"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Gael Rodriguez Garcia
   Date:  4/4/20  
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/

//steps 4a - 4f
//declaring all global variables
var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection = "right";

//step 5
//command function to run init
window.onload = init;

//step 6
//function that sets initial conditions
function init() {
    allLetters = document.querySelectorAll("table#crossword span");
    currentLetter = allLetters[0]; 
    var acrossID = currentLetter.dataset.clueA;
    var downID = currentLetter.dataset.clueD;
    acrossClue = document.getElementById(currentLetter.dataset.clueA);
    downClue = document.getElementById(currentLetter.dataset.clueD);

    //step 8a
   formatPuzzle(currentLetter);
   
   //step 8b
   for (var i = 0; i < allLetters.length; i++) {
     //step 8b i
      allLetters[i].style.cursor = "pointer";  
       //step 8b ii    
      allLetters[i].onmousedown = function(e) {
         formatPuzzle(e.target);
      };
   }
   //10
   currentLetter.addEventListener("keydown", selectLetter());

   //12
   var typeImage = document.getElementById("directionImg");
   typeImage.style.cursor = "pointer";
   typeImage.onmousedown = switchTypeDirection();


}


//step 7
// Format cell colors and clues based on letter selected
function formatPuzzle(puzzleLetter) {
    currentLetter = puzzleLetter;
    // Remove current colors
    for (var i = 0; i < allLetters.length; i++) {
    allLetters[i].style.backgroundColor = "";
    }
    // Remove highlighting of current clues
    acrossClue.setProperty("color", "");
    downClue.setProperty("color", "");
    // Test for existence of clues

	if (typeof currentLetter.dataset.clueA !== undefined) {
        acrossClue = document.getElementById("currentLetter.dataset.clueA");
        acrossClue.style.color = "blue";
        wordLetters = document.querySelectorAll(document.crossword.dataset.clueA = currentLetter.dataset.clueA.value);
        wordLetters[i].style.backgroundColor = "rgb(231, 231, 231)";
        }

	if (currentLetter.dataset.clueD !== undefined) {
        acrossClue = document.getElementById("currentLetter.dataset.clueD");
        acrossClue.setProperty("color", "red");
        wordLetters = document.querySelectorAll(document.crossword.dataset.clueD = currentLetter.dataset.clueD.value);
        wordLetters[i].style.backgroundColor = "rgb(255, 231, 231)";
        }

	// Indicate typing direction
    if (typeDirection === "right") {
        currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
    } else {
        currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
    }

}
//step 9
function selectLetter(e) {
    //step 9a
    var leftLetter = document.getElementById(currentLetter.dataset.left);
    var upLetter = document.getElementById(currentLetter.dataset.up);
    var rightLetter = document.getElementById(currentLetter.dataset.right);  
    var downLetter = document.getElementById(currentLetter.dataset.down);
    
     //step 9b
    var userKey = e.keyCode;
    
    //step 9c i-v
    if (userKey === 37) {
       formatPuzzle(leftLetter);  // Move left in the puzzle
    } else if (userKey === 38) {
       formatPuzzle(upLetter);  // Move up in the puzzle
    } else if (userKey === 39 || userKey === 9) {
       formatPuzzle(rightLetter);  // Move right in puzzle
    } else if (userKey === 40 || userKey === 13) {
       formatPuzzle(downLetter);  // Move down in the puzzle
    } else if (userKey === 8 || userKey === 46) {
       currentLetter.textContent = "";  // Delete the current letter
    } 
    //step 9c vi
    else if (userKey === 32) {
       switchTypeDirection();  // Toggle the typing direction between right and down
    } 
    //step 9c vii
    else if (userKey >= 65 && userKey <= 90) {
       currentLetter.textContent = getChar(userKey); // Write the letter typed by the user 
       if (typeDirection === "right") {
          formatPuzzle(rightLetter);  // Move right after typing the letter
       } else {
          formatPuzzle(downLetter);  // Move down after typing the letter
       }
    }
    //step 9d
    e.preventDefault();
 }

function switchTypeDirection(){
    //11a
    var typeImage = document.getElementById("directImg");
    //11 b and c
    if(typeDirection === "right"){
        typeDirection = "down";
        typeDirection = typeImage.setAttribute("pc_right.png");
        currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
    }else{
        typeDirection = "right";
        typeDirection= typeImage.setAttribute("pc_down.png");
        currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
    }
}
 








   





/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
