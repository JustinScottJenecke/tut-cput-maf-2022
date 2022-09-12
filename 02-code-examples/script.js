var readline_sync_1 = require("readline-sync");

function Input() {
    var choice = 0;
    var flag = '';
    var loop = true;

    console.log('\n    MTNZ Contract Offers!!\n');
    console.log('Code  |    BANK    |Monthly costs');
    console.log('----------------------------------');
    console.log('  1   |  FNB        | R125');
    console.log('  2   |  ABSA       | R230');
    console.log('  3   |  NEDBANK    | R185');
    console.log('  4   |  CAPITEC    | R200\n');

    choice = 1 * (0, readline_sync_1.question)("Enter Your preferred bank");

    console.log('You have selected  ' + choice);

    return choice;
}

do {

    var choice2 = Input();

    switch (choice2) {
        case 1:
            console.log("You have selected FNB");
            flag = (0, readline_sync_1.question)("Do you want to continue(Y/N)");
            if (flag == 'Y' || flag == 'y') {
                looping = true;
                var choice2 = Input();
            } else {
                looping = false;
                break;
            }
        case 2:
            console.log("You have selected ABSA");
            break;
        case 3:
            console.log("You have selected NEDBANK");
            break;
        case 4:
            console.log("You have selected CAPITEC");
            break;
        default:
            console.log("INVALID INPUT");
    }
    
} while (looping != true);
