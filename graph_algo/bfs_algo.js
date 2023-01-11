"use strict";
exports.__esModule = true;
// Breadth-First Search: Find 8 in the following graph
var adjacency_list_1 = require("./adjacency_list");
var adjacencyList = (0, adjacency_list_1.drawGraph)();
var bfs = function (start) {
    var visited = new Set();
    var queue = [start];
    while (queue.length > 0) {
        console.log(queue);
        var node = queue.shift(); // remove node from queue and store in node var
        console.log(node);
        var next = adjacencyList.get(node);
        next.forEach(function (child) {
            if (child === 8) {
                console.log("8 is found");
            }
            if (!visited.has(child)) {
                visited.add(child);
                queue.push(child);
            }
        });
    }
};
bfs(5);
