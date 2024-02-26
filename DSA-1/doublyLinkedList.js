class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;

    }
    isEmpty(){
        return this.size === 0;
    }
    getSize(){
        return this.size;
    }

    //add element in the front of the list
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }


    //add element at the end of the list
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++
    }

    //remove element at the end of the list
    removeFromEnd(){
        if(this.size===1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
    }

    //print the doubly linked list
    print(){
        if(this.isEmpty()){
            console.log("The list is empty");
        }else{
            let curr = this.head;
            let list = "";
            while(curr){
                list+=`${curr.value} <-> `
                curr = curr.next
            }
            console.log(list);
        }
    }

    //print the list reversed
    printReverse(){
        if(this.isEmpty()){
            console.log("The list is empty");
        }else{
            let curr = this.tail;
            let list ="";
            while (curr) {
                list+=`${curr.value} <-> `
                curr = curr.prev
            }
            console.log(list);
        }
    }
}

const list = new DoublyLinkedList();
list.prepend(5);
list.prepend(10);
list.print();
list.append(9)
list.removeFromEnd()
list.printReverse();