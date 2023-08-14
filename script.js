"use strict";

// let user = new Object();
// console.log(user);

// user.name = "John";
// console.log(user);

// user.surName = "Smith";
// console.log(user);

// user.name = "Pete";
// console.log(user);

// delete user.name;
// console.log(user);

// let schedule = {};
// schedule["8:30"] = "get up";
// console.log(schedule);

// const isEmpty = function (obj) {
//   for (let key in obj) {
//     // simple, if there is a key, the for loop will start
//     // this means there is a property in the object
//     return false;
//   }
//   return true;
// };

// alert(isEmpty(schedule));

// let salaries = {};

// const salarySum = function (obj) {
// if there aren't any values, the sum will stay 0
// no need to specifically return 0
//   let sum = 0;
//   for (let key in obj) {
//     sum += obj[key];
//     console.log(`${sum}`);
//     // return sum;
//   }
//   return sum;
// };

// alert(salarySum(salaries));

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// console.log(menu);

// const multiplyNumeric = function (obj) {
//   for (let key in obj) {
//     console.log(`${typeof obj[key]}`);
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// };

// multiplyNumeric(menu);

// console.log(menu);

/* ---- Array Cardio Day 1 ---- */
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const peopleOne = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// console.table(inventors);

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// ---- the filter method loops over an array and 'filters' out elements/ indexes of the array that do not meet a specific condition that has been laid out in the callback function
const fifteen = inventors.filter(function (inventor) {
  // if anything evaluates to true in the filter method, it keeps/ pushes that array to the new array that we created 'fifteen', in this case
  if (inventor.year >= 1500 && inventor.year <= 1599) {
    return true;
  }
});
// original array with all inventors
// console.log(inventors);

// array with inventors birthyear..? in the fifteen hundreds
// console.log(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// when we use the map function on an array, we are creating a new array and returning that new array
// one thing to note with map, is that it always returns an array of the same length that was passed in
// i.e. if we pass in an array with a length of 5, it'll make a new array with a lenght of 5
// this is different than filter (and presummably others that can take in a length of 5 and return a new array with a length of 2 for example)

const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
// console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// sort is one of the tricky ones, it uses a sort method that returns 1 or -1 and based on those return values will sort accordingly
// so, the normal way to write it is as shown below, return 1 if a is greater than b, -1 if a is less than b, or 0 if equal.
// but it doesn't matter if its 1 or -1, the point is that it just has to be a positive or negative, so a really short hand way to write it is a - b.
// if a - b is a negative number, that means a is less than b, if it stays positive, then a is greater than b.

// long hand way of writing it out
// const ordered = inventors.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const ordered = inventors.sort((a, b) => a.year - b.year);
// console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
// an easy way to think of the reduce method is that it is very similar to using a for loop to tally a sum of numbers
// its essentially the same thing, just in a neater package
// one thing to keep in mind is that with reduce, it has a running total (snowball, remember), that total or number that everything is being reduced into is called the accumulator.
// this value needs to be initialized which happens after the curly braces of the callback function. if not, the return value is [Object Object] which we don't want

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

// console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
  const first = a.passed - a.year;
  const second = b.passed - b.year;
  return second - first;
});

// console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// since this is an external page, it seems like the video was running the code in the console
// but the code looked like this ->
// we are selecting this element of the webpage that has the boulevards
// const category = document.querySelector(".mw-category");

// from that selection, we are getting all of the links within it
// side note, since querySelectorAll returns a NodeList, we need to use either Array.from() or the spread operator to convert it from a NodeList to an array
// const links = [...category.querySelectorAll("a")];

// with that array, we can map it to get the text content out of the link, and on that returned array use the filter method to check if it includes 'de'
// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes("de"));

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = peopleOne.sort(function (lastOne, nextOne) {
  const [aLast, aFirst] = lastOne.split(",");
  const [bLast, bFirst] = nextOne.split(",");
  return aLast > bLast ? 1 : -1;
});

// console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

// wonky one here
// this just showcases how flexible the reduce method really is
// first things first, our accumulator is going to be an object (an empty object), the idea is that on every loop, we just add the item to the object and keep a running tally
const transportation = data.reduce(function (obj, item) {
  // here inside the reduce method, we are checking to see if the current item exists in the object (property/ key whatever you want to call it), if it doesn't, initialize it to 0 and exit the block
  if (!obj[item]) {
    obj[item] = 0;
  }

  // move down here, we just keep incrementing the value of the object key to whatever is passed in i.e. car, truck, etc
  obj[item]++;

  // and lastly we are returning the object so it can keep being used in the reduce method loop
  return obj;
}, {});

// console.log(transportation);

