function factorial(n){
    if(n==1||n==0){
        return 1;
    }
    return n*factorial(n-1);
}

function fibonacci(n) {
    if(n<2){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2)
}

function sumOfDigits(n) {
    if(n<10){
        return n
    }
    return n%10+sumOfDigits(Math.floor(n/10))
    
}

function reverseString(str){
    if(str===''){
        return ''
    }
    return reverseString(str.substr(1))+str.charAt(0);
}

function multiplyArray(arr) {
    if(arr.length===0){
        return 1;
    }
    return arr[0]*multiplyArray(arr.slice(1))
}

console.log(factorial(4));
console.log(fibonacci(10));
console.log(sumOfDigits(125));
console.log(reverseString('hello'));
let array = [1,2,3,4,5];
console.log(multiplyArray(array));