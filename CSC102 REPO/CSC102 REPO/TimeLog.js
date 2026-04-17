    // this is My time log file.

 // set up a global array - set it up as an empty array at first
 let arrTimes = [];

 // create the function to record the current time - placing it in the arrTimes array
 function recordTime(){
     // lets add the current time to the array
     arrTimes.push(new Date());

     // refresh the list of times
     displayTimes();
 }

 // create a function to display the contents of the array in our div
 function displayTimes(){
     // create a shortcut to the div in the HTML code
     let divTimes = document.getElementById("divTimes")

     // erase any times that are currently in the div
     divTimes.innerHTML = "";

     // for loop to show the contents of the array
     for (let i=0; i < arrTimes.length; i++){
         // br- is an HTML line break tag so times show up on separate lines.
         divTimes.innerHTML += arrTimes[i] + "<BR>";
     }
 }
