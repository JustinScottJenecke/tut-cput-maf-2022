// ----- Variables -----
var readlineSync = require('readline-sync');


// --- Functions ---

function printContractMenu() {

    console.log('\n    MTNZ Contract Offers!!\n');
    console.log('Contract Type Code  |    Contract Type    | Monthly costs');
    console.log('---------------------------------------------------------');
    console.log('       1            |  CHAT 100           | R125');
    console.log('       2            |  CHAT 200           | R230');
    console.log('       3            |  SUNDAY FREE        | R185');
    console.log('       4            |  MIDNIGHT PLUS      | R200\n');
}

function printGenderMenu() {

    console.log('\n    Select your gender:\n');
    console.log('---------------------------');
    console.log('       m       |  Male   ')
    console.log('       f       |  Female ')
}

/*================================================================== 
    Application:
===================================================================*/

printContractMenu();
var userContractChoice = readlineSync.question('Please a contract (1 - 4): ');
// convert to number
userContractChoice = parseInt(userContractChoice);

printGenderMenu();
var userGenderChoice = readlineSync.question('Please a contract (m / f): ');

var userAge = readlineSync.question('What is your age?');

// ---- Display -----

console.log('\n-------- Details --------- \n');

// display contract choice:
switch (userContractChoice) {

    case 1:
        console.log("Contract: CHAT 100")
        break;
    case 2:
        console.log("Contract: CHAT 200")
        break;
    case 3:
        console.log("Contract: SUNDAY FREE")
        break;
    case 4:
        console.log("Contract: MIDNIGHT PLUS")
        break;
    default:
        console.log("ERROR invalid option")
        break;
}

// display contract choice:
switch (userGenderChoice) {

    case 'm':
        console.log("Gender: Male")
        break;
    case 'f':
        console.log("Gender: Female")
        break;

    default:
        console.log("ERROR invalid option")
        break;
}

// display age:
console.log('Age: ' + userAge);

