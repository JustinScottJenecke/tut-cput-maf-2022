// ----- Variables -----
var readlineSync = require('readline-sync');

var quesitonA = 0; 
var quesitonB = 0;
var quesitonC = 0;

// --- Functions ---

function printContractMenu() {

    console.log('Contract Type Code  |    Contract Type    | Monthly costs');
    console.log('---------------------------------------------------------');
    console.log('       1            |  CHAT 100           | R125');
    console.log('       2            |  CHAT 200           | R230');
    console.log('       3            |  SUNDAY FREE        | R185');
    console.log('       4            |  MIDNIGHT PLUS      | R200\n');
}

function printGenderMenu() {

    console.log('\n    Select your gender:\n');
    console.log('---------------------------------------------------------');
    console.log('       m       |  Male   ')
    console.log('       f       |  Female ')
}

// ---------- Business Logic ----------

// question a
function isMaleMidnightPlus(gender, contract) {

    if (gender == 'm' && contract == 4) {

        quesitonA++;
    }
}

// question b
function femalesUnder30(gender, age, contract) {

    if (gender == 'f' && age < 30 && contract == 2) {
        quesitonB++;
    }
}

// quesiton c
function totalSundayFree(gender, age, contract) {

    if (contract == 3 && gender == "f" && age > 50) {
        
        quesitonC = quesitonC + 160;
    
    } else if (contract == 3) {

        quesitonC = quesitonC + 185;
    }

}

/*================================================================== 
    Application:
===================================================================*/

console.log('\n    MTNZ Contract Offers!!\n');

var numParticipants = readlineSync.question('Enter number of Participants '); // determine how many times loop will run
numParticipants = parseInt(numParticipants);

for (let i = 0; i < numParticipants; i++) {

    // get contract input
    printContractMenu();
    var userContractChoice = readlineSync.question('Please a contract (1 - 4): ');
    userContractChoice = parseInt(userContractChoice); // convert choice to integer

    // get gender input
    printGenderMenu();
    var userGenderChoice = readlineSync.question('Please a contract (m / f): ');

    // get age input
    var userAge = readlineSync.question('What is your age?');

    // --- Business Logic ---

    isMaleMidnightPlus(userGenderChoice, userContractChoice);
    femalesUnder30(userGenderChoice, userAge, userContractChoice);
    totalSundayFree(userGenderChoice, userAge, userContractChoice);
}

console.log('\n  -----------  OUTPUT: ----------- \n')
console.log('The number of males who chose MIDNIGHT PLUS: ' + quesitonA);
console.log('The number of females under 30 who chose CHAT 200: ' + quesitonB);
console.log('The total monthly costs for all of the new SUNDAY FREE contracts: ' + quesitonC);


/*------------------------ Old Code ---------------------------*/

   

    // console.log('\n-------- Details --------- \n');

    // // display contract choice:
    // switch (userContractChoice) {

    //     case 1:
    //         console.log("Contract: CHAT 100")
    //         break;
    //     case 2:
    //         console.log("Contract: CHAT 200")
    //         break;
    //     case 3:
    //         console.log("Contract: SUNDAY FREE")
    //         break;
    //     case 4:
    //         console.log("Contract: MIDNIGHT PLUS")
    //         break;
    //     default:
    //         console.log("ERROR invalid option")
    //         break;
    // }

    // // display contract choice:
    // switch (userGenderChoice) {

    //     case 'm':
    //         console.log("Gender: Male")
    //         break;
    //     case 'f':
    //         console.log("Gender: Female")
    //         break;

    //     default:
    //         console.log("ERROR invalid option")
    //         break;
    // }

    // // display age:
    // console.log('Age: ' + userAge);
