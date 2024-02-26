function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        const numberToInsert = arr[i];
        let j = i - 1;
        while (j>=0 && arr[j]>numberToInsert) {
            arr[j+1] = arr[j];
            j = j -1;
        }
        arr[j+1] = numberToInsert;
    }    
}

const arr = [-6,4,5,19,-3,5];
insertionSort(arr);
console.log(arr);