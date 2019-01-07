let doorOpen = prompt ('Is the door open? (write 1 - if yes or 0 - if no)', '');
let alarmOn = prompt ('Is the alarm on? (write 1 - if yes or 0 - if no)', '');
if (doorOpen != 1 && doorOpen != 0 || alarmOn != 1 && alarmOn !=0) {
    console.log( 'Please, next time enter 1 or 0' );
    //return false;
    //breack;
    fail;
} 
if (doorOpen == 1) {
    if (alarmOn == 1) {
        console.log( 'This is a roberry!' );
    }   else {
            console.log( 'Close the door, please.' );
        }
}   else {
        if (alarmOn == 1) {
            console.log( 'Check the alarm.' );
        }   else {
                console.log( 'Keep working, please.' );
            }
    }