class Trie{
    constructor(){
        this.root = {}
    }

    insert(value){
        let node = this.root
        for(let c of value){
            if(node[c]==null) node[c] = {}
            node = node[c];
        }
        node.isWord = true
    } 

    traverse(value){
        let node = this.root;
        for(let c of value){
            if(node[c] ===null)return null
            node = node[c]
        }
        return node;
    }

    search(value){
        const node = this.traverse(value)
        return node!=null&&node.isWord===true
    }

    suggest(prefix){
        let node = this.traverse(prefix)
        if(!node)return []

        let suggestions = []
        this.dfs(node,prefix,suggestions)
        return suggestions
    }

    dfs(node,prefix,suggestions){
        if(node.isWord){
            suggestions.push(prefix)
        }
        for(const c in node){
            this.dfs(node[c],prefix+c,suggestions)
        }
    }
}

const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("banana");

console.log(trie.suggest("app")); // Output: ["app", "apple", "application"]