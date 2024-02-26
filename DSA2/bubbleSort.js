function bubbleSort(arr){
    let swapped,temp ;
    do{
        swapped = false;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true
            }
        }
    }while(swapped)
}

let array = [8,20,-2,6,-6,4,-3]
bubbleSort(array)
console.log(array);