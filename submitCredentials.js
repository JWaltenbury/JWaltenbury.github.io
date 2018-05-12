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


