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
            
    userScore = userScore + Number($(this).attr("data-gem"));
    $("#userScoreDisp").text(userScore);

    if (userScore > neededScore) {
      // $("#wonorlostU").html("<h4>You</h4>")
      //  $("#wonorlost").html("<h4>Lost</h4>")
      lostNumber++;
      $("#lostCount").text(lostNumber);
      x = resetvar();
    }
    else if (userScore == neededScore){
          // $("#wonorlostU").html("<h4>You</h4>")
          // $("#wonorlost").html("<h4>Won!</h4>")
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
      // $("#wonorlost").html("");
      // $("#wonorlostU").html("");
}  // end of resetvar
// }