```cpp
#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

struct Node {
    int data;
    Node* left, *right;
};

Node* newNode(int data) {
    Node* node = new Node;
    node->data = data;
    node->left = node->right = NULL;
    return node;
}

string inorder(Node* node, unordered_map<string, int>& m) {
    if (node == NULL)
        return "";

    string str = "(";
    str += inorder(node->left, m);
    str += to_string(node->data);
    str += inorder(node->right, m);
    str += ")";

    if (m[str] == 1)
        cout << node->data << " ";

    m[str]++;

    return str;
}

void printAllDups(Node* root) {
    unordered_map<string, int> m;
    inorder(root, m);
}

int main() {
    Node* root = NULL;
    root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->right->left = newNode(2);
    root->right->left->left = newNode(4);
    root->right->right = newNode(4);
    printAllDups(root);
    return 0;
}
```