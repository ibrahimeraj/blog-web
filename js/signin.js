var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("uid").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "875241"){
alert ("Login successfully");
window.location = "../logblog.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("uid").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
window.location = "../signup.html";
return false;
}  
}

}