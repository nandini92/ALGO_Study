// Breadth-First Search: Find 8 in the following graph
import {drawGraph} from "./adjacency_list";

const adjacencyList = drawGraph();

const bfs = (start: number) => {
    const visited = new Set();

    const queue: number[] = [start];

    while(queue.length > 0){
        console.log(queue);

        const node = queue.shift(); // remove node from queue and store in node var

        console.log(node);

        const next = adjacencyList.get(node);
        
        next.forEach(child => {
            if(child === 8){
                console.log("8 is found");
            }

            if(!visited.has(child)){
                visited.add(child);
                queue.push(child);
            }
        });
    }
}

bfs(5);