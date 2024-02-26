
//normal binary search
function binarySearch(arr,target) {
    let LI = 0;
    let RI = arr.length-1;
    while(LI<=RI){
        let MI = Math.floor((LI+RI)/2);
    
    if(target===arr[MI]){
        return MI;
    }
    if(target<arr[MI]){
        RI = MI-1
    }else{
        LI = MI+1
    }
}return -1
}

//find square root or nearest integer of a number with binary search
var mySqrt = function(x) {
    let LI = 0;
    let RI = x;
    while(LI <= RI) {
        const MI = Math.floor((LI+RI)/2);
        if(MI*MI <= x && (MI+1) * (MI+1) > x) {
            return MI;
        }
        else if(MI*MI < x) {
            LI = MI + 1;
        }
        else {
            RI = MI - 1;
        }
    }
};

let array = [1,3,4,5,7,8,9,10,12,14]
target = 3;
console.log(binarySearch(array,target));

let x = 8;
console.log(mySqrt(64));