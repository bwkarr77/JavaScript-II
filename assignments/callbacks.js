// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

console.log(`-----Callback Section-----`);
function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
}
getLength(items, length => {
  console.log(`Length of Array: ${length}`);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length - 1]);
}
last(items, lastCell =>{
  console.log(`Last cell value: ${lastCell}`);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
}
sumNums(5, 6, summation => {
  console.log(`The sum is: ${summation}`);
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  cb(x*y);
}
multiplyNums(4, 8, prodVal => {
  console.log(`The product is: ${prodVal}`);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let counter = 0;
  for(let i = 0; i < list.length; i++){
    if(item === list[i]){
      counter++;
    }
  }
  if(counter > 0){
    cb(true);
  }else{
    cb(false);
  }
}
contains("Pencil", items, checkVal => {
  console.log(checkVal);
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let innerArray=[];
}