
// zadanie 23
// console.log("Daniel Trochonowicz");
// console.log("JavaScript jest mocno typowanym językiem".replace("mocno", "słabo"));
// console.log("JavaScript jest językiem wysokiego poziomu".split(" "));
// console.log("JavaScript jest językiem wysokiego poziomu".split("/\s+/"));
// console.log("JavaScript jest językiem wysokiego poziomu".repeat(3));  

// zadanie 24

// console.log(234);
// console.log((234).toString(2));

// console.log((23.2345432).toFixed(3));
// console.log((23.2345432).toPrecision(6));

// console.log(parseFloat("54.34test"));
// console.log(isFinite(2e134));

// zadanie 25

// const expenses = 250;
// const myName = "Daniel";
// let amount = 1000;
// console.log(amount - expenses);


// zadanie 26
// const zdanie2 = "Java jest tylko jedna i nie jest to Script";
// const zdanie1 = "JavaScript jest językiem wysokiego poziomu" + " " .concat(zdanie2, "! Good !!!");
// console.log(zdanie1);


// const zdanie2 = "Java jest tylko jedna i nie jest to Script";
// const zdanie1 = `JavaScript jest językiem wysokiego poziomu" ${zdanie2} ! Good !!! `;
// console.log(zdanie1);


// zadanie z funkcja

// function add(a, b){
//     console.log("po returnie nie wyswietli sie kod " + (a + b))
//     return a + b;
// }

// add(2,6);


// const substract = (a, b, c) => a - b - c;
// substract(4,5,6);
// console.log(substract);


// zapisane w konsoli na stronie 

// (a, b, c) => a - b - c
// substract(4,5,6);
// -7
// const customerName = Function(name, surname) {return `${name} ${surname}`}
// VM278:1 Uncaught SyntaxError: Missing initializer in const declaration
// const customerName = Function(name, surname) {return `${name} ${surname}`}
// VM285:1 Uncaught SyntaxError: Unexpected token {
// const customerName = function(name, surname) {return `${name} ${surname}`}
// undefined
// customerName("Daniel", "Trochonowicz");
// "Daniel Trochonowicz"
// customerName("Daniel");
// "Daniel undefined"
// (function() {return "napis"})();
// "napis"
// (function(a, b) {return a + b})(2,4);
// 6


// const miesiace = ["styczen", "luty", "marzec", "kwiecien", "maj", "czerwiec"];
// console.log(miesiace.join(", "))

// const liczby = [1234, 232, 3, 4312, 5, 543, 6];
// const mniejsze10 = liczby.filter(liczby => liczby < 10);
// console.log(mniejsze10);

// const mulitplayedNumbers = liczby.map(liczby => liczby * 3);
// console.log(mulitplayedNumbers);


// const laczenie = miesiace.concat(liczby);

// console.log(laczenie);


// zadanie 29

const car = {
marka: "Toyota",
model: "Auris",
rok: "2019",
start: function(){console.log("Start... ")}
};

car.start();
