
// this is our array/list of plants - add as many as you like
let arrPlants = ["Cactus", "Flower", "Aloe", "Rose", "Strewberry", "Tree", "Hydranga", "Tomato", "Hibiscus", "Pineapple"];
//shortcut to the unordered list that will show our plants
let ulPlants = document.getElementById("ulPlants");

// this function will loop through the plants in the array and add them to the uLPlants unorderd list as list items
function showPlants(){

    // for Each is just another way of looping through the array
    arrPlants.forEach(function(plant, index){
        // create a list item to hold the current plant name as we loop through
        let li = document.createElement("li");
        // set the text of the list ltem to our plant name
        li.textContent = plant;

        // add an onclick event handler to allow the plant to be deleted
        li.onclick = function(){
            // ask the user if they really want to delete the plant
            if (confirm("Remove " + plant + "?")){
                // remove the plant from the array - remove current item index
                arrPlants.splice(index, 1);

                // add a message that the plant was removed
                document.getElementById("divMessage").textContent = plant + "was removed!"

                // refresh the plant list
                showPlants();
            }
        }

        // now add the plant to the list
        ulPlants.appendChild(li);
    });
}

// function to allow the user to add a plant to the array
function addPlant(){
    // clear out the ulPlants list before adding any plants to it
    ulPlants.innerHTML = "";

    // get the text that the user entered into the add plant textbox
    let NewPlant = document.getElementById("txtNewPlant").value.trim();

    // make sure that the input is not empty
    if (newPlant == ""){
        document.getElementById("divMessage").textContent = "Please enter a vaild plant name"
        // we're done
        return;
    }

    // add the plant to the array
    arrPlants.push(newPlant);

    //let the user know that the plant was added
    document.getElementById("divMessage").textContent + " was added"

    // erase the text from the textbox
    document.getElementById("txtNewPlant").value = ""

    // we need to call show plants again so that we see the new plants on the pahge
    showPlants();
}

// the show plant function will be called 1 time when the page loads
showPlants();

/* let plant1 = "Cactus";
let plant2 = "Flower";
let plant3 = "Aloe";
let plant4 = "Rose";
let plant5 = "Strewberry";
let plant6 = "Tree";
let plant7 = "hydranga";

console.log("plant1 =" + plant1);
console.log("plant1 =" + plant2);
console.log("plant1 =" + plant3);
console.log("plant1 =" + plant4);
console.log("plant1 =" + plant5);
console.log("plant1 =" + plant6);
console.log("plant1 =" + plant7);
*/

// instead of setting up 7 seprate variable, we are setting up 1 array with 7 slots
// Arrays start at 0 and not 1 (ex. item 7 is array 6 and item 1 is array 0)
/*let arrPlants = ["Cactus", "Flower", "Aloe", "Rose", "Strewberry", "Tree", "Hydranga"]; */

/* // loop through the array
for (let i=0; i < arrPlants.length; i++){
    console.log("plant" + (i+1) + " =" + arrPlants[i]);
}

console.log("random plant=" + arrPlants[2]);
*/