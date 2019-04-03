 // Done. The random number shown at the start of the game should be between 19 - 120.
 var winningnumber = Math.floor(Math.random() * 120) + 19;
        

 var userscore = 0;
 var wins = 0;
 var losses = 0;

 //Done. The player will be shown a random number at the start of the game.
 //console.log("winning: " + winningnumber);
 $("#goal").text(winningnumber);

 // Array of crystal values
 var crystalValue = [];
 
 //Done. Each crystal should have a random hidden value between 1 - 12.
 for (i = 0; i < 4; i++) {
     crystalValue[i] = Math.floor(Math.random() * 12) + 1;
  //   console.log("value " + i + ";" + crystalValue[i]);
 }


 //  Array of crystal "button" images 
 var images = ["assets/images/RedCap.PNG", "assets/images/BlueCap.PNG", "assets/images/YellowCap.PNG", "assets/images/GreenCap.PNG"];

//Dynamically add crystal "buttons" and associated random values to page
 for (i = 0; i < images.length; i++) {
     var crystal = $("<img>");
     crystal.addClass("crystalImg");
     crystal.attr("src", images[i]);
     crystal.attr("data-crystal", crystalValue[i]);
  //   console.log("img tag" + crystal);
       console.log("value " + i + ": " + crystalValue[i]);
     $("#crystals").append(crystal);
 }

 $(".crystalImg").on("click", function() {
 //Retrieve the value of the the specific crystal that was clicked and convert to int
 var thisCrystalVal = ($(this).attr("data-crystal"));
   console.log("thisCrystalVal from data: " + thisCrystalVal);
 thisCrystalVal = parseInt(thisCrystalVal);
 //console.log("thisCrystalVal: " + thisCrystalVal);
 userscore += thisCrystalVal;
 //console.log("userscore: " + userscore);
     $("#score").html("<h1>" + userscore + "</h3>");
 

 if (userscore == winningnumber)  {
     wins++;
     gameover = true;
     }
 else if (userscore > winningnumber)  {
     losses++;
     gameover = true;
 }
 if (gameover) {
     $("#wins").html("<h3>" + "Wins: " + wins + "</h3>")
     $("#losses").html("<h3>" + "Losses: " + losses + "</h3>")
     return;
 }
     
     

     

 

});
