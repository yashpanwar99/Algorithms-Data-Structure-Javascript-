// Given an array of "n" elements and a target element "t", find the index of "t" in the array. Return -1 if the target element is not found.
// arr= [-1,9,3,0,6]; t=3 => it should return 2   and t = 20 => it should return -1

// let arr = [2,5,3,9,6];
// let t = 30;
// let result;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] === t){
//         result = i;
//         // return result;
//     }else{
//         result = -1;
//     }
// }

// console.log(result);

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};
let arr = [2, 5, 3, 9, 6];
console.log(linearSearch(arr, 3));
