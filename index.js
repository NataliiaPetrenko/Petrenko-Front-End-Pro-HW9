// without Math

// const legsTriangle = prompt("Hi! Kindly enter the length of the legs of the triangle with space: ", "20 15");
// let userAnswer;

// switch (legsTriangle) {
//     case null:
//         alert ("Oops! Your field is empty!");
//         break;

//     default:
//         userAnswer = legsTriangle.split(' ');
// }

// const firstLeg = Number(userAnswer[0]);
// const secondLeg = Number(userAnswer[1]);

// let result;


// switch (true) {

//     case (userAnswer.length !== 2):
//     alert ("Oops! You entered the wrong quantity of numbers!");
//     break;

//     case (Number.isNaN(firstLeg) && Number.isNaN(secondLeg)):
//     alert ("Oops! You entered the wrong type of data!");
//     break;

//     case (firstLeg < 0 && secondLeg < 0):
//     alert ("Oops! You entered the low numbers!")
//     break;

//     default:
//     result = ((firstLeg**2) + (secondLeg**2))**(1/2);
//     alert (`The length of the legs of the triangle is ${result}`);
// }

// with Math

const legsTriangle = prompt("Hi! Kindly enter the length of the legs of the triangle with space: ", "20 15");
let userAnswer;

switch (legsTriangle) {
    case null:
        alert ("Oops! Your field is empty!");
        break;

    default:
        userAnswer = legsTriangle.split(' ');
}

const firstLeg = Number(userAnswer[0]);
const secondLeg = Number(userAnswer[1]);

let result;


switch (true) {

    case (userAnswer.length !== 2):
    alert ("Oops! You entered the wrong quantity of numbers!");
    break;

    case (Number.isNaN(firstLeg) && Number.isNaN(secondLeg)):
    alert ("Oops! You entered the wrong type of data!");
    break;

    case (firstLeg < 0 && secondLeg < 0):
    alert ("Oops! You entered the low numbers!")
    break;

    default:
    result = Math.hypot(firstLeg, secondLeg);
    alert (`The length of the legs of the triangle is ${result}`);
}












