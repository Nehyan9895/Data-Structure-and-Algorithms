// class Queue{
//     constructor(){
//         this.queue = []
//     }

//     enqueue(element){
//         this.queue.push(element)
//     }

//     dequeue(){
//         return this.queue.shift();
//     }

//     isEmpty(){
//         return this.queue.length === 0
//     }

//     getSize(){
//         return this.queue.length
//     }

//     peek(){
//         if(!this.isEmpty){
//         return this.queue[0]
//         }
//         return null;
//     }

//     print(){
//         console.log(this.queue.toString());
//     }
// }

// const queue = new Queue;
// queue.enqueue(10)
// queue.enqueue(5)
// queue.print();
// queue.dequeue()
// queue.print()


// The code above is not optimized because the shift method hava a linear complexity so we need to do it with an object


class Queue{
    constructor(){
        this.queue = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element){
            this.queue[this.rear] = element;
            this.rear++;
    }

    dequeue(){
        const item = this.queue[this.front];
        delete this.queue[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    getSize(){
        return this.rear - this.front
    }

    print(){
        console.log(this.queue);
    }
}

const queue = new Queue;
queue.enqueue(10)
queue.enqueue(4)
queue.enqueue(7)
queue.print()
queue.dequeue()
queue.print()