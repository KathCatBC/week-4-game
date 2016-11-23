


var gemArr = ["gemA", "gemB", "gemC", "gemD"]
var gemPic = []

var imgstring = ""
var neededScore = 0
var userScore = 0
var winNumber = 0
var lostNumber = 0

var i = 0 // loop counter

// Generate random number for score needed between 19 & 120
// look up how to generate a 



   for (i=0; i<gemArr.length; i++) {
  		var gemBtn = $("<button>");
  		gemBtn.addClass("bttn");
  		gemBtn.attr("data-gem", Math.floor((Math.random() * 12) + 1));
  		imgstring = "<img src=assets/images/gem" + i + ".png>";
  		console.log(imgstring);  		
// need to change relative path for images
  		gemBtn.text = "button text";
  
        $("#buttons").append(gemBtn);
}



// Generate a random numbers for Gems A - D between 1 & 12 

neededScore = Math.floor((Math.random() * 120) + 19);

// On click event for each gem
// add number to userScore
// create case statement (Or javascript version)
// check to see if = needed score user won winNumber++
// if > neededScore user lost - lostNumber++
// if < needScore keep playing


