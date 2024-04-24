function RecursiveFactorial(num){
    if(num===1){
        return num;
    }

    return num * RecursiveFactorial(num-1);
}

let result = RecursiveFactorial(5);
console.log(result);