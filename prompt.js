const prompt = require('prompt-sync')();

//////////////////////////////////////////////
// FUNCTION: DISPLAY ARRAYS AS NUMBERED LIST
// - Take an array and display it as a numbered list to the user,
//   so the user can input index to select an item from the array
function displayChoices (array) {
    console.log();
    console.log("Choose from the following:");
    for (i = 1; i < array.length; i++) {
        console.log(i+") "+JSON.stringify(array[i], null, 4))
    }
}

///////////////////////////////////////
// FUNCTION: ASK THE USER A QUESTION
function askUser(question, answers, numbered=true) {
    answers.splice(0,0,false); // insert a false item in index zero so we ignore it and start our choices at 1+
    if (numbered) {
        // If answers are accepted from a numbered list
        while (!selection) {
            displayChoices(answers);
            let attempt = prompt(question);
            if (answers.includes(answers[attempt])) {
                var selection = answers[attempt];
            }
        }
    } else {
           // If answers are accepted as strings
           while (!selection) {
            console.log();
            console.log('Choose from the following: '+answers);
            let attempt = prompt(question);
            if (answers.includes(attempt)) {
                var selection = attempt;
            }
        }
    };
    console.log("You selected: "+selection);
    return selection
}

//////////////////////////////////////////////////////////////////////
// PROMPT USER INPUT
// - Ask the user a series of questions to determine what kind of test to run

// An object to store all the user answers inside of
choices = {};

///////////////////////////////
// CHOOSE TEST ENVIRONMENT
// Ask the user an example question
choices['time'] = askUser("What time is it: ", ['day', 'night']);
