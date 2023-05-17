function findDuplicateSubtrees(root) {
    let count = new Map();
    let ans = [];
    collect(root, count, ans);
    return ans;
}