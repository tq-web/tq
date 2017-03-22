$(function(){
	//购物车显示隐藏
	$(".gouwuche").hover(function(){
		$(".details1").css("display","block")
	},function(){
		$(".details1").css("display","none")
	})
	
	//购买数量加减-----------------------
	var mycount=$(".count_wrap .count")
	var mytop=$(".count_wrap .add");
	var mybottom=$(".count_wrap .minus");
	
	//初始化数量为1,并失效减      
	mybottom.attr('disabled',true);
	 //数量增加操作
    mytop.click(function(){    
        mycount.val(parseInt(mycount.val())+1)
        if (parseInt(mycount.val())!=1){
            mybottom.attr('disabled',false);
        }
      
    }) 
     //数量减少操作
    mybottom.click(function(){
        mycount.val(parseInt(mycount.val())-1);
        if (parseInt(mycount.val())==1){
            mybottom.attr('disabled',true);
        }
      
    })
    
    //加入购物车------------
    $(".append").click(function(){
    	$(".gouwuche .details1").css("display","block")
    })
    
    $("body .spn2").click(function(){
    	alert("已添加");
    })
})