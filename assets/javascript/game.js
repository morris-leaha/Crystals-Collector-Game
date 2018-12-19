// BEFORE GAME STARTS:
$(document).ready(function() {
    var randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;    // GENERATE STARTING RANDOM NUMBER FOR USER (BETWEEN 19-120)
    console.log("Random number generated: " + randomNum);

    $("#random-number").text(randomNum); // ADD RANDOM NUMBER TO THE DOM

    // ASSIGN EACH CRYSTAL A RANDOM VALUE (BETWEEN 1-12) AND KEEP HIDDEN FROM PLAYER

    // var ruby = Math.floor(Math.random() * (12 - 1)) + 1;
    //     console.log("Ruby value is: " + ruby);
    // var sapphire = Math.floor(Math.random() * (12 - 1)) + 1;
    //     console.log("Sapphire value is: " + sapphire);
    // var emerald = Math.floor(Math.random() * (12 - 1)) + 1;
    //     console.log("Emerald value is: " + emerald);
    // var purple = Math.floor(Math.random() * (12 - 1)) + 1;
    //     console.log("Purple value is: " + purple);

    var crystalValueOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var crystalRandomValues = crystalValueOptions[Math.floor(Math.random() * crystalValueOptions.length)];
        console.log("random crystal value: " + crystalRandomValues);

    for (var i = 0; i < crystalRandomValues.length; i++) {
        var crystalButton = $("<button>");
        crystalButton.addClass("crystal-button");
        crystalButton.attr("value", crystalRandomValues[i]);
    }

    // PLAYER TOTAL SCORE START AT 0

    var totalScore = 0;
    $("#total-score").text(totalScore);

    // WINS START AT 0

    var wins = 0;
    $("#win-counter").text(wins);

    // LOSSES START AT 0

    var losses = 0;
    $("#loss-counter").text(losses);

    // ONCE GAME STARTS:
    // ADD "ON-CLICK" FUNCTION TO EACH CRYSTAL
        // WHEN FIRST CRYSTAL IS CLICKED:
            // GRAB VALUE FROM CRYSTAL
            // MAKE THIS VALUE THE USER TOTAL SCORE
            // UPDATE USER TOTAL SCORE IN HTML
        // SUBSEQUENT CRYSTALS CLICKED:
            // GRAB VALUE FROM CRYSTAL
            // ADD CRYSTAL VALUE TO USER TOTAL SCORE
            // UPDATE USER TOTAL SCORE IN HTML

    // ONCE USER TOTAL SCORE IS:
        // EQUAL TO RANDOM NUMBER --> USER WINS
            // INCREMENT WINS BY 1
            // ALERT USER THEY WON & UPDATE WINS IN DOM
                // RESET THE GAME AFTER PLAYER WINS:
                    // REGENERATE A NEW STARTING RANDOM NUMBER FOR USER (BETWEEN 19-120)
                    // REASSIGN EACH CRYSTAL A NEW RANDOM VALUE (BETWEEN 1-12) AND KEEP HIDDEN FROM PLAYER
                    // RESET THE PLAYER TOTAL SCORE TO 0

        // GREATER THAN RANDOM NUMBER --> USER LOSES
            // INCREMENT LOSSES BY 1
            // ALERT USER THEY LOST & UPDATE LOSSES IN DOM
                // RESET THE GAME AFTER PLAYER LOSES:
                    // REGENERATE A NEW STARTING RANDOM NUMBER FOR USER (BETWEEN 19-120)
                    // REASSIGN EACH CRYSTAL A NEW RANDOM VALUE (BETWEEN 1-12) AND KEEP HIDDEN FROM PLAYER
                    // RESET THE PLAYER TOTAL SCORE TO 0

});



