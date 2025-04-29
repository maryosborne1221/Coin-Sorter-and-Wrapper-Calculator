// 200 of each coin

// Create a JavaScript program that calculates the total value of coins in US currency (pennies, nickels, dimes, and quarters) and sorts them into coin wrappers. The program will then output the number of coin wrappers needed and the total amount in dollars.


let pennies = 1;
let nickels = 5;
let dimes = 10;
let quarters = 25;

let pennyWrapperCapacity = 50;
let nickelWrapperCapacity = 40;
let dimeWrapperCapacity = 50;
let quarterWrapperCapacity = 40;

// for some reason i can understand what's happening better when i use prompt() lol
let userPennies = prompt('How many pennies do you have?');
let userNickels = prompt('How many nickels do you have?');
let userDimes = prompt('How many dimes do you have?');
let userQuarters = prompt('How many quarters do you have?');

//change it from string to number
userPennies = Number(userPennies);
userNickels = Number(userNickels);
userDimes = Number(userDimes);
userQuarters = Number(userQuarters);


let penniesTotal = userPennies * 1;
let nickelsTotal = userNickels * 5;
let dimesTotal = userDimes * 10;
let quartersTotal = userQuarters * 25;
let totalValue = penniesTotal + nickelsTotal + dimesTotal + quartersTotal;

// needs to round down - user Math.floor()
let penniesWrapsNeeded = Math.floor(userPennies / pennyWrapperCapacity);
let nickelsWrapsNeeded = Math.floor(userNickels / nickelWrapperCapacity);
let dimesWrapsNeeded = Math.floor(userDimes / dimeWrapperCapacity);
let quartersWrapsNeeded = Math.floor(userQuarters / quarterWrapperCapacity);

//convert the totals to dollars
// .toFixed(2) to make it like actual money
let penniesToDollars = (penniesTotal / 100).toFixed(2);
let nickelsToDollars = (nickelsTotal / 100).toFixed(2);
let dimesToDollars = (dimesTotal / 100).toFixed(2);
let quartersToDollars = (quartersTotal / 100).toFixed(2);

// add in the remainder to the console.log()
let leftoverPennies = userPennies % pennyWrapperCapacity;
let leftoverNickels = userNickels % nickelWrapperCapacity;
let leftoverDimes = userDimes % dimeWrapperCapacity;
let leftoverQuarters = userQuarters % quarterWrapperCapacity;


console.log(`this person has ${userPennies} pennies- $${penniesToDollars}; they get ${penniesWrapsNeeded} "penny" wraps & will have ${leftoverPennies} pennies left over`);
console.log(`this person has ${userNickels} nickels- $${nickelsToDollars}; they get ${nickelsWrapsNeeded} "nickel" wraps & will have ${leftoverNickels} nickels left over`);
console.log(`this person has ${userDimes} dimes- $${dimesToDollars}; they get ${dimesWrapsNeeded} "dime" wraps & will have ${leftoverDimes} dimes left over`); 
console.log(`this person has ${userQuarters} quarters- $${quartersToDollars}; they get ${quartersWrapsNeeded} "quarter" wraps & will have ${leftoverQuarters} quarters left over`); 