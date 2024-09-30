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