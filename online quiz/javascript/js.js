function validate()
{
	var id, pass;

id=document.getElementById("mail").value;
pass=document.getElementById("password").value;
if(id=="")
{
	alert("Enter Your ID or Email");
	document.getElementById("mail").focus;
	return false;
}

if(pass=="")
{
	  alert("You enter invalid password");
 	document.getElementById("password").focus();
	return false;
}


}


function signin()
{

var name=prompt("Enter your name");
if(name=="")
{
alert("your name is blank");
var name=prompt("Enter your name").focus;
return false;
}

var id=prompt("Enter your Mobile no/Email");
if(id=="")
{
alert("Please enter Phone no or Email");
var Id=prompt("Enter your Mobile no/Email").focus;
return false;
}


var pass=prompt("Enter New Passowrd");
if(pass=="")
{
alert("Please Enter New Password");
var pass=prompt("Enter New Passowrd").focus;
return false;
}


var cpass=prompt("Enter confirm Passowrd");
if(pass!="cpass")
{
alert("Invalid confirm password");
var cpass=prompt("Enter confirm Passowrd").focus;
return false;
}
}





var index = 1;

function batan(n){
	index = index + 1;
	showimage(index);
}



showimage(1);
function showimage(n){
	var i;
	var x = document.getElementsByClassName("slides");
	if(n > x.length){index = 1};
	if(n < 1){index = x.length};
	for(i=0; i<x.length; i++)
		{
		x[i].style.display = "none";
		}
	x[index-1].style.display = "block";
}



Qvalue()
{
	var get_qes1;
	if(document.f.qes1[0].checked)
	{alert("fdf");
	 get_qes1=document.f.qes1[0].value;
	}
	
	else if(document.f.qes1[1].checked)
	{
	 get_qes1=document.f.qes1[1].value;
	}

	else if(document.f.qes1[2].checked)
	{
	 get_qes1=document.f.qes1[2].value;
	}

	else if(document.f.qes1[3].checked)
	{
	 get_qes1=document.f.qes1[3].value;
	}
	alert("fdf");
}







