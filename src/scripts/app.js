"use strict";
console.info('Hello world');


//parallax
const header = document.querySelector(".header");

window.addEventListener('scroll',(e)=>{    
    header.style.backgroundPositionY = Math.round((window.scrollY*0.5)) + "px";
});



//solution__accordion
var accordion = document.getElementsByClassName("solution__accordion");

var i;
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

