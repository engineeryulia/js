// let a = 25;
// let b = 5;
// let oper = '-';
// switch (true) {
//   case oper == '+':
//     alert(a + b);
//     break;
//   case oper == '-':
//     alert(a - b);
//     break;
//   case oper == '/':
//     alert(a / b);
//     break;
// }
// let dayNumber = new Date().getDay();
// switch (true) {
//   case dayNumber:
//     0;
//     alert('sun');
//     break;
//   case dayNumber:
//     1;
//     alert('mon');
//     break;
//   case dayNumber:
//     2;
//     alert('tus');
//     break;
//   case dayNumber:
//     3;
//     alert('wed');
//     break;
//   case dayNumber:
//     4;
//     alert('thur');
//     break;
//   case dayNumber:
//     5;
//     alert('fri');
//     break;
//   case dayNumber:
//     6;
//     alert('sat');
//     break;
// }

// let num = 15;
// switch (true) {
//   case num % 3 === 0 && num % 5 === 0:
//     alert('fizzbuzz');
//   case num % 3 === 0:
//     alert('fizz');
//     break;
//   case num % 5 === 0:
//     alert('buzz');
//     break;

//   default:
//     alert('default');
//     break;
// }

let date = new Date();
let time = date.getHours();
switch (true) {
  case time > 6 && time < 12:
    console.log('Morning!');
    break;
  case time >= 12 && time < 18:
    console.log('Aftenoon!');
    break;
  case time >= 18 && time < 21:
    console.log('Evening!');
    break;
  default:
    console.log('Night');
}
