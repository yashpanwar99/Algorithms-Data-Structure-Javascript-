// Given an array of "n" elements and a target element "t", find the index of "t" in the array. Return -1 if the target element is not found.
// arr= [-1,9,3,0,6]; t=3 => it should return 2   and t = 20 => it should return -1

// Binar Search Pseudocode
/*
    - If the array is empty , return -1 as the element is not found.
    - If the array has elements, find the middle element in the array. If target is equal to middle element, return the middle element index.
    - If target is less then middle element , binary search left half of the array.
    - If target is more then middle element, binary search right half of the array.

    -Binary search works only on a sorted set of elements. To use binary search on a collection, the collection must first be sorted. When binary search is used to perform operations on a sorted set, the number of iterations can always be reduced on the basis of the value that is being searched.
*/

// function BinarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;

//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor(leftIndex + rightIndex) / 2;
//     // console.log(middleIndex);
//     // console.log(arr[middleIndex]);

//     if (arr[middleIndex] === target) {
//           console.log("success");
//         return middleIndex;
//     }

//     if (target < arr[middleIndex]) {
//       rightIndex = middleIndex - 1;
//     } else {
//       leftIndex = middleIndex + 1;
//     }
//   }

//   return -1;
// }

// let arr = [2, 3, 5, 7, 9];
// console.log(BinarySearch(arr, 5));


function BinarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);

        if(target === arr[middleIndex]){
            return middleIndex
        }
        
        if( target < arr[middleIndex]){
            rightIndex = middleIndex - 1 
        }else{
             leftIndex = middleIndex + 1;
        }
    }
    return -1
}

console.log(BinarySearch([2,3,4,5,6], 2))