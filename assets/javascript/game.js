


var gemArr = ["gemA", "gemB", "gemC", "gemD"]
var imgstring = "";
var neededScore = 0;
var userScore = 0;
var winNumber = 0;
var lostNumber = 0;

var i = 0 // loop counter

var winlostdisplay = document.querySelector(".total-score");
  
  // need to make this prettier
  winlostdisplay.innerHTML = ("Wins: " + winNumber + "   Lost:  "+ lostNumber);
    $("#userScoreDisp").text(userScore);


// $("#currentscore").text(neededScore);


   for (i=0; i<gemArr.length; i++) {
  		var gemBtn = $("<button>");
  		gemBtn.addClass("bttn");
  		gemBtn.attr("data-gem", Math.floor((Math.random() * 12) + 1));
  		imgstring = "url(assets/images/gem" + i + ".png)";
        // imgstring = "url(../week-4-game/assets/images/gem" + i + ".png)";
  		// imgstring = "<img src=assets/images/gem" + i + ".png>";
  		// console.log(imgstring);
  		gemBtn.css("background-image", imgstring);

  		 		
// need to change relative path for images
  		// gemBtn.text(i);
  		
        $("#buttons").append(gemBtn);
}



// Generate a random numbers for Gems A - D between 1 & 12 
 
neededScore = Math.floor((Math.random() * 120) + 19);
$("#currentscore").text(neededScore);

//console.log(neededScore);

// On click event for each gem
// add number to userScore
// create case statement (Or javascript version)
// check to see if = needed score user won winNumber++
// if > neededScore user lost - lostNumber++
// if < needScore keep playing

    $(".bttn").on("click", function() {
        var gemValue = $("<div>");   
        
        // console.log($(this).data("gem")); 
        userScore = userScore + $(this).data("gem");
       // console.log(userScore);
        $("#userScoreDisp").text("current score = " + userScore);
})


