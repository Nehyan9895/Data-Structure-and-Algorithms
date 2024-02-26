class MinHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    
    poll(){
        const item = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return item
    }

    heapifyUp(){
        let index = this.heap.length - 1 
        while (index > 0) {
            let parentIndex = Math.floor((index-1)/2)
            if (this.heap[parentIndex] < this.heap[index]) {
                break
            }
            [this.heap[parentIndex],this.heap[index]] = [this.heap[index],this.heap[parentIndex]]
            index = parentIndex
        }
    }

    heapifyDown(){
        let index = 0

        while (true) {
            let leftChildIndex = 2*index+1
            let rightChildIndex = 2*index+2
            let smallestChildIndex = index

            if (leftChildIndex > 0 && this.heap[smallestChildIndex] > this.heap[leftChildIndex]) {
                smallestChildIndex = leftChildIndex
            }

            if (rightChildIndex > 0 && this.heap[smallestChildIndex] > this.heap[rightChildIndex]) {
                smallestChildIndex = rightChildIndex
            }

            if (smallestChildIndex === index) {
                break
            }

            [this.heap[smallestChildIndex],this.heap[index]] = [this.heap[index],this.heap[smallestChildIndex]]
            index = smallestChildIndex
        }
            
    }

        HeapSort(){
        let sortedArr = []

        const length = this.heap.length
        
        for (let i = 0; i < length; i++) {
           
            sortedArr.push(this.poll())
        }

        return sortedArr
    }
    
}


const heap = new MinHeap

heap.insert(60)
heap.insert(80) 
heap.insert(10)
heap.insert(70)
heap.insert(20)
heap.insert(50)
console.log(heap.heap);
console.log(heap.poll());
console.log(heap.heap);

console.log(heap.HeapSort());