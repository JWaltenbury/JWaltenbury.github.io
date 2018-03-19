function submitCredentials(){
    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("userPassword").value;
    var displayString = "";

    if(userName == "Thom232" && userPassword == "password")
    {
        window.location = "informationPage.html"; //Reference: https://stackoverflow.com/questions/6321000/how-can-i-go-to-a-new-page-from-within-javascript
    }  
    else
    {
        displayString = "Invalid Username or Password. Please try again. (Thom232, password)";
        document.getElementById("errorMessage").innerHTML = displayString; 
    }   
}

function resetCredentials(){
    document.getElementById("userName").value = "";
    document.getElementById("userPassword").value = "";  
}