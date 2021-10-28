function commonParentNode(oNode1, oNode2) {
    oNode1 = oNode1.parentNode
    oNode2 = oNode2.parentNode
    while(true){
        if(oNode1.contains(oNode2)){
            return oNode1
        }
        if(oNode2.contains(oNode1)){
            return oNode2
        }
        oNode1 = oNode1.parentNode
        oNode2 = oNode2.parentNode
    }
}
