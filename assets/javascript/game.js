// BEFORE GAME STARTS:
$(document).ready(function() {
    var randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;    // GENERATE STARTING RANDOM NUMBER FOR USER (BETWEEN 19-120) - THIS ALSO INCLUDES 19 AND 120 AS OPTIONS
    console.log("Random number generated: " + randomNum);

    $("#random-number").text(randomNum); // ADD RANDOM NUMBER TO THE DOM

    // ASSIGN EACH CRYSTAL A RANDOM VALUE (BETWEEN 1-12) AND KEEP HIDDEN FROM PLAYER

    var ruby = Math.floor(Math.random() * 12) + 1;
        console.log("ruby randomValue= " + ruby);
        $("#ruby").attr("value", ruby);

    var sapphire = Math.floor(Math.random() * 12) + 1;
        console.log("sapphire randomValue= " + sapphire);
        $("#sapphire").attr("value", sapphire);

    var emerald = Math.floor(Math.random() * 12) + 1;
        console.log("emerald randomValue= " + emerald);
        $("#emerald").attr("value", emerald);

    var purple = Math.floor(Math.random() * 12) + 1;
        console.log("purple randomValue= " + purple);
        $("#purple").attr("value", purple);

    // PLAYER TOTAL SCORE START AT 0

    var totalScore = 0;
    $("#total-score").text(totalScore);
        console.log("user total score is: " + totalScore);

    // WINS START AT 0

    var wins = 0;
    $("#win-counter").text(wins);
        console.log("user number of wins is: " + wins);

    // LOSSES START AT 0

    var losses = 0;
    $("#loss-counter").text(losses);
        console.log("user number of losses is: " + losses);

// resetGame()

function resetGame () {

    $("#msg").append("<p class='h5'>Go Again!</p>");

    // REGENERATE A NEW STARTING RANDOM NUMBER FOR USER (BETWEEN 19-120)
    randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log("reset randomNum: " + randomNum);
        $("#random-number").text(randomNum);
    
    // REASSIGN EACH CRYSTAL A NEW RANDOM VALUE (BETWEEN 1-12) AND KEEP HIDDEN FROM PLAYER
    ruby = Math.floor(Math.random() * 12) + 1; 
        $("#ruby").attr("value", ruby);

    sapphire = Math.floor(Math.random() * 12) + 1;
        $("#sapphire").attr("value", sapphire);

    emerald = Math.floor(Math.random() * 12) + 1;
        $("#emerald").attr("value", emerald);

    purple = Math.floor(Math.random() * 12) + 1;
        $("#purple").attr("value", purple);

    totalScore = 0;  // RESET THE PLAYER TOTAL SCORE TO 0
        $("#total-score").html(totalScore);  
}


// ONCE GAME STARTS (USER ON-CLICKS):

    var crystalValue;

    $(".crystal-button").on("click", function(){
        crystalValue = parseInt($(this).val());  // GRAB VALUE FROM "THIS" CRYSTAL & CHANGE TO INTEGER 
            console.log("crystal grabbedValue= " + crystalValue);
        totalScore += crystalValue;  // ADD THIS VALUE THE USER TOTAL SCORE
            console.log("user total score is now: " + totalScore);
        $("#total-score").html(totalScore);  // UPDATE USER TOTAL SCORE IN HTML
    
    if (totalScore === randomNum) {  // IF USER TOTAL SCORE IS EQUAL TO RANDOM NUMBER --> USER WINS
        wins++;  // INCREMENT WINS BY 1
        $("#win-counter").html(wins);  // ALERT USER THEY WON & UPDATE WINS IN DOM
        $("#msg").html("<p class='h5'>yOu WOn!</p>");
        resetGame();  // RESET THE GAME AFTER PLAYER WINS
    } else if (totalScore >= randomNum) {  // IF GREATER THAN RANDOM NUMBER --> USER LOSES
        losses++;  // INCREMENT LOSSES BY 1
        $("#loss-counter").html(losses);  // ALERT USER THEY LOST & UPDATE LOSSES IN DOM
        $("#msg").html("<p class='h5'>yOu LOsE!</p>");
        resetGame();  // RESET THE GAME AFTER PLAYER LOSES
    }

    });

});