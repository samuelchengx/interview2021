Array.prototype.pushAll = function (items) {
    if (!Array.isArray(items)) {
        throw new TypeError('参数必须是一个数组。')
    }
    return this.push(...items)
}
