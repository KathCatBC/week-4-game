


var gemArr = ["gemA", "gemB", "gemC", "gemD"]
var imgstring = "";
var neededScore = 1;  //set this to 1 so the game will not think you won on inital pass
var userScore = 0;
var winNumber = 0;
var lostNumber = 0;

var i = 0 // loop counter

 $("#winCount").text(winNumber);
 $("#lostCount").text(lostNumber);

//initial variable load

   for (i=0; i<gemArr.length; i++) {
  		var gemBtn = $("<button>");
  		gemBtn.addClass("bttn");
  		gemBtn.attr("data-gem", Math.floor((Math.random() * 12) + 1));
  		imgstring = "url(assets/images/gem" + i + ".png)";
  		gemBtn.css("background-image", imgstring);
      $("#buttons").append(gemBtn);
}

  neededScore = Math.floor((Math.random() * 120) + 19);
  $("#currentscore").text(neededScore);

// create case statement (Or javascript version)
// check to see if = needed score user won winNumber++
// if > neededScore user lost - lostNumber++
// if < needScore keep playing

  //   $(".bttn").on("click", function() {
  //       console.log("clicked");
  //       var gemValue = $("<div>");            
  //       userScore = userScore + $(this).data("gem");
  //       $("#userScoreDisp").text("current score = " + userScore);
  //       if (userScore > neededScore) {
  //         alert("you lost")
  //         lostNumber++
  //         $("#lostCount").text(lostNumber);
  //         resetvar("lost") }
  //       if (userScore == neededScore){
  //         alert("you won")
  //         winNumber++
  //         $("#winCount").text(winNumber);
  //         resetvar("won")
  // }
  // })  // end of on click function

  function resetvar(winorlose) {
    console.log("in resetvar function")
    userScore = 0;
    $("#userScoreDisp").text("current score = " + userScore);
     $("#buttons").empty()
  for (i=0; i<gemArr.length; i++) {
      // var gemBtn = $("<button>");
      // // var gemBtn = $("<button>");
      // gemBtn.attr("data-gem", Math.floor((Math.random() * 12) + 1));
      // $("#buttons").replaceWith(gemBtn);

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

  }  // end of resetvar function



  $(".bttn").on("click", function() {
        console.log("clicked");
        var gemValue = $("<div>");            
        userScore = userScore + $(this).data("gem");
        $("#userScoreDisp").text("current score = " + userScore);
        if (userScore > neededScore) {
          alert("you lost")
          lostNumber++
          $("#lostCount").text(lostNumber);
          resetvar("lost")
           }
        if (userScore == neededScore){
          alert("you won")
          winNumber++
          $("#winCount").text(winNumber);
          resetvar("won")
         }

  })  //end of on click


    //check to see if won/lost/continue
    //if won increment won counter
    //if lost increment lost counter
    // if won or lost reset gem values & needed score

    //if not won or lost just leave everything alone


