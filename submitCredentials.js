/*
    File: submitCredentials.js

	Author: Justin Waltenbury

    Date: March 18, 2018
    Last Modified: March 18, 2018

    Purpose: ICE3 functionality
*/

function submitCredentials1(){
    var userPassword = document.getElementById("password1").value;
    var displayString = "";

    if(userPassword == "password")
    {
        window.location = "page2.html"; //Reference: https://stackoverflow.com/questions/6321000/how-can-i-go-to-a-new-page-from-within-javascript
    }  
    else
    {
        displayString = "InvalidPassword! Don't overthink it... it's a bad 'password'<br/><img src='./images/error.jpg' alt = 'error' style ='height:94px; width:101px;'/>";
        document.getElementById("errorMessage").innerHTML = displayString; 
    }   
}

function submitCredentials2(){
    var userPassword = document.getElementById("password1").value;
    var displayString = "";

    if(userPassword == "LokiSnacks")
    {
        window.location = "page3.html"; //Reference: https://stackoverflow.com/questions/6321000/how-can-i-go-to-a-new-page-from-within-javascript
    }  
    else
    {
        displayString = "InvalidPassword! Capitalization matters<br/><img src='./images/error.jpg' alt = 'error' style ='height:94px; width:101px;'/>";
        document.getElementById("errorMessage").innerHTML = displayString; 
    }   
}

function submitCredentials3(){
    var userPassword = document.getElementById("password1").value;
    var displayString = "";

    if(userPassword == "AD8")
    {
        window.location = "page4.html"; //Reference: https://stackoverflow.com/questions/6321000/how-can-i-go-to-a-new-page-from-within-javascript
    }  
    else
    {
        displayString = "InvalidPassword! Sometimes you need to look from a different perspective. Not everything is left to right.<br/><img src='./images/error.jpg' alt = 'error' style ='height:94px; width:101px;'/>";
        document.getElementById("errorMessage").innerHTML = displayString; 
    }   
}

function submitCredentials4(){
    var userPassword = document.getElementById("password1").value;
    var displayString = "";

    if(userPassword == "zoooooop")
    {
        window.location = "page5.html"; //Reference: https://stackoverflow.com/questions/6321000/how-can-i-go-to-a-new-page-from-within-javascript
    }  
    else
    {
        displayString = "InvalidPassword! Make sure you count your letters, close doesn't count when you hack!<br/><img src='./images/error.jpg' alt = 'error' style ='height:94px; width:101px;'/>";
        document.getElementById("errorMessage").innerHTML = displayString; 
    }   
}

function submitCredentials5(){
    var userPassword = document.getElementById("password1").value;
    var displayString = "";

    if(userPassword == "25")
    {
        window.location = "page6.html"; //Reference: https://stackoverflow.com/questions/6321000/how-can-i-go-to-a-new-page-from-within-javascript
    }  
    else
    {
        displayString = "InvalidPassword! Keep it simple, dollars only<br/><img src='./images/error.jpg' alt = 'error' style ='height:94px; width:101px;'/>";
        document.getElementById("errorMessage").innerHTML = displayString; 
    }   
}

function submitCredentials6(){
    var userPassword = document.getElementById("password1").value;
    var displayString = "";

    if(userPassword == "750")
    {
        window.location = "page7.html"; //Reference: https://stackoverflow.com/questions/6321000/how-can-i-go-to-a-new-page-from-within-javascript
    }  
    else
    {
        displayString = "InvalidPassword! What could 'every little bit' refer to in this gift?<br/><img src='./images/error.jpg' alt = 'error' style ='height:94px; width:101px;'/>";
        document.getElementById("errorMessage").innerHTML = displayString; 
    }   
}

function submitCredentials7(){
    var userPassword = document.getElementById("password1").value;
    var displayString = "";

    if(userPassword == "60514351994190454500")
    {
        window.location = "page8.html"; //Reference: https://stackoverflow.com/questions/6321000/how-can-i-go-to-a-new-page-from-within-javascript
    }  
    else
    {
        displayString = "InvalidPassword! Please ignore spaces<br/><img src='./images/error.jpg' alt = 'error' style ='height:94px; width:101px;'/>";
        document.getElementById("errorMessage").innerHTML = displayString; 
    }   
}

function submitCredentials8(){
    var userPassword = document.getElementById("password1").value;
    var displayString = "";

    if(userPassword == "to the moon and back")
    {
        window.location = "page9.html"; //Reference: https://stackoverflow.com/questions/6321000/how-can-i-go-to-a-new-page-from-within-javascript
    }  
    else
    {
        displayString = "InvalidPassword! Astronauts do this. 5 words, no caps or punctuation<br/><img src='./images/error.jpg' alt = 'error' style ='height:94px; width:101px;'/>";
        document.getElementById("errorMessage").innerHTML = displayString; 
    }   
}

function submitCredentials9(){
    var userPassword = document.getElementById("password1").value;
    var displayString = "";

    if(userPassword == "&")
    {
        window.location = "page10.html"; //Reference: https://stackoverflow.com/questions/6321000/how-can-i-go-to-a-new-page-from-within-javascript
    }  
    else
    {
        displayString = "InvalidPassword! Sometimes it's easier than you think<br/><img src='./images/error.jpg' alt = 'error' style ='height:94px; width:101px;'/>";
        document.getElementById("errorMessage").innerHTML = displayString; 
    }   
}

function submitCredentials10(){
    var userPassword = document.getElementById("password1").value;
    var displayString = "";

    if(userPassword == "ILoveYou")
    {
        window.location.href = "http://www.tributecommunitiescentre.com/events/detail/cirque-du-soleil-corteo"; //Reference: https://stackoverflow.com/questions/6321000/how-can-i-go-to-a-new-page-from-within-javascript
    }  
    else
    {
        displayString = "InvalidPassword! Are you even trying?<br/><img src='./images/error.jpg' alt = 'error' style ='height:94px; width:101px;'/>";
        document.getElementById("errorMessage").innerHTML = displayString; 
    }   
}