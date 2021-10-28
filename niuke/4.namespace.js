// 根据路径创造对象obj
/**
 * 方法一
 * @param oNamespace
 * @param sPackage
 * @returns {*}
 */
function namespace(oNamespace, sPackage) {
    let tmpWrap = oNamespace;
    sPackage.split('.').forEach(item => {
        tmpWrap = tmpWrap[item] = Object.assign({}, tmpWrap[item]);
    });
    return oNamespace;
}
let a = {a:{a:1}}
let obj = namespace(a, 'a.b.c.d.e.f.g');
console.log(obj.a.b.c.d.e.f.g)


