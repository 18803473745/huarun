function fun(){
    //获取地址栏当中所传的参数 ?a=2
    var idNum=window.location.search;
    //字符串截取      2
    var id2=idNum.substring(3)
    return id2;
}