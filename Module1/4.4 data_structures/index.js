import { Node, LinkedList, TextNode, ElementNode } from './data_structures.js';

const node1 = new Node(4);
const node2 = new Node(7);
const node3 = new Node(12);

console.log(node1)
console.log(node2)
console.log(node3)

const myLinkedList = new LinkedList()

// head: 4 -> 7 -> 12 -> null

myLinkedList.head = node1
myLinkedList.head.next = node2
myLinkedList.head.next.next = node3

console.log(myLinkedList)

//test out your method
console.log(myLinkedList.getHeadNode())


//test traverse method
myLinkedList.traverse()

let walker = myLinkedList.getHeadNode();

// remove node with data of 7 | what's actually being removed is the pointer, the datapoint is still floating around somewhere
// walker.next = walker.next.next;

console.log(walker);

// Swapping Nodes

// walker -> next -> next -> null
// 4      -> 7    -> 12   -> null


let temp = walker.next.next; // Node with 12

walker.next.next = temp.next; // 7 -> null

temp.next = walker.next // 12 -> 7

walker.next = temp; // 4 -> 12

// walker: 4 -> 12 -> 7 -> null
console.log(walker)


// Text Node

const textNode = new TextNode("hello");
console.log(textNode);

// Element Node

const div = new ElementNode ("div");
div.setTextContent("Hello Element Node")
console.log(div)

// Test (this is more relevant to DOM)
const p = document.createElement("p");
console.log(p);
console.dir(p);