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

function submitCredentials2(){
    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("userPassword").value;
    var displayString = "";

    if(userName == "Ted426" && userPassword == "password")
    {
        window.location = "account.html"; //Reference: https://stackoverflow.com/questions/6321000/how-can-i-go-to-a-new-page-from-within-javascript
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

//Outputs the footer for the website, including counters and media links
function footer()
{
  Counter()
  document.write("<footer>");
  document.write("Justin Waltenbury. April 8 2018&copy; You have visited this website "+ localStorage.count +" time(s).<br/>");
  document.write("<a href='https://www.facebook.com'>Facebook.com</a>&nbsp;&nbsp;&nbsp;&nbsp;");
  document.write("<a href='https://www.twitter.com'>Twitter.com</a>&nbsp;&nbsp;&nbsp;&nbsp;");
  document.write("<a href='https://www.instagram.com'>Instagram.com</a>&nbsp;&nbsp;&nbsp;&nbsp;");
  document.write("<a href='https://www.linkedin.com'>LinkedIn.com</a>&nbsp;&nbsp;&nbsp;&nbsp;");
  document.write("<a href='https://www.youtube.com'>YouTube.com</a>");
  document.write("</footer><br/>");
}

//Used to determine the number of times a page has been viewed (Adopted from group)
function Counter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.count) {
            localStorage.count = Number(localStorage.count)+1;
        } else {
            localStorage.count = 1;
        }
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }