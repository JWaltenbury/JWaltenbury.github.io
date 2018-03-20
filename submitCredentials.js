/*
    File: submitCredentials.js

	Author: Justin Waltenbury

    Date: March 18, 2018
    Last Modified: March 18, 2018

    Purpose: ICE3 functionality
*/

function submitCredentials(){
    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("userPassword").value;
    var displayString = "";

    if(userName == "Ted426" && userPassword == "password")
    {
        window.location = "informationPage.html"; //Reference: https://stackoverflow.com/questions/6321000/how-can-i-go-to-a-new-page-from-within-javascript
    }  
    else
    {
        displayString = "Invalid Username or Password. Please try again. (Ted426, password)";
        document.getElementById("errorMessage").innerHTML = displayString; 
    }   
}

function resetCredentials(){
    document.getElementById("userName").value = "";
    document.getElementById("userPassword").value = "";  
}