class Node{
    constructor(value){
        this.value = value;
        this.left = null
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root == null;
    }

    insert(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
        if(root.left == null){
            root.left = node;
        }else{
            this.insertNode(root.left,node)
        }
    }else{
        if(root.right==null){
            root.right = null
        }else{
            this.insertNode(root.right,node)
        }
    }

    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
}

const bst = new BST()
bst.insert(5)
bst.insert(6)
bst.insert(4)

console.log(bst.min(bst.root));