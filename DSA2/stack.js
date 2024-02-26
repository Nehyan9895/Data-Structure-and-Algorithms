class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        if (this.items.length === 0) {
            return 'Underflow - The stack is empty.'
        }
        return this.items.pop()
    }

    isEmpty() {
        return this.items.length === 0
    }

    print() {
        console.log(this.items)
    }

    reverse(element){
        let splitted = element.split(''),reversed='';
        for(let i=0;i<splitted.length;i++){
            this.items.push(splitted[i])
        }
        while(this.items.length>0){
            reversed += this.items.pop()
        }
        return reversed
    }
}

// Create a new stack
const myStack = new Stack();

console.log(myStack.reverse('Hello'));

