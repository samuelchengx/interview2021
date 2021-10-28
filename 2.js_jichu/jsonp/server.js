const http = require('http')
const url = require('url')

const jsonpServer = http.createServer((req, res) => {
    let data = {
        statue: true,
        msg: 'Hello World'
    }

    const body = url.parse(req.url, true)
    const callback = body.query.callback
    // 将对象数据转为字符串
    data = JSON.stringify(data)
    // 拼接成js代码
    // 举个例子，假设这个callback回调的名字是 test
    // 拼接完就是 test({status: true,msg: 'hello jsonp'})
    // 显然，就是一段js代码，作用就是执行这个函数
    const js = `${callback}(${data})`
    console.log('fff')
    res.end(js)
});


jsonpServer.listen(8000, (err) => {
    if(!err){
        console.log('server is running at localhost 8000 port')
    }
})


