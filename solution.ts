Here is a TypeScript solution for the problem:

```typescript
class Node {
    data: number;
    left: Node | null;
    right: Node | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    insert(data: number) {
        let newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node: Node, newNode: Node) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    findDuplicateSubtrees() {
        let countMap = new Map<string, number>();
        let res: Node[] = [];
        this.collect(this.root, countMap, res);
        return res;
    }

    collect(node: Node | null, countMap: Map<string, number>, res: Node[]) {
        if (node === null) return "#";
        let serial = node.data + "," + this.collect(node.left, countMap, res) + "," + this.collect(node.right, countMap, res);
        let count = countMap.get(serial) || 0;
        if (count === 1) res.push(node);
        countMap.set(serial, count + 1);
        return serial;
    }
}

let bt = new BinaryTree();
bt.insert(1);
bt.insert(2);
bt.insert(3);
bt.insert(4);
bt.insert(2);
bt.insert(4);
bt.insert(4);

let duplicates = bt.findDuplicateSubtrees();
for (let node of duplicates) {
    console.log(node.data);
}
```

This solution uses a depth-first search to serialize each subtree. It then checks each subtree serialization to see if it has been seen before. If it has, and this is the second time it was seen, it adds the root node of this subtree to the result array.