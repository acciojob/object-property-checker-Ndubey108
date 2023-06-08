const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	if (sampleObject.hasOwnProperty(key)) { 
return true
}
	else{
		return false
	}
	
}
const key = prompt("Enter Key.");
alert(hasKey(key));
