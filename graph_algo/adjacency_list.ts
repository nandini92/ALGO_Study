// Adjacency List is a way to represent a graph which would be more space efficient

const nodes: number[] = [1,2,3,4,5,6,7,8];

const edges: number[][] = [
    [1,2],
    [1,3],
    [2,4],
    [3,5],
    [5,6],
    [6,7],
    [3,8]
]

// The graph
const adjacencyList = new Map();

// Add node to graph
const addNode = (node: number) => {
    adjacencyList.set(node, []);
}

// Add edge, undirected
const addEdge = (origin: number, destination: number) => {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

// Create the graph
const drawGraph = () => {
    nodes.forEach(addNode);
    edges.forEach(edge => addEdge(edge[0], edge[1]));

    return adjacencyList;
}

console.log(drawGraph());

export {drawGraph};