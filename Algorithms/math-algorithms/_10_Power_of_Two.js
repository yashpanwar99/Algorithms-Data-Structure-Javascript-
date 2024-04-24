// BigO = O(log(n));

function isPowerOfTwo(n){
    if(n<1){
        return false;
    }

    while(n>1){
        if(n%2 !==0){
            return false;
        }
        n = n/2;
    }
    return true;
}

// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(7));

// Better approach with O(1);
function isPowerOfTwoBitWise(n){
    if(n<1){
        return false;
    }

    return ( n & (n-1)) === 0;
}

console.log(isPowerOfTwoBitWise(4));
console.log(isPowerOfTwoBitWise(5));


/*
    1 = 000
    2 = 010
    3 = 011
    4 = 100
    5 = 101
     

*/