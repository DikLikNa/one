$(".target-main .target-nav li").click(function(){
	let index=$(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".card-content").eq(index).addClass("show").siblings().removeClass("show");
});
