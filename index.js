console.log("hello");

// JS- array
const fruits = ["apple","pear","grape","lemon"];
console.log(fruits);

const firstItem = fruits[0];
console.log(firstItem);

const lastItem = fruits[fruits.length - 1];
console.log(lastItem);

// modificarea unui element in array:
fruits[1] = "orange";
console.log(fruits);

// adaugarea de elemente in array:
const newFruit = "banana";
fruits.push(newFruit);      // adauga un element la sfarsitul arrayului
console.log(fruits);


// stergerea unui element din array:
fruits.pop();       // sterge ultimul element din array
console.log(fruits);
fruits.shift();     // sterge primul element din array
console.log(fruits);

fruits.unshift("cherry");   // adauga un element la inceputul arrayului (la index 0)
console.log(fruits);

// aflarea indexului unui elemet din array:
const indexOfCherry = fruits.indexOf("cherry");
console.log(indexOfCherry);

// extragerea unui subset din array
const fruitsSubset = fruits.slice(1,3)
console.log(fruitsSubset);

// modificarea unui array:
fruits.splice(1, 2);    // incepand de la index 1 sterge 2 elemente
console.log(fruits);

fruits.splice(1, 0, "blueberry", "strawberry"); // incepand de la index 1 sterge 0 elemente, adauga alte doua elemente (blueberry, strawberry)
console.log(fruits);

const allFruits = fruits.concat(fruitsSubset);
console.log(fruits);

// JS Objects
const person = {
    name : "John",
    surname : "Doe",
    age : 31,
    address : {
        street : "Florilor",
        number : 123
    },
    contact : {
        phone : "0720001002",
        email : "j_doe@unknown.com"
    },
    hobies : ["hiking","fishing","chess"]
};
console.log("person name: ", person.name);
console.log("person hobies: ",person.hobies);
console.log("person phone: ", person.contact.phone);
console.log("person surname: ", person["surname"]);     // mod nerecomandat

// modificarea proprietatilor unui obiect
person.name = "George";
console.log("person: ",person);

// compararea obiectelor:
const obj1 = {a : 1};
const obj2 = {a : 1};

console.log("obs1 === obj2: ", obj1===obj2);

const obj3 = obj1;
console.log("obs3 === obj1: ", obj3===obj1);

// obj1 = {b : 3};
// console.log("obs3 === obj1: ", obj3===obj1);    // ???

// JS Date
let now = new Date;
console.log("Data: ", now);

let yesterday = new Date("2024-09-29");
console.log("Yesterday: ", yesterday);

// Date methods:
// accesarea proprietatilor unui obiect Date
console.log("now.getDate():", now.getDate());    // returneaza ziua din luna de pe obiectul now
console.log("now.getDay():", now.getDay());    // returneaza ziua din saptamana de pe obiectul now (duminica = 0)
console.log("now.getFullYear():", now.getFullYear());    // returneaza anul de pe obiectul now
console.log("now.getMonth():", now.getMonth());    // returneaza indexul lunii de pe obiectul now (0 - 11)
console.log("now.getHours():", now.getHours());    // returneaza ora de pe obiectul now
console.log("now.getMinutes():", now.getMinutes());    // returneaza minutul de pe obiectul now
console.log("now.getSeconds():", now.getSeconds());    // returneaza secunda de pe obiectul now
console.log("now.getMilliseconds():", now.getMilliseconds());    // returneaza milisecundele de pe obiectul now

// setarea proprietatilor unui obiect Date:
yesterday.setFullYear(2023);
console.log("yesterday: ", yesterday);
yesterday.setMonth(6);
console.log("yesterday: ", yesterday);
yesterday.setDate(21);
console.log("yesterday: ", yesterday);
yesterday.setHours(15);
console.log("yesterday: ", yesterday);
yesterday.setMinutes(36);
console.log("yesterday: ", yesterday);
yesterday.setSeconds(48);
console.log("yesterday: ", yesterday);

// adaugare de zile:
yesterday.setDate(yesterday.getDate()+2);
console.log("yesterday: ", yesterday);

// diferenta dintre doua date in milisecunde:
const difference = now - yesterday;
console.log("difference:", difference);

// formatarea unei date:
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const weekday = now.getDay();
const hour = now.getHours();
const minutes = now.getMinutes();

const months = ["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August",
    "Septembrie","Octombrie","Noiembrie","Decembrie"];
const weekDays = ["Duminica","Luni","Marti","Miercuri","Joi","Vineri","Sambata"];

let formatedDate = `${year}, ${months[month]}, ${day}, ${weekDays[weekday]}, ora ${hour}:${minutes}`;
console.log(formatedDate);

// timestamp:
const newDate = new Date();
const timestamp = newDate.getTime();
console.log("newDate: ", newDate);
const fromTimestamp = new Date(timestamp - 5000000);
console.log("fromTimestamp: ",fromTimestamp);