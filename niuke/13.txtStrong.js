(function(w, d){
    let p = document.querySelector('p')
    p.innerHTML = `<strong>牛客网</strong>${p.innerText.replace(/牛客网/, '')}`
})(window, document)


let url = 'https://pre-face2sale.vipkid.com.cn/courseware/#/payment?role=1&classid=325242475012157&userid=3288352&roomid=1170373635375379275&pageIndex=1&slideCount=0&type=2&sn=MVP01-L7-U1-LC1-45_20935cdcef948eda9eb277c9bfe3915a.json~payment~1629452254458&count=1&roomVersion=2&studentid=49472157&business=cc'
function getUrlParms(name) {
    let regexp = new RegExp("(^|&)"+name+"=([^&]*)(&|$)", "i")
    let paramStr = url.split('?')[1]
    let res = paramStr.match(regexp)
    return res[2]

}
console.log(getUrlParms('role'))


