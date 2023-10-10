// Exercise 1

console.error("There are some errors.");

console.warn("This is warning message!");

console.info("This is informational message.");

// Exercise 2
// let firstName=prompt("Please, write your name");

// let lastName=prompt("Please, write your lastname");

// let age=prompt("Please, write your age");
// console.log(`My name is ${firstName}, my surname is ${lastName} and I'm ${age} years old`);

// Exercise 3
// let number1= +prompt("Please, enter first number");

// let number2= +prompt("Please, enter second number");

// console.log(number1+number2);

// console.log(number1-number2);

// console.log(number1*number2);

// console.log(number1/number2);

// console.log(number1%number2);


// Exercise 4
// let country=prompt("Please, write your country, which you are live.");

// let city=prompt("Please, write your city, which you are live.");

// let street=prompt("Please, write your street, which you are live.");
// console.log(`I live in ${country}, ${city}, ${street} street`);

// Exercise 5
let numberOne=5, numberTwo=7;
numberOne=numberOne*(numberTwo+10);
numberTwo=10;
let result=numberOne*numberTwo;
console.log(result);

//Exercise 1

//and operatorunda hər iki tərəf true olarsa, sağdaki götürülür
result=10&&12;
console.log(result);

//Exercise 2

//and operatorunda tərəflərdənbiri falsy olarsa, falsy götürülür
result=""&&12;
console.log(result);

//Exercise 3

//or operatorunda bir tərəf falsy olarsa, true olan götürülür
result=undefined||12;
console.log(result);

//Exercise 4

//numberoneda hər iki tərəf sıfırdan ferqli olduğu üçün ikiside truedir, cavab sağdakidir(12). numbertwoda 0 falsy olduöu üçün and operatorunda
//falsy dəyər götürulürş numberthreedə or operatorunda tərəflərdən hansı truedirsə o götürülür
numberOne=8&&12;//12
numberTwo=0&&12;//0
let numberThree=null||10;//10
result=(numberOne+numberTwo)*numberThree;//(12+0)*10=120
console.log(result);

//Exercise 5
numberOne=12||"25";//hər iki tərəf doğru olduğundan or operatorunda ilk dəyər götürülür
numberTwo=10&&12;//and operatorunda hər iki tərəf true olarsa, sağdaki götürülür=12
let subs=numberOne-numberTwo;//12-12=0
let sum=numberOne+numberTwo;//12+12=24
console.log(subs);
console.log(sum);