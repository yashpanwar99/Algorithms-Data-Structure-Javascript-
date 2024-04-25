// Given an array of "n" elements and a target element "t", find the index of "t" in the array. Return -1 if the target element is not found.
// arr= [-1,9,3,0,6]; t=3 => it should return 2   and t = 20 => it should return -1

// Binar Search Pseudocode
/*
    - If the array is empty , return -1 as the element is not found.
    - If the array has elements, find the middle element in the array. If target is equal to middle element, return the middle element index.
    - If target is less then middle element , binary search left half of the array.
    - If target is more then middle element, binary search right half of the array.

    -Binary search works only on a sorted set of elements.
*/

function recursiveBinarySearch(arr, target){
    return search(arr,target, 0 , arr.length-1)
}

function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex)/2) ;

    if(target === arr[middleIndex]){
        return middleIndex;
    }

    if(target < arr[middleIndex]){
        return search(arr, target , leftIndex, middleIndex-1)
    }else{
        return search(arr, target, middleIndex+1, rightIndex);
    }

}

let z = [1,2,3,4,5,6,7,8,9];
console.log(recursiveBinarySearch(z, 7))