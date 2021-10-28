/**
 * 实现EventEmitter类
 * 实现EventEmitter实例on emit remove once
 */
function EventEmitter(count) {
    this.event = {};
    this.onceEvent = {}
    this._maxListeners = count;
    this.printInfo = function () {
        console.log(this.event,this.onceEvent, this._maxListeners)
    }
}
EventEmitter.prototype.on = EventEmitter.prototype.addEventListener = function (type, listener) {
    if(this.event[type]) {
        if(this.event[type].length > this._maxListeners){
            return new Error(`listener不能超过${this._maxListeners}`)
        }
        this.event[type].push(listener)
    } else {
        this.event[type] = [listener]
    }
}

EventEmitter.prototype.once = function (type, listener) {
    if(!this.onceEvent[type]) {
        this.onceEvent[type] = listener
    }
}
EventEmitter.prototype.emit = function (type, ...data) {
    if(this.event[type]){
        this.event[type].forEach(listener => {
            listener.apply(this, data)
        })
    }
    if(this.onceEvent[type]) {
        this.onceEvent[type].apply(this, data)
        delete this.onceEvent[type]
    }
}
EventEmitter.prototype.remove = function (type) {
    if(this.event[type]) {
        delete this.event[type]
    }
    if(this.onceEvent[type]) {
        delete this.onceEvent[type]
    }
}
let event = new EventEmitter(10)
event.on('a', () => {
    console.log('a')
})
event.on('b', () => {
    console.log('b')
})
event.once('c', () => {
    console.log('c')
})
event.remove('b')
event.emit('a')
event.emit('c')
event.printInfo()


