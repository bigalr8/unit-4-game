 
var winningnumber = 0; 
var userscore = 0;
var wins = 0;
var losses = 0;
var gameover = false;
// Array of crystal values
var crystalValue = [];

function genValues () {
//   The random number shown at the start of the game should be between 19 - 120.
     winningnumber = Math.floor(Math.random() * 120) + 19;
//   Each crystal should have a random hidden value between 1 - 12.
     for (i = 0; i < 4; i++) {
        crystalValue[i] = Math.floor(Math.random() * 12) + 1;
        //   console.log("value " + i + ";" + crystalValue[i]);
        $("#goal").text(winningnumber);
    }
}

genValues();

//  The player will be shown a random number at the start of the game.






//  Array of crystal "button" images 
var images = ["assets/images/RedCap.PNG", "assets/images/BlueCap.PNG", "assets/images/YellowCap.PNG", "assets/images/GreenCap.PNG"];

//Dynamically add crystal "buttons" and associated random values to page
for (i = 0; i < images.length; i++) {
    var crystal = $("<button>");
    crystal.addClass("crystalBtn");
    crystal.attr("data-crystal", crystalValue[i]);

    var image = $("<img>");
    image.addClass("crystalImg");
    image.attr("src", images[i]);
         
    crystal.append(image);
    $("#crystals").append(crystal);
}

$("#score").html("<h1>" + userscore + "</h3>");

function renderReplay() {
    var replayButton = $("<button>");
    replayButton.text("REPLAY");
    replayButton.addClass("btn btn-primary btn-lg");
    replayButton.attr("ID", "replay");
    $("#replay-button-anchor").append(replayButton);
}


renderReplay();

$(".crystalBtn").on("click", function () {
    //Retrieve the value of the the specific crystal that was clicked and convert to int
    var thisCrystalVal = ($(this).attr("data-crystal"));
    console.log("thisCrystalVal from data: " + thisCrystalVal);
    thisCrystalVal = parseInt(thisCrystalVal);
    console.log("thisCrystalVal: " + thisCrystalVal);
    userscore += thisCrystalVal;
    console.log("userscore: " + userscore);
    $("#score").html("<h1>" + userscore + "</h3>");


    if (userscore == winningnumber) {
        console.log("winningnumber: " + winningnumber);
        wins++;
        gameover = true;
        $("#win-lose").html("<h2>You Win!</h2>");
        //renderReplay();
    }
    else if (userscore > winningnumber) {
        losses++;
        gameover = true;
        $("#win-lose").html("<h2>You Lose!</h2>");
        //renderReplay();
    }
    if (gameover) {
        $("#wins").html("<h3>" + "Wins: " + wins + "</h3>")
        $("#losses").html("<h3>" + "Losses: " + losses + "</h3>")
        $('.crystalBtn').prop('disabled', true);
        $('#replay').prop('disabled', false);
             return;
    }

});

$("#replay").on("click", function () {
    genValues();
    $('.crystalBtn').prop('disabled', false);
    $('#replay').prop('disabled', true);
    userscore = 0;
    $("#score").html("<h1>" + userscore + "</h3>");
    gameover = false;
});