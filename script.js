function printHello (userName, num) {
    console.log(num)
}

// console.log(num); = 10 // // // would refer to the num in the top line, not the actual number of 10. If num and userName would switch, the result would be JD




function printHello (num, userName) {
    console.log(num)
}

// console.log(num); = JD // // // This is because it refers to the position of num, and not the actual number




function printHello (userName) {
    console.log('hello there ' + userName);
}

printHello('JD');







//---------------------------------------------------------------------------------------------------------------------------------------------------










// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);


//                                                                   CODE BELOW
// var names = ['Nick', 'Megan', 'Abayomi', 'Ferny'];


// for (var index = 0; index < names.length; index++) {
//     console.log(names[index]);
// }
//                                                                   CODE STOP

// First Part = var index = 0;      ////     index starts at 0, and will only happen once.
// Second Part = names.length;      ////     If index is less than 10, keep going. If and only if the condition is true, the code block will run. If false, the loop stops.
// Third Part = index++             ////     Increases the first part (index) by 1 and continues the loop again.

//STEPS
// var index = 0;                   ////     First step checks the value
// index < names.length;            ////     Second step checks if the value is truth ; in this case, it'll always be true to the length of the names
// console.log(names[index]);       ////     If second step is true, execute the console ; Nick
// index++                          ////     Once the console is executed, index++ will increase the index by 1 and continue the loop






//---------------------------------------------------------------------------------------------------------------------------------------------------







// var str = 'Some string'; //always in '' or ""
// var num = 15; // just the number
// var bool = true; // or false
// var jsGivens = null || undefined; //These are just js givens that may be seen
// var notANumber = NaN; //Will receive NaN if console is searching for a num, but isn't provided a number
// var parsed = parseInt(str); 



// var colors = ['orange', 'green', '15', ['apple', 'grape'], 'true', 'indigo', 'NaN']; //This is an Array, defined by []
// var fruits = colors[3]; //Takes the array ['apple', 'grape']

// console.log(colors[3]) // // // //This would show ONLY the third value in the array (red) orange-0, green-1, yellow-2, red-3





// var names = ['bob', 'jd', 'sarah'];
// names[2] = 'Zachary' // Changes Sarah to Zachary

// names.pop(); // // // POP removes the last value in the array

// names.push('Tom', 'Jerry'); // // // PUSH will push values into the END of the array
// names.push(['Larry', 'Emily']) // // // PUSH will push the array into the END of the array

// names.unshift('Cassandra'); // // // UNSHIFT will push a value into the BEGINNING of the array

// console.log(names.length) // // // This will tell us how many (length) values are inside of the array. 3 names = '3' in the console