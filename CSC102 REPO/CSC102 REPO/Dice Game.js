function PlayDiceGame(){
            // variable to hol our first roll of the die
            let roll1 = getRandomNumber(6, false);
            
            console.log("roll1 =", roll1);

            let roll2 = getRandomNumber(6, false);

            console.log("roll2 = " + roll2);

            // variable to hold the sum of our rolls
            let rollsum = roll1 + roll2;

            console.log("rollsum" + rollsum)

            // test for a win - duplicate even numbers = 2, 2 or 4, 4 or 6, 6
            // % is modulus - the result when using modulus is the remainder
            // if you divide 
            if (roll1 == roll2 && roll1 %2 == 0){
                // update the message div with the good news that the round was a win
                document.getElementById("divMessage").textContent = "You win!";
            }
            // if the user rolls a 7 or 11, they lost
            else if(rollsum == 7 || rollsum == 11){
                document.getElementById("divMessage").textContent = "Sorry, You Lost";
            }
            // else is the catch all - if any other combination of dice roll happened, it was a tie
            else{
                // update them message div with the good news that the round was a tie
                document.getElementById("divMessage").textContent = "You Tied (pushed)!";
            }
        } 

        // this function will generate a random number between 1 and 6
        function getRandomNumber(max, includeZero){
            // get a random number between 0 and 1 and mulitply by max
            let number = Math.random() * max;

            // this will round our number up, so we get a number between 1 and max
            if (includezero){
                number = Math.floor(number);
                // this will round our number up, so we get a number between 1 and max
            }
            else{
            number = Math.floor (number) + 1;
            }
            //returning / passing back the random number
            return number;
        }

        // this function will validate the user input based on the requirements of the client (assignment requirements)
function validate(){
    // first name variable
    let firstName = document.getElementById("txtFirstName").value;  

    // show the first name in the console
    console.log("firstName" + firstName);

    // last name variable
    let lastName = document.getElementById("txtLastName").value;

    // show the last name in the console
    console.log("lastName" + lastName);

    // zip code variable
    let zip = document.getElementById("txtZip").value;

    // show the zip in the console
    console.log("zip" = zip);

    // create a variable to hold the first name + " " + last name
    let fullName = firstName + " " + lastName;

    console.log("fullName" + fullName);

    // create a variable to hold the message we will show to the user
    let.message = "";


    // we need to make sure the full name does not exceed 20 charaters
    if (fullName.length == 1 || fullName.length > 20){
        message = "Please enter a name that is less than 20 characters";
    }
    // the zip code can only have 5 characters
    else if (zip.length != 5){
        message = "Please enter a 5 digit zip code.";
    }
    // otherwise, the user has entered everything correctly, and they get the secret word
    else{
        message = "The secret word is validation";
    }


    console.log("message=" + message)

    // display the message on the associate div
    document.getElementById("divMessage").textContent = message;

}

        // create the function to move the image
    
        function startImangeMove(){
            // we are creating a variable that is a shortcut/nickname for our HTML image element
            let memeImage = document.getElementById("memeImage");


            // setInterval allows us to repeatedly run code
            // function (){} is an annoyaous function - a way to run a chunk of code 1 time as a function argument
            intervalid = setInterval (function(){
                // get a random number for top and left coordinates
                let topCord = getRandomNumber(801, true)
                let leftCord = getRandomNumber(801, true);  
                
            memeImage.style.left = leftCord+ "px";
            memeImage.style.top = topCord+ "px";

            }, 1000) // 1000 miliseconds = 1 second
        
            

        
            // Disable the stop button
            document.getElementById("brnStop").disabled = false;

            // disable the Start button == cannot click on start button (i failed)
            document.getElementById("brnStart").disabled = true;
        }
            function stopImageMove(){
                // call a built in javaScript function that stops the seninterval from running
                clearInterval(intervalid)

                document.getElementById("brnStop").disabled = true;

                document.getElementById("brnStart").disabled = false;
            
        }

    // will build a function to get a rundom number
    function getRandomPixels(){
        // adjust according based on your screen size.
        return Math.floor(Math.random() * 800)

    }
