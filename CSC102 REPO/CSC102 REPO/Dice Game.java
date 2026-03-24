function PlayDiceGame(){
            // variable to hol our first roll of the die
            let roll1 = getRandomNumber();
            
            console.log("roll1 =", roll1);

            let roll2 = getRandomNumber();

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
        function getRandomNumber(){
            // get a random number between 0 and 1 and mulitply by 6
            let number = Math.random() * 6;

            // this will round our number up, so we get a number between 1 and 6
            number = Math.floor (number) + 1;

            //returning / passing back the random number
            return number;
        }

        
                let intervalid = 0;

        // create the function to move the image
    
        function startImangeMove(){
            // we are creating a variable that is a shortcut/nickname for our HTML image element
            let memeImage = document.getElementById("memeImage");


            // setInterval allows us to repeatedly run code
            // function (){} is an annoyaous function - a way to run a chunk of code 1 time as a function argument
            intervalid = setInterval (function(){
                // get a random number for top and left coordinates
                let topCord = getRandomPixels();
                let leftCord = getRandomPixels();  
                
            memeImage.style.left = leftCord+ "px";
            memeImage.style.top = topCord+ "px";

            }, 1000) // 1000 miliseconds = 1 second
        
        }    

        
            // Disable the stop button
            document.getElementById("brnStop").disabled = true;

            // disable the Start button == cannot click on start button (i failed)
            document.getElementById("brnStart").disabled = false;
        
            function stopImageMove(){
                // call a built in javaScript function that stops the seninterval from running
                clearInterval(intervalid)
            }
    

    // will build a function to get a rundom number
    function getRandomPixels(){
        // adjust according based on your screen size.
        return Math.floor(Math.random() * 800)

    }
