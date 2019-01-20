  
    //Create start function. It will use for loops to store the value within the buttons.
    $("#start").on("click", function() {
        game.start();
    });

    //Create finished function
    $(document).on("click", '#finished', function () {
        game.finished();
    });

    var questions = [{
        question: "Who sang the classic song, '(Sittin' on) The Dock Of The Bay?'",
        answers: ["Jerry Butler", "Al Green", "Otis Redding", "Marvin Gaye"],
        correctAnswer: "Otis Redding",
    },
    {
        question: "Curtis Mayfield was part of which famous soul group?",
        answers: ["The Temptations", "The Impressions", "The Staple Singers", "The Four Tops"],
        correctAnswer: "The Impressions",
    },
    {
        question: "Which of these artists did not cover Sam Cooke's iconic civil rights-inspired song, 'A Change Is Gonna Come?'",
        answers: ["Aretha Franklin", "The Band", "The Beatles", "Otis Redding"],
        correctAnswer: "The Beatles",
    },
    {
        question: "'Cold Sweat' and 'The Payback' are both Billboard charting hits from which artist?",
        answers: ["Irma Thomas", "David Ruffin", "James Brown", "George Clinton"],
        correctAnswer: "James Brown",
    },
    {
        question: "What was the term used for soul music sung by white artists?",
        answers: ["Caucasian Crooners", "Blue-Eyed Soul", "Pale-Faced Soul", "White Soul"],
        correctAnswer: "Blue-Eyed Soul",
    },
    {
        question: "The lyrics, 'I am no better and neither are you. We are the same whatever we do. You love me you hate me you know me and then. You can't figure out the bag I'm in' are from which 1969 classic song?",
        answers: ["Love and Hate", "Stand!", "The Family Stone", "Everyday People"],
        correctAnswer: "Everyday People",
    }];

    var game = {
        correct: 0,
        incorrect: 0,
        counter: 90,
        //Every single second will decrease counter by 1
        countdown: function() { //Need countdown: function
            game.counter--; // we want the game counter to decrease by 1 (use object syntax)
            $("#counter").html(game.counter); // jquery - add the game counter to counter id through html
            //If counter is less than or equal to 0, the game will end, console log, game.finished function
            if(game.counter <= 0) {
                console.log("Time's up!");
                game.finished();
            }
        },
        start: function() { //start: function
            //have timer equal to setInterval (reference countdown function, the amount of milliseconds to run countdown function
            timer = setInterval(game.countdown, 1000); 
            //prepend time remaining to subwrapper, how many seconds for game? 90?
            $("#subwrapper").append("<h3>Time Remaining: <span id='counter'>90</span> Seconds</h3><br>");
            //Remove start id and call it
            $("#start").remove();
            for (var i = 0; i < questions.length; i++) {
                $("#subwrapper").append("<h4>" + questions[i].question + "</h4>");
                //another for loop within the for loop, using j... j < questions[i].answers.length
                for(var j=0; j < questions[i].answers.length; j++) {
                    //within this for loop, append to subwrapper - include input type and id, name to id
                    $("#subwrapper").append("<br><input type='radio' name='question-"+ i +"' value='"+ questions[i].answers[j] + "'>"+ questions[i].answers[j]);
                }
            }
            $("#subwrapper").append('<br><br><button id="finished">I\'m finished!</button>');
        },
        //create finished: function (and repeat for all questions)
        //.each - will look for each element within the parentheses
        finished: function() {
            $.each($("input[name='question-0']:checked"), function () {
                if($(this).val()==questions[0].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-1']:checked"), function () {
                if($(this).val()==questions[1].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-2']:checked"), function () {
                if($(this).val()==questions[2].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-3']:checked"), function () {
                if($(this).val()==questions[3].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-4']:checked"), function () {
                if($(this).val()==questions[4].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($("input[name='question-5']:checked"), function () {
                if($(this).val()==questions[5].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });

            this.result();
        },

        //Print the results of the game, results function
        result: function() {
            //clearInterval is used to stop the timer
            clearInterval(timer);
            //remove the time remaining section
            $("#subwrapper h3").remove();
            
            //add html to subwrapper signalling completion of game
            //then append, correct, incorrect, unanswered
            $("#subwrapper").html("<img src='assets/images/hillary.gif'>");
            $("#subwrapper").html("<h2>Game over!</h2>");
            $("#subwrapper").append("<h3>Correct: " + this.correct + "</h3>");
            $("#subwrapper").append("<h3>Incorrect  " + this.incorrect + "</h3>");
            $("#subwrapper").append("<h3>Unanswered: " + (questions.length-(this.incorrect+this.correct)) + "</h3>");
        },
}