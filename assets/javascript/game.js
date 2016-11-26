var gemArr = ["gemA", "gemB", "gemC", "gemD"]
var imgstring = "";
var neededScore = 1;  //set this to 1 so the game will not think you won on inital pass
var userScore = 0;
var winNumber = 0;
var lostNumber = 0;

var i = 0 // loop counter

 $("#winCount").text(winNumber);
 $("#lostCount").text(lostNumber);


 // call setvar to set up crystals & scores
$(document).ready(function(){

var x = setvar()  




  $(".bttn").on("click", function() {
        console.log("clicked");
        var gemValue = $("<div>");            
        userScore = userScore + $(this).data("gem");
        $("#userScoreDisp").text("current score = " + userScore);
        if (userScore > neededScore) {
          alert("you lost");
          lostNumber++;
          $("#lostCount").text(lostNumber);
          x = setvar();
           }
        else if (userScore == neededScore){
          alert("you won");
          winNumber++;
          $("#winCount").text(winNumber);
          x = setvar();
         }
  })  //end of on click

})


// can probably streamline this a bit

function setvar() {
    console.log("in resetvar function")
    userScore = 0;
    $("#userScoreDisp").text("current score = " + userScore);
    $("#buttons").empty();  //remove initial genms or it will duplicate
    for (i=0; i<gemArr.length; i++) {
      console.log("loop #" + i);
      gemBtn = $("<button>");
      gemBtn.addClass("bttn");
      gemBtn.attr("data-gem", Math.floor((Math.random() * 12) + 1));
      imgstring = "url(assets/images/gem" + i + ".png)";
      gemBtn.css("background-image", imgstring);
       $("#buttons").append(gemBtn);
    }  //end of for loop

      neededScore = Math.floor((Math.random() * 120) + 19);
      $("#currentscore").text(neededScore);

  }  // end of setvar function
    


