function recursiveFibonacci(n){
    if(n<2){
        return n;
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}

// console.log(recursiveFibonacci(8))

// let fib = [n];
var fib = new Array(10);
for(let i=0; i<fib.length; i++){
    fib[i] = recursiveFibonacci(i)
}

// recursiveFibonacci(10)
console.log(fib);