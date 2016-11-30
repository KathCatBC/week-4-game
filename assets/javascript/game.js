var gemArr = ["gemA", "gemB", "gemC", "gemD"]
var imgstring = "";
var neededScore = 1;  //set this to 1 so the game will not think you won on inital pass
var userScore = 0;
var winNumber = 0;
var lostNumber = 0;
var clickcount = 0;

var i = 0 // loop counter

 $("#winCount").text(winNumber);
 $("#lostCount").text(lostNumber);

var x = setvar()  

$(document).on('click', ".bttn", function() {
    clickcount++
    if(clickcount == 1){
      // clear the won/lost 
      $("#wonorLostU").html("");
      $("#wonorlost").html("");
    }        
    userScore = userScore + Number($(this).attr("data-gem"));
    $("#userScoreDisp").text(userScore);

    if (userScore > neededScore) {
      $("#wonorLostU").html("You");
      $("#wonorlost").html("Lost!");
      lostNumber++;
      $("#lostCount").text(lostNumber);
      x = resetvar();
    }
    else if (userScore == neededScore){
      $("#wonorLostU").html("You");
      $("#wonorlost").html("Won!");
      winNumber++;
      $("#winCount").text(winNumber);
      x = resetvar();
    }
  })  //end of on click function


function setvar() {
    $("#userScoreDisp").text(userScore);
    $("#buttons").empty();  //make sure #buttons is empty
    
    for (i=0; i<gemArr.length; i++) {
      gemBtn = $("<button>");
      gemBtn.addClass("bttn");
      gemBtn.attr("data-gem", Math.floor((Math.random() * 12) + 1));
      gemBtn.css("background-image", "url(assets/images/gem" + i + ".png)");
      $("#buttons").append(gemBtn);
    }  //end of for loop
    
    neededScore = Math.floor((Math.random() * 120) + 19);
    $("#currentscore").text(neededScore);
      // console.log("end of setvar function");
}  // end of setvar function
    

function resetvar(){
    
  for (i=0; i<gemArr.length; i++) {
    $(".bttn").eq(i).attr("data-gem", Math.floor((Math.random() * 12) + 1));
  }
    // reset score variables
    neededScore = Math.floor((Math.random() * 120) + 19);
    $("#currentscore").text(neededScore);
    userScore = 0;
    $("#userScoreDisp").text(userScore);
    clickcount = 0
}  // end of resetvar
// }