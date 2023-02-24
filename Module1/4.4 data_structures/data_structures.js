
// Basic node class

// export keyword makes this class available outside of this module/file
export class Node {
    constructor(data) {
        this.data = data;
    }
    next = null; // null here is a placeholder
}


// Linked List Class

export class LinkedList {
    constructor() {
        this.head = null;
    }
    // create a method to return head node
    getHeadNode() {
        return this.head;
    }

    // create a method to clear head


    // create a method to traverse or move around linklist | needs editing as of 11:28am
    traverse() {
        let walker = this.head // first Node in list, starting point
        // while walker has property .next that is not equal to null
        while (walker.next) {
            // we'll console log data of walker
            console.log(walker.data);
            // and assign walker to the next node | moving to the next node
            walker = walker.next;
        }
    }
    getLast() {
    }

    appendNodeEnd() {
    }
}

export class TextNode {
    constructor(data) {
        this.data = data;
        this.length = data.length;
    }
}

export class ElementNode {
    constructor(name) {
        this.elementName = name;
        this.textContent = null;
        this.outerHTML = null;
    }

    //this 
    setTextContent(text) {
        this.textContent = text;
        this.outerHTML = this.#setOuterHtml()
    }

    // create internal method
    #setOuterHtml() {
        return `<${this.elementName}>${this.textContent}</${this.elementName}>`;
    }
}