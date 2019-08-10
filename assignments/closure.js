
console.log(`----Closure Section----`);
// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
console.log("When I say hell, you say Yea...");
const closureVar1 = "Hell";
function functionOne(){
  return "Yea!";
}
console.log(`Hell = ${functionOne()}`);


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

console.log(`\n--Challenge 2---`);
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return ()=>{
    count = count +1;
    return count;
  }
};

const newCounter = counter();
let countIterations = 1;
for (let i=0; i<countIterations-1; i++){
  newCounter();
}

console.log(`Counter value after ${countIterations} iterations: ${newCounter()}`); 

console.log(`\n--Challenge 3--`);
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

var counterFactory = function() {
  var privateCounter = 0;
  function changeBy(val){
    privateCounter += val;
  }

  return{   //returns an object of methods
    increment: function(){  // .increment  method
      changeBy(1);
    },
    decrement: function(){  // .decrement method
      changeBy(-1);
    },
    value: function(){      // .value method
      return privateCounter;
    }
  }
};

var counterUp = counterFactory(); //creates an independent variable for incremental values
var counterDown = counterFactory(); //creates an independent variable for decremental values

console.log(`Increment start Value: ${counterUp.value()}`);
console.log(`Decrement start Value: ${counterDown.value()}`);

incrVal = 3;  //Number of times it will increment.
decrVal = 6;  //Number of times it will decrement.

for(let i=0; i<incrVal; i++){
  counterUp.increment();  //counterUp increments each iteration.
}
console.log(`Increment value after ${incrVal} increments: ${counterUp.value()}`); // value after incrVal # of iterations.

for(let i=0; i<decrVal; i++){
    counterDown.decrement();  //counterDown decrements each iteration.
}
console.log(`Decrement value after ${decrVal} decrements: ${counterDown.value()}`);  // value after decrVal # of iterations.