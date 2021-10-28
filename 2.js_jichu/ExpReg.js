/**
    \d  数字
    \D  除了数字
    \w  字母 数字 下划线
    \W  除了 字母 数字 下划线
    \s  空白字符  换行 空格 制表符
    \S  除了不可见任意字符
    .   除了换行符
    ^   开头
    $   结尾
    *   0个或多个
    +   一个或多个
    \s\S  \d\D  可匹配所有字符
    \p{L} 匹配字符
    \p{P} 匹配中文
    ?:  不保留分组
    exp1(?!xxx)     查找后面不是xxx的exp1
    exp1(?=xxx)      查找xxx前面的exp1
    (?<=xxx)exp1     查找xxx后面的exp1
    (?<!xxx)exp1    查找前面不是xxx的exp1
*/
/** 模式：
  i 不区分大小写
  s 单行
  g 全部
*/
/**
 * 获取url中字段值
 */
let url = 'https://localhost:8080/#/courseware/interactive?role=2&sn=VV-L1-U1-LC1-6_54aa496697ff5f79ebb832e286e3c6cf.json&count=1&classid=319151054017405&userid=4997405&roomid=1163126547146719677&t=1627716205747&type=2&roomVersion=2'
function getUrlParams1(path){
    let reg = /(\w+)=([^&]*)/g
    let r = url.match(reg)
    let res = r.reduce((a, v) => {
        a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=')+1)
        return a
    }, {})
    return res
}
// 解析url的参数为一个对象
console.log(getUrlParams1(url))
// 解析url某个参数
function getUrlParams2(url, name) {
    let reg = new RegExp(`(?<=${name})=([^&]*)`, 'i')
    let r = url.match(reg)
    return r[1]
}
console.log(getUrlParams2(url, 'sn'))




