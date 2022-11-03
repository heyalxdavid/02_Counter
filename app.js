"use strict";

// Set initial count
let count = 0;

// Select value and buttons
const value = document.querySelector("#value");
// Select all the buttons using the All, this returns a node list
const btns = document.querySelectorAll(".btn");

// Apply, loop, the same function for all of the buttons in the node list
btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    console.log(event.currentTarget.classList); // Tells me which button I am clicking on
    const styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count; // replaces the html number to count
  });
});
