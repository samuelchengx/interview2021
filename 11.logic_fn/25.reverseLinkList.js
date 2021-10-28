/**
 * 逆序链表
 * let c = {value: 3,next: null}
 * let b = {value: 2,next: c}
 * let a = {value: 1,next: b}
 * a -> b 变为 b->a
 * a->b->c-> c->b->a
 */
function LinkList() {
    let Node = function (ele) {
        this.ele = ele
        this.next = null
    }
    let length = 0, head = null
    this.toString = function () {
        console.log(JSON.stringify(head))
        return head
    }
    //向链表的尾部添加节点
    this.append = function (ele) {
        let node = new Node(ele)
        // 链表没有节点时
        console.log()
        if(head === null) {
            head = node
        } else {
            let current = head
            while (current.next){
                current = current.next
            }
            current.next = node
        }
        length++
    }
    //在指定的位置添加节点
    this.insert = function (pos, ele) {

    }
    //将指定的节点删除掉
    this.remove = function (ele) {

    }
    //将指定位置的节点删除
    this.removeAt = function (pos) {

    }
    // 查找指定元素的位置
    this.searchElement = function (ele) {

    }
    //查找指定位置的元素
    this.searchPosition = function (pos) {

    }
    this.reverse = function () {
        let arr = []
        let current = head
        if(head===null){ return new Error('链表为空')}
        while (current.next){
            arr.push(current)
            current = current.next
        }
        arr.push(current)
        arr.reverse()
        for(let i = 0; i < arr.length; i++) {
            arr[i].next = arr[i+1] || null
        }
       head = arr[0]
    }
}

let Link = new LinkList()
Link.append(1)
Link.append(2)
Link.append(3)
Link.append(4)
Link.reverse()
Link.toString()

let arr1 = [1,2,3,5]
let arr2 = [2,3,4]

let Link1 = new LinkList()
let Link2 = new LinkList()

arr1.forEach(item=>{
    Link1.append(item)
})

arr2.forEach(item=>{
    Link2.append(item)
})

function addTwoLinkNumbers1(l1, l2) {
    let link1 = l1.toString(), link2 = l2.toString(), arr1 = [], arr2 = []
    while (link1.next) {
        arr1.push(link1.ele)
        link1 = link1.next
    }
    arr1.push(link1.ele)
    while (link2.next) {
        arr2.push(link2.ele)
        link2 = link2.next
    }
    arr2.push(link2.ele)
    let calc = function (arr1, arr2) {
        let temp = [], len, xx
        len = arr1.length > arr2.length ? arr1.length-arr2.length : arr2.length-arr1.length
        xx = new Array(len)
        xx.fill(0)
        arr1.length > arr2.length ? arr2 = xx.concat(arr2) : arr1 = xx.concat(arr1)
        for(let i = arr1.length-1; i>=0; i--){
            console.log(arr1[i], arr2[i])
            if(arr1[i] && arr2[i]){
                temp.unshift(arr1[i] + arr2[i])
            } else {
                temp.unshift(arr1[i])
            }
        }
        return temp
    }
    return calc(arr1, arr2)
}
// console.log(addTwoLinkNumbers1(Link1, Link2))
function addTwoLinkNumbers2(l1, l2) {
    let link1 = l1.toString(), link2 = l2.toString()
    let stack1 = [], stack2 = []
    let Node = function (ele) {
        this.ele = ele
        this.next = null
    }
    while (link1) {
        stack1.push(link1.ele)
        link1 = link1.next
    }
    while (link2) {
        stack2.push(link2.ele)
        link2 = link2.next
    }
    let head = null
    while (stack1.length || stack2.length) {
        let v1 = stack1.length ? stack1.pop() : 0
        let v2 = stack2.length ? stack2.pop() : 0
        let sum = v1 + v2
        let node = new Node(sum)
        node.next = head
        head = node
    }
    return head
}
console.log(addTwoLinkNumbers2(Link1, Link2))
