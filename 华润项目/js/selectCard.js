var aa=fun();
// $(function () {
    // $aa=aa;
   if(!isNaN(aa)){
    $("#tab_tit .tit").removeClass("active").eq(aa).addClass("active");
   }
    //将tab_con下面的不是第一个.con 的全部隐藏=====保留第一个.con
    // $(".tab_con .con:not(':nth-of-type("+aa+")')").hide();
   
    //click点击 mouseover鼠标经过
    $("#tab_tit .tit .tit_a").click(function () {
        //给当前被点击的a的父元素添加active类名，其余的父元素的兄弟元素移除active类名
        // parent()查找父元素
        //siblings()查找兄弟元素
        $(this).parent().addClass("active").siblings().removeClass("active");

        //让所有的.con隐藏，让相应下标的con显示
        $(".tab_con .sub_con").hide();
        // eq()下标  --->类似:nth-of-type()
        //index()数组下标---->0,1,2,3
        $(".tab_con .con").hide().eq($(this).parent().index()).fadeTo("fast", 1);
        //				$("#con"+$("#tab").children("li").index($(this))).show();
    })
    $("#sub_tit li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".tab_con .con").hide()
        $(".tab_con .sub_con").hide().eq($(this).index()).fadeTo("fast", 1);
    })
// })