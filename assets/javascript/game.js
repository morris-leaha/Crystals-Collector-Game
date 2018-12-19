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

// ONCE GAME STARTS (USER ON-CLICKS):

    var crystalValue;

    $(".crystal-button").on("click", function(){
        crystalValue = parseInt($(this).val());  // GRAB VALUE FROM "THIS" CRYSTAL & CHANGE TO INTEGER 
            console.log("crystal grabbedValue= " + crystalValue);
        totalScore += crystalValue;  // ADD THIS VALUE THE USER TOTAL SCORE
            console.log("user total score is now: " + totalScore);
        $("#total-score").html(totalScore);  // UPDATE USER TOTAL SCORE IN HTML
    });

    // $("#ruby").on("click", function(){  // ADD "ON-CLICK" FUNCTION TO EACH CRYSTAL
    //     crystalValue = parseInt($(this).val());  // GRAB VALUE FROM "THIS" CRYSTAL & CHANGE TO INTEGER 
    //         console.log("ruby grabbedValue= " + crystalValue);
    //     totalScore += crystalValue;  // ADD THIS VALUE THE USER TOTAL SCORE
    //         console.log("user total score is now: " + totalScore);
    //     $("#total-score").html(totalScore);  // UPDATE USER TOTAL SCORE IN HTML
    // });

    // $("#sapphire").on("click", function(){
    //     crystalValue = parseInt($(this).val());
    //         console.log("sapphire grabbedValue= " + crystalValue);
    //     totalScore += crystalValue;
    //         console.log("user total score is now: " + totalScore);
    //     $("#total-score").html(totalScore);
    // });

    // $("#emerald").on("click", function(){
    //     crystalValue = parseInt($(this).val());
    //         console.log("emerald grabbedValue= " + crystalValue);
    //     totalScore += crystalValue;
    //         console.log("user total score is now: " + totalScore);
    //     $("#total-score").html(totalScore);
    // });

    // $("#purple").on("click", function(){
    //     crystalValue = parseInt($(this).val());
    //         console.log("purple grabbedValue= " + crystalValue);
    //     totalScore += crystalValue;
    //         console.log("user total score is now: " + totalScore);
    //     $("#total-score").html(totalScore);
    // });

    if (totalScore === randomNum) {
        wins++;
        alert("You win!");
    } else if (totalScore >= randomNum) {
        losses++;
        alert("You lose!");
    }
    
    // IF USER TOTAL SCORE IS:
        // EQUAL TO RANDOM NUMBER --> USER WINS
            // INCREMENT WINS BY 1
            // ALERT USER THEY WON & UPDATE WINS IN DOM
                // RESET THE GAME AFTER PLAYER WINS:
                    // REGENERATE A NEW STARTING RANDOM NUMBER FOR USER (BETWEEN 19-120)
                    // REASSIGN EACH CRYSTAL A NEW RANDOM VALUE (BETWEEN 1-12) AND KEEP HIDDEN FROM PLAYER
                    // RESET THE PLAYER TOTAL SCORE TO 0

        // IF GREATER THAN RANDOM NUMBER --> USER LOSES
            // INCREMENT LOSSES BY 1
            // ALERT USER THEY LOST & UPDATE LOSSES IN DOM
                // RESET THE GAME AFTER PLAYER LOSES:
                    // REGENERATE A NEW STARTING RANDOM NUMBER FOR USER (BETWEEN 19-120)
                    // REASSIGN EACH CRYSTAL A NEW RANDOM VALUE (BETWEEN 1-12) AND KEEP HIDDEN FROM PLAYER
                    // RESET THE PLAYER TOTAL SCORE TO 0

});



