/****************************************************************************************************************/
/* In-Class Exercises                                                                                           */
/****************************************************************************************************************/
/* 1. create an array called "fruits" and assign the values "Strawberry", "Raspberry", and "Apple" to it         */
// add code here
let fruits = ["Strawberry", "Raspberry", "Apple"];
/* 2. add two more fruits to the "fruits" array using the correct array method                                   */
// add code here
fruits.push("Banana", "Mango");
/* 3. sort the fruits array alphabetically using the correct array method                                        */
// add code here
fruits.sort();
/* 4. create a function called printFruit that prints each item in the fruits array to the console              */
/*    and call the printFruit function                                                                          */
// add code here
function printFruit() {
    for (let fruit of fruits) {
        console.log(fruit);
    }
}

// Call the printFruit function
printFruit();

/* 5. create a fruit class that has three properties: name, color, and season and one method: printFruit()      */
/*    that prints all three properties of the fruit to the console. Then, create 3 fruit objects and print      */
/*    them using the printFruit() method    */         
// Create a Fruit class
class Fruit {
    constructor(name, color, season) {
        this.name = name,
        this.color = color,
        this.season = season;
    }

    // Method to print fruit properties
    printFruit() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Season: ${this.season}`);
    }
}

// Create 3 fruit objects
const fruit1 = new Fruit("Strawberry", "Red", "Spring");
const fruit2 = new Fruit("Banana", "Yellow", "All Year");
const fruit3 = new Fruit("Apple", "Green/Red", "Fall");

// Print the fruits using the printFruit() method
fruit1.printFruit();
fruit2.printFruit();
fruit3.printFruit();


/****************************************************************************************************************/
/* In-Class Lab                                                                                                 */
/****************************************************************************************************************/
/* 1. Write a function that asks the user if they want to say hi. If the user selects "Okay" (true), then       */
/*    display a welcome message. If the user selects "Cancel" (false), then display a different message         */
function areYouSure() {
    // Ask the user if they want to say hi
    const userResponse = confirm("Do you want to say hi?");
    
    // Check the user's response
    if (userResponse) {
        alert("Welcome! We're glad to have you here.");
    } else {
        alert("No worries! Have a great day!");
    }
}


/* 2. Write a function to change 3 styles on the webpage                                                        */
function changeStyle() {
    // Change the background color
    document.body.style.backgroundColor = "lightblue";
    
    // Change the text color
    document.body.style.color = "darkblue";
    
    // Change the font size
    document.body.style.fontSize = "20px";
}

