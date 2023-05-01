function getFormvalue() {
    //Write your code here

	var form = document.querySelector("form1");

	form.addEventListener("submit", function(event){
		event.preventDefault();

		var fname = document.getElementById("fname").value;
		var lname = document.getElementById("lname").value;

		alert("First Name: " + fname + "\nLast Name :" + lname);
	});

}
