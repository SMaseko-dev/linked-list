class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add node at the end
    append(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Add node at the start
    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Returns the total number of nodes
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Returns the first node
    getHead() {
        return this.head;
    }

    // Returns the last node
    getTail() {
        if (!this.head) return null;
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current;
    }

    // Returns node at given index
    at(index) {
        if (index < 0) return null;
        let current = this.head;
        let i = 0;
        while (current && i < index) {
            current = current.next;
            i++;
        }
        return current || null;
    }

    // Removes the last element
    pop() {
        if (!this.head) return null;
        if (!this.head.next) {
            let removed = this.head;
            this.head = null;
            return removed;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        let removed = current.next;
        current.next = null;
        return removed;
    }

    // Returns true if value exists
    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    // Returns index of node containing value, or null
    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) return index;
            current = current.next;
            index++;
        }
        return null;
    }

    // Represent LinkedList as string
    toString() {
        let current = this.head;
        let str = "";
        while (current) {
            str += `( ${current.value} ) -> `;
            current = current.next;
        }
        return str + "null";
    }

    // Print LinkedList
    printList() {
        console.log(this.toString());
    }
}

// Example usage
let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.printList(); // ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null
console.log("Size:", list.size());
console.log("Head:", list.getHead().value);
console.log("Tail:", list.getTail().value);
console.log("At index 2:", list.at(2).value);
console.log("Contains 20:", list.contains(20));
console.log("Index of 30:", list.find(30));
list.pop();
list.printList(); // ( 5 ) -> ( 10 ) -> ( 20 ) -> null
