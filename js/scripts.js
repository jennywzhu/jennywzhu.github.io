// var blink_speed = 700; // every 1000 == 1 second, adjust to suit
// var words = ["Craftist", "Noodle Lover", "Violinist"]
var i = 0
var speed = 50;
var txt = "Nice to meet you! I'm Jenny.";
// count = 0
// var t = setInterval(function () {
//     var ele = document.getElementById('blinking');
//     ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
//     ele.innerHTML = words[count%3];
//     if(ele.style.visibility == '') { count++; }
// }, blink_speed);
var t = setInterval(function () {
	if( i < txt.length) {
		document.getElementById("txt").innerHTML = txt.substring(0,i+1) + '<span aria-hidden="true"></span>'; 
		i++;
	}}, speed);
