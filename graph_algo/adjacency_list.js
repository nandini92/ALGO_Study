"use strict";
// Adjacency List is a way to represent a graph which would be more space efficient
exports.__esModule = true;
exports.drawGraph = void 0;
var nodes = [1, 2, 3, 4, 5, 6, 7, 8];
var edges = [
    [1, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [5, 6],
    [6, 7],
    [3, 8]
];
// The graph
var adjacencyList = new Map();
// Add node to graph
var addNode = function (node) {
    adjacencyList.set(node, []);
};
// Add edge, undirected
var addEdge = function (origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
};
// Create the graph
var drawGraph = function () {
    nodes.forEach(addNode);
    edges.forEach(function (edge) { return addEdge(edge[0], edge[1]); });
    return adjacencyList;
};
exports.drawGraph = drawGraph;
console.log(drawGraph());
