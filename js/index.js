$(function(){

    //整屏滑动轮播
    $(".fullpage").mousedown(function(e){
        e.preventDefault();
    })
    $(".fullpage").mousemove(function(e){
        e.preventDefault();
    })
    var num=0;
    var heights=$(window).height();
    var flag=true;
    touch.on("body","swipeup",".fullpage",function(){
        if(!flag){
            return;
        }
        num++;
        if(num>=$(".section").length){
            num=$(".section").length-1;
            return;
        }
        $(".fullpage").css({
            marginTop:-num*heights,
            transition:"margin-top 1s ease"
        })
        $(".lunbodian span").css("background","none").eq(num).css("background","#316389");
        flag=false;
    })
    touch.on("body","swipedown",".fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num<0){
            num=0;
            return;
        }
        $(".fullpage").css({
            marginTop:-num*heights,
            transition:"margin-top 1s ease"
        })
        $(".lunbodian span").css("background","none").eq(num).css("background","#316389");
        flag=false;
    })
    $(".fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
        $(".box1").each(function(i,obj){
            if(i==num){
                $(obj).css({opacity:1,transform:"translate(0,0)",transition:"transform 1s ease,opacity 1s"});
            }else if(i!=0){
                $(obj).css({opacity:0,transform:"translate(-50px,0)",transition:"transform 1s ease,opacity 2s"});
            }else if(i==0){
                $(obj).css({transform:"translate(-20px,0)",transition:"transform 1s ease,opacity 1s"});
            }
        })
        $(".box2").each(function(i,obj){
            if(i==num){
                $(obj).css({opacity:1,transform:"translate(0,0)",transition:"transform 1s ease,opacity 1s"});
            }else if(i!=0){
                $(obj).css({opacity:0,transform:"translate(50px,0)",transition:"transform 1s ease,opacity 1s"});
            }else if(i==0){
                $(obj).css({transform:"translate(0,0)",transition:"transform 1s ease"});
            }
        })
    })

//    菜单响应
    var flag2=true;
    $(".min_right").click(function(){
        if(flag2){
            $(".topline").css("transform","translate(0,4px) rotate(45deg)");
            $(".bottomline").css("transform","translate(0,-4px) rotate(-45deg)");
            $(".min_nav a").each(function(index,obj){
                $(obj).css({opacity:"0",animation:"nav 1s ease "+index*.2+"s forwards"});
            })
            flag2=false;
            $(".min_nav").css("display","block");
        }else{
            $(".topline").css("transform","translate(0,0) rotate(0deg)");
            $(".bottomline").css("transform","translate(0,0) rotate(0deg)");
            $(".min_nav a").each(function(index,obj){
                $(obj).css({opacity:".8",animation:"nav1 1s ease "+(1.2-index*.2)+"s forwards"});
            })
            flag2=true;
            setTimeout(function(){
                $(".min_nav").css("display","none");
            },1200)
        }

    })

//    窗口响应
    var heights=$(window).height();
    $(window).resize(function(){
        var widths=$(window).width();
        $(".fullpage").css({marginTop:-num*heights});
        if(widths>1000){
            $(".topline,.bottomline").css({transform:"translate(0,0) rotate(0deg)"})
             $(".min a").css({animation:"none"});
            flag2=true;
        }
    })
    // $(".jiantou").each(function(i,obj){
    //     $(obj).click(function(){
    //         $(".fullpage").css({marginTop:-(i+1)*heights});
    //     })
    //     $(".box1,.box2").css({opacity:1});
    // })
})