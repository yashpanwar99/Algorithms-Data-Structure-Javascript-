let sum = 0;

function summation(num){
    for(let i=1; i<=num; i++){
        sum += i;
    }
    return sum;
}

let ans = summation(5)
console.log(ans)


/*
    We can't calculate the absolute time for a program. So we count the number of times a statement executes based on the input size.
    
*/