/* ---- Array Cardio Day 2 ---- */
const peopleTwo = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// the some method is only concerned if at least one element in the array meets the criteria
// so if at least one person in the array is older than 19, true is returned
const isAdultSome = peopleTwo.some(function (person) {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) return true;
});
// console.log(isAdultSome);

// Array.prototype.every() // is everyone 19 or older?
// similar to some, every only returns true if every element meets the criteria specified in the function
const isAdultEvery = peopleTwo.every(function (person) {
  const currentYear = new Date().getFullYear();
  if (currentYear - person.year >= 19) return true;
});
// console.log(isAdultEvery);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
// const comment = comments.find(function (comment) {
//   if (comment.id === 823423) return true;
// });

const comment = comments.find((comment) => comment.id === 823423);

// console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex((comment) => comment.id === 823423);
// console.log(index);

// few different ways to delete the element from an array (since thats what findIndex might be mainly used for)
// using the splice method, we can target the index we just got and with the second parameter only delete 1 element which is the index we passed in
// comments.splice(index, 1);
// console.log(comments);

// different way -> creating a new array and spreading arrays into it using the slice method to not include the index we got with findIndex
// the idea is that we have two arrays, the first one that is sliced up to the index (since it isn't included), and the second one where we start at the element of index + 1, so we skip out initial index, leaving it out
// then we just use the spread operators to spread the arrays into the new array
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];

const add = function (a, b) {
  return a + b;
};

const subtract = function (...nums) {
  const [arr] = [...nums];

  return arr.reduce((total, num) => {
    return total - num;
  }, 0);
};

const sum = function (...nums) {
  const [arr] = [...nums];

  return arr.reduce((total, num) => {
    return total + num;
  }, 0);
};

const multiply = function (...nums) {
  const [arr] = [...nums];

  return arr.reduce((total, num) => {
    return total * num;
  }, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

// const factorial = function (num) {
//   if (num === 0) {
//     return 1;
//   } else {
//     let total = num * (num - 1);
//     for (let i = num - 2; i >= 1; i--) {
//       total *= i;
//     }
//   }
// };

const factorial = function (num) {
  // easy solution compared to mine
  // the biggest thing was initializing the starting value (or total) to 0, if we started it at 1, we could have just looped through without getting hung up on the first loop
  // 1 * i(5) = 5
  // 5 * i(4) = 20
  // 20 * i(3) = 60
  // 60 * i(2) = 120
  // 60 * i(1) = 120
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  console.log(total);
};

// console.log(add(1, 2));
// console.log(subtract([1, 2, 3, 4]));
// console.log(sum([1, 2, 3, 4]));
// console.log(multiply([2, 4, 6, 8, 10, 12, 14]));
// console.log(power(3, 3));
// console.log(factorial(5));

const palindromes = function (str) {
  const strippedString = str
    .toLowerCase()
    .replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, "");

  let counterBack = strippedString.length;

  for (let i = 0; i <= strippedString.length / 2; i++) {
    if (strippedString[i] !== strippedString[counterBack - 1]) {
      return false;
    }
    counterBack--;
    // console.log(`String first half: ${strippedString[i]}`);
    // console.log(`String last half: ${strippedString[counterBack - 1]}`);
  }
  return true;
};

// palindromes("racecar");
// palindromes("racecar!");
// palindromes("A car, a man, a maraca.");
// palindromes("rac3e3car");
// palindromes("r3ace3car");

const fibonacci = function (count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  // i was on the right track
  // the values keep swapping within the loop
  // current value = first + second
  // first will have seconds value
  // and second will have the current value
  // and they keep swapping
  let first = 0;
  let second = 1;

  // really tricky one here
  // part point is to start the loop at 1, not 0 like normal
  // the idea is to always print or have Fx(fibonacci) be the first value
  for (let i = 1; i <= count; i++) {
    console.log(`Value stored in first: ${first}`);

    let current = first + second;
    first = second;
    second = current;
    // console.log(`Current: ${current} First: ${first} Second: ${second}`);
  }
  console.log(first);

  return first;
};

// fibonacci(8);

const getTheTitles = function (books) {
  const titles = books.map((book) => book.title);
  return titles;
};

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];
// getTheTitles(books);

// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ];

// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 2018,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ];

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (people) {
  const oldest = people
    .map((person) => {
      !person.yearOfDeath
        ? (person.age = new Date().getFullYear() - person.yearOfBirth)
        : (person.age = person.yearOfDeath - person.yearOfBirth);

      console.log(person);

      return person;
    })
    .sort((a, b) => a.age - b.age)
    .slice(-1);
  console.log(oldest);

  return oldest[0].name;
};
console.log(findTheOldest(people));
