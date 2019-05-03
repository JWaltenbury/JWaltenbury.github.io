/*
  Author:       Justin Waltenbury
  Created:      May 2, 2019
  Modified:     May 2, 2019
  Latest:       Creation and initial functions
  Purpose:      Website JS functions
*/
"use strict";
$(document).ready(function(){
    console.log("Let's do this.");
    document.title = getRandomTitle();
});



function getRandomTitle()
{
    var number = Math.floor((Math.random() * 5) + 1);
    var title = "";
    switch(number) {
        case 1:
            title = "Wow! So fancy!";
            break;
        case 2:
            title = "Hey! Listen!";
            break;
        case 3:
            title = "TODO: Add something clever";
            break;
        case 4:
            title = "How much wood could a woodchuck chuck?";
            break;
        case 5:
            title = "You come here often?";
            break;
        default:
            title = "This is why we can't have nice things";
            break;
    }

    return title;
}