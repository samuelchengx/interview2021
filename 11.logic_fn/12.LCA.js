/**
 * https://www.bilibili.com/video/BV16g4y1B7hj?from=search&seid=8560741088340042881
 * @type {number[]}
 */
let root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
class Node { // 定义节点
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}
const createTree = (arr) => { // 创建二叉树
    let tree = new Node(arr[0])
    let Nodes = [tree]
    let i = 1
    for (let node of Nodes){
        Nodes.push(node.left = new Node (arr[i]))
        i += 1
        if (i == arr.length) return tree
        Nodes.push(node.right = new Node(arr[i]))
        i += 1
        if (i == arr.length) return tree
    }
}
let t = createTree(root)
console.log(t)
function lowestCommonAncestor(root, p, q) {
    // 递归的出口
    if(root == null || root.data == null || root.data == q || root.data == p) {
        return root
    }
    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)
    // 说明两个节点分布在两个子树中
    if(left && right) {
        return root.data
    }
    return left ? left : right
}
console.log(lowestCommonAncestor(t, 0, 8))


