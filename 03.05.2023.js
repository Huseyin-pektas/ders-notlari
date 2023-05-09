//console.log("Merhaba");

//let const , var

const PI = 3.14;
let deniz = "Deniz B.Haberal";//string
let number = 25.15;//Number
let number1 = 25;
let booleanValue = true; // true || false Boolean

let age;
let nullValue = null;

/*
console.log(deniz);
console.log(number);
console.log(number1);
console.log(booleanValue);
console.log(age);//
console.log(nullValue);//
console.log("\n");
console.log(typeof(deniz));
console.log(typeof(number));
console.log(typeof(number1));
console.log(typeof(booleanValue));
console.log(typeof(age));
console.log(typeof(nullValue));
console.log("\n");
*/

////////////////////
console.log(deniz + " " + number + " " + number1 + " " + booleanValue + " " + age + " " + nullValue);
console.log(deniz, number, number1, booleanValue, age, nullValue);

deniz = "Deniz Haberal";
console.log("\n");

console.log(deniz + " " + number + " " + number1 + " " + booleanValue + " " + age + " " + nullValue);
console.log(deniz, number, number1, booleanValue, age, nullValue);


deniz = 98;
console.log("\n");

console.log(deniz + " " + number + " " + number1 + " " + booleanValue + " " + age + " " + nullValue);
console.log(deniz, number, number1, booleanValue, age, nullValue);
console.log("\n");


console.log(` ${deniz} selamlar selamlar ${number} `);


//Mathematical operations
console.log(15 + "25");
console.log(15 - "25");
console.log(15 / "25");
console.log(15 * "25");
console.log("\n");

console.log(15 + 15 + "25" + 25);//"3025" + 25 = "302525";


console.log(15 + 15 + 25 + 15 + 10 + "25" + 25 + 10 + "20" + (20 + 20 + 10) + 10);
console.log(15 + 25 + "10" + (10 + 10 + "10"));



console.log("Type of", 15 - "25s", "is", typeof (NaN));// Type of NaN is number, NaN == Not a Number
console.log(Infinity + 5, typeof (Infinity));


let number2 = Number(false);
let stringVal = String(25);
let booleanFromNumber = Boolean(1);

console.log(number2, stringVal, booleanFromNumber);


console.log(Boolean(" "), Boolean(1), Boolean(-1), Boolean(-25), Boolean("0"), Boolean(Infinity));
console.log(Boolean(0), Boolean(undefined), Boolean(null), Boolean(""), Boolean(NaN));

console.log(Infinity / Infinity, "\n");


// > < >= <= == === !


console.log(5 > 10);//
console.log(5 < 10);
console.log(5 <= 10);
console.log(5 >= 10);
console.log(5 >= 5);
console.log(5 <= 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 <= 9);
console.log(10 >= 9);

console.log(NaN == "s15");//FALSE


console.log(NaN == NaN);
console.log(Infinity == Infinity);
console.log("\n");
console.log(isNaN("258s"));


let cagatay = -1 * Infinity;
console.log(cagatay);
console.log(cagatay == 0)


console.log(!true);


console.log(!(5 < 3));
console.log(!(5 == 3));
console.log(!(5 > 3));
console.log(!(5 >= 3));
console.log(Number(true));
console.log(Number(false));
console.log(!5);


// And : &&  ,   Or : ||

console.log(true && false);
console.log(true || false || false || false || false || false || false);
console.log(5 ^ 1);// 101 ^ 001 = 100 = 4
console.log(8 ^ 2);// 1000 ^ 0010 = 1010 = 10




console.log(5 > 4 || 8 > 7 && 10 > 15);


console.log(false && true || false && false || false && true || (false && false) && false)
console.log(false && true || false && false || false && true || false && false)
console.log(false && true || false && false || false && true || false)
console.log(false && true || false && false || false || false)
console.log(false && true || false || false || false)
console.log(false || false || false || false)


