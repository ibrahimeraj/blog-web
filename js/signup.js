function registration()
	{

		var name= document.getElementById("pname").value;
		var email= document.getElementById("email").value;
		var uname= document.getElementById("uid").value;
		var pwd= document.getElementById("password").value;			
		var cpwd= document.getElementById("cpassword").value;
		
        //email id expression code
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(name=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(name))
		{
			alert('Name field required only alphabet characters');
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		else if(uname=='')
		{
			alert('Please enter the user name.');
		}
		else if(!letters.test(uname))
		{
			alert('User name field required only alphabet characters');
		}
		else if(pwd=='')
		{
			alert('Please enter Password');
		}
		else if(cpwd=='')
		{
			alert('Enter Confirm Password');
		}
		else if(!pwd_expression.test(pwd))
		{
			alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
		}
		else if(pwd != cpwd)
		{
			alert ('Password not Matched');
		}
		else if(document.getElementById("cpassword").value.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(document.getElementById("cpassword").value.length > 12)
		{
			alert ('Password max length is 12');
		}
		else
		{				                            
               alert('Thank You for Signing up');
			   // Redirecting to other page or webste code. 
			   window.location = "logblog.html"; 
		}
	}
	function clearFunc()
	{
		document.getElementById("pname").value="";
		document.getElementById("email").value="";
		document.getElementById("uid").value="";
		document.getElementById("password").value="";
		document.getElementById("cpassword").value="";
	}