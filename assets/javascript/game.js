var gemArr = ["gemA", "gemB", "gemC", "gemD"]
var imgstring = "";
var neededScore = 1;  //set this to 1 so the game will not think you won on inital pass
var userScore = 0;
var winNumber = 0;
var lostNumber = 0;

var i = 0 // loop counter

 $("#winCount").text(winNumber);
 $("#lostCount").text(lostNumber);

var x = setvar()  


$(document).on('click', ".bttn", function() {

        var gemValue = $("<div>");            
        userScore = userScore + $(this).data("gem");
        $("#userScoreDisp").text(userScore);

        if (userScore > neededScore) {
          alert("Sorry, You Lost");
          lostNumber++;
          $("#lostCount").text(lostNumber);
          x = setvar();
           }

        else if (userScore == neededScore){
          alert("Congratulations! You Won");
          winNumber++;
          $("#winCount").text(winNumber);
          x = setvar();
         }
  })  //end of on click function


function setvar() {
    console.log("in setvar function")
    
    userScore = 0;
    $("#userScoreDisp").text(userScore);
    $("#buttons").empty();  //remove initial genms or it will duplicate
    
    for (i=0; i<gemArr.length; i++) {
      console.log("loop #" + i);
      gemBtn = $("<button>");
      gemBtn.addClass("bttn");
      gemBtn.attr("data-gem", Math.floor((Math.random() * 12) + 1));
      gemBtn.css("background-image", "url(assets/images/gem" + i + ".png)");
       $("#buttons").append(gemBtn);
    }  //end of for loop
    
      neededScore = Math.floor((Math.random() * 120) + 19);
      $("#currentscore").text(neededScore);
      console.log("end of setvar function");
}  // end of setvar function
    


