var i = 0
var speed = 50;
var txt = "Nice to meet you! I'm Jenny.";
var t = setInterval(function () {
	if( i < txt.length) {
		document.getElementById("txt").innerHTML = txt.substring(0,i+1) + '<span aria-hidden="true"></span>'; 
		i++;
	}}, speed);
