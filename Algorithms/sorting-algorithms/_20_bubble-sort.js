/*
    Bubble Sort  
    - It is a poor sorting algorith.
*/

/*    
    Problem- Given an array of integers, sort the array
    const arr = [-1, 20, 8, -4, 9]
    bubbleSort(arr) => return [-4, -1, 8, 9, 20]
*/

function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [-5, 3, 9, -90, 5,8];
const arr2= [-7,-4,0,5,9];
bubbleSort(arr2);
console.log(arr2);