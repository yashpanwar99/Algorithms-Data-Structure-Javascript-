//  This approach has time complexity of O(n).
// function isPrime(n){
//     if(n<2){
//         return false;
//     }

//     for (i=2; i<n; i++){
//         if(n%i == 0){
//             return false
//         }
//     }
//     return true;
// }


//  This approach has time complexity of O(sqrt(n)).
function isPrime(n){
    if(n<2){
        return false;
    }

    for (i=2; i<Math.sqrt(n); i++){
        if(n%i == 0){
            return false
        }
    }
    return true;
}


console.log(isPrime(5))
console.log(isPrime(8))
// isPrime(4);