$(function(){
	$("#head").load("head.html");
	$("#ending").load("ending.html")
	
	var myWrap=$(".service");
	var myAimg=$(".service a");
	var myClose=$(".service .close");
	
	myClose.click(function(){
		myWrap.hide();
	})
	
	
	
})