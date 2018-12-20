// BEFORE GAME STARTS:
$(document).ready(function() {

    // WINS START AT 0

    var wins = 0;
        $("#win-counter").html(wins);
            console.log("number of wins is: " + wins);

    // LOSSES START AT 0

    var losses = 0;
        $("#loss-counter").html(losses);
            console.log("number of losses is: " + losses);

    // DECLARE GLOBAL VARIABLES

    var totalScore;
    var randomNum;

    // CALL resetGame() TO GENERATE RANDOM NUMBER FOR USER & ASSIGN CRYSTAL VALUES

    resetGame();

    // WRITE resetGame():

    function resetGame () {
        // SET THE PLAYER TOTAL SCORE TO 0
        totalScore = 0;  
            $("#total-score").html(totalScore);
                console.log("user totalScore: " + totalScore);
                
        // GENERATE A NEW STARTING RANDOM NUMBER FOR USER (BETWEEN 19-120 - INCLUDES MAX AND MIN NUMBERS)
        randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            $("#random-number").html(randomNum);
                console.log("generated randomNum: " + randomNum);

        // ASSIGN EACH CRYSTAL A NEW RANDOM VALUE (BETWEEN 1-12 - INCLUDES MAX AND MIN NUMBERS) 
        // KEEP HIDDEN FROM PLAYER BY ASSIGNING GENERATED NUMBER AS BUTTON VALUE
        var ruby = Math.floor(Math.random() * 12) + 1; 
            $("#ruby").attr("value", ruby);
                console.log("ruby value: " + ruby);

        var sapphire = Math.floor(Math.random() * 12) + 1;
            $("#sapphire").attr("value", sapphire);
                console.log("sapphire value: " + sapphire);

        var emerald = Math.floor(Math.random() * 12) + 1;
            $("#emerald").attr("value", emerald);
                console.log("emerald: " + emerald);

        var purple = Math.floor(Math.random() * 12) + 1;
            $("#purple").attr("value", purple);
                console.log("purple value: " + purple);
    }


    // START THE GAME ON USER CLICKS:

    $(".crystal-button").on("click", function(){
        $("#msg").empty();
        var crystalValue = parseInt($(this).val());  // GRAB VALUE FROM "THIS" CRYSTAL & CHANGE TO INTEGER 
            console.log("crystal grabbedValue= " + crystalValue);
        totalScore += crystalValue;  // ADD THIS VALUE THE USER TOTAL SCORE
            console.log("user total score is now: " + totalScore);
        $("#total-score").html(totalScore);  // UPDATE USER TOTAL SCORE IN HTML
    
        if (totalScore === randomNum) {  // IF USER TOTAL SCORE IS EQUAL TO RANDOM NUMBER --> USER WINS
            wins++;  // INCREMENT WINS BY 1
            $("#win-counter").html(wins);  // UPDATE WINS IN DOM
            $("#msg").html("<p class='h5'>yOu WOn!</p>"); // ALERT USER THEY WON
            $("#msg").append("<p class='h5'>Go Again!</p>");
            resetGame();  // RESET THE GAME AFTER PLAYER WINS
        } else if (totalScore >= randomNum) {  // IF GREATER THAN RANDOM NUMBER --> USER LOSES
            losses++;  // INCREMENT LOSSES BY 1
            $("#loss-counter").html(losses);  // UPDATE LOSSES IN DOM
            $("#msg").html("<p class='h5'>yOu LOsE!</p>");  // ALERT USER THEY LOST &
            $("#msg").append("<p class='h5'>Go Again!</p>");
            resetGame();  // RESET THE GAME AFTER PLAYER LOSES
        }
    });

});