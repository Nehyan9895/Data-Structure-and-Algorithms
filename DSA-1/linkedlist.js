
//created a node
class Node{
    constructor(value){
      this.value = value;
      this.next = null
    }
  }

  //created a linkedlist class
  class LinkedList{
    constructor(){
      this.head = null
      this.size = 0;
  }
    isEmpty(){
      return this.size === 0;
    }
    getSize(){
      return this.size;
    }

    //insert new node at the beginning
    prepend(value){
      const node = new Node(value);
      if(this.isEmpty()){
        this.head = node;
      }else{
        node.next = this.head;
        this.head = node;
      };
      this.size++;
    }
  
    //insert node at the end
    append(value){
      const node = new Node(value);
      if(this.isEmpty()){
        this.head = node;
      }else{
        let prev = this.head;
        while(prev.next){
          prev = prev.next;
        }
        prev.next = node;
      }
      this.size++;
    }
  
    //insert a node at a given index
    insert(value,index){
      if(index<0||index>this.size){
        console.log("Invalid Index");
      }if(index===0){
        prepend(value);
      }
      else{
        const node = new Node(value);
        let prev = this.head;
        for(let i=0;i<index-1;i++){
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
      }
    }

    //remove with a given value
    removeValue(value){
      if(this.isEmpty()){
        return null
      }
      if(this.head.value===value){
        this.head = this.head.next
        this.size--;
        return "value is already in the head";
      }else{
        let prev = this.head;
        while(prev.next&&prev.next.value!==value){
          prev = prev.next;
        }
          if(prev.next){
            const removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
            return value;
          }
        return "There is no element that have the input value";
      }
    }
  

    //remove from a given index
    removeFrom(index){
      if(index<0||index>=this.size){
        console.log('Invalid Index');
        return null
      }
      let removedNode;
      if(index===0){
        removedNode = this.head;
        this.head = this.head.next;
      }else{
        let prev = this.head;
        for(let i=0;i<index-1;i++){
          prev=prev.next;
        }removedNode = prev.next;
        prev.next = removedNode.next;
      }
    }

    reverse(){
      let prev = null;
      let curr = this.head;
      while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      this.head = prev;
    }

    
    removeDuplicate(){
      if(!this.head||!this.head.next){
        return this.head;
      }
      let curr = this.head;
      while(curr&&curr.next){
        if(curr.value===curr.next.value){
          curr.next = curr.next.next;
        }else{
          curr = curr.next;
        }
      }
      return this.head;
    }

    //find node with its value
    search(value){
      if(this.isEmpty()){
        return -1
      }
      let i =0;
      let curr = this.head;
      while(curr){
        if(curr.value===value){
          return i;
        }
        curr = curr.next;
        i++;
      }
      return -1;
    }

    //to print the nodes in the linked list
    print(){
      if(this.isEmpty()){
        console.log('List is empty');
      }else{
        let curr = this.head;
        let listValues = '';
        while(curr){
          listValues += `${curr.value} -> `;
          curr = curr.next;
        }
        console.log(listValues);
      }
    }
  }
  
  const list = new LinkedList();
  console.log('The list is empty?', list.isEmpty());
  console.log('List size',list.getSize())
  list.print();
  
  list.prepend(20);
  list.print();
  list.prepend(40);
  list.print();
  list.append(1);
  list.print();
  list.insert(5,2)
  list.print();
  list.reverse()
  list.append(40)
  
  console.log(list.search(40));
  list.print()
  list.removeDuplicate()
  list.print()

class Node2{
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class LinkedList2{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  isEmpty(){
    return this.size === 0
  }

  getSize(){
    return this.size;
  }

  convertArray(arr){
    if(!arr||arr.length===0){
      return null
    }
    this.head = new Node2(arr[0]);
    let curr = this.head;

    for(let i=1;i<arr.length;i++){
      let newNode = new Node2(arr[i]);
      curr.next = newNode;
      curr = newNode;
      this.size++
    }

    return this.head;
  }

  convertList(){
    if(this.isEmpty()){
      return "There is no element in the list"
    }
    let arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.value);
      curr = curr.next;;
    }
    return arr;
  }

  print(){
  if(this.isEmpty()){
    console.log('List is empty');
  }else{
    let curr = this.head;
    let listValues = '';
    while(curr){
      listValues += `${curr.value} -> `;
      curr = curr.next;
    }
    console.log(listValues);
  }
}
}


let array = [1,2,3,4,5,6];
const list2 = new LinkedList2();
list2.convertArray(array)
list2.print()
console.log(list2.convertList());