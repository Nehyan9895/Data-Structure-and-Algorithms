class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    bfs(startingVertex) {
        const queue = [startingVertex];
        const visited = {};
        const result = [];
    
        visited[startingVertex] = true;
    
        while (queue.length) {
            const currentVertex = queue.shift();
            result.push(currentVertex);
    
            // Convert the set to an array using Array.from() and iterate over its elements
            [...this.adjacencyList[currentVertex]].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
    
        return result;
    }
    
    dfsRecursive(vertex,visited = {}){
        visited[vertex] = true;
        console.log(vertex);

        this.adjacencyList[vertex].forEach(neighbor=>{
            if(!visited[neighbor]){
                this.dfsRecursive(neighbor,visited)
            }
        })
    }

    hasEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]&&this.adjacencyList[vertex2]){
        return (
            this.adjacencyList[vertex1].has(vertex2)&&
            this.adjacencyList[vertex2].has(vertex1)
        )
        }else{
            return "One or two of the vertex is not exit"
        }
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }

        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + ' -> ' + [...this.adjacencyList[vertex]]);
        }
    }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D')

graph.addEdge('A','D')
graph.addEdge('A','B')
graph.addEdge('B','C')


// graph.display()

// console.log(graph.hasEdge('A','B'));
console.log(graph.bfs('B'));

graph.dfsRecursive('B')