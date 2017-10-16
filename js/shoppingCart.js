	
//隐藏和显示
function showDom(dom){
	dom.css("display","block");
}

function hideDom(dom){
	dom.css("display","none");
}

//全选和反选
jQuery.fn.extend({
	checked:function(isChecked){
		this.each(function(){
			this.checked = isChecked;
		});
	},
	unchecked:function(){
		this.each(function(){
			this.checked = !this.checked;
		});
	},
	backControl:function(leaderDom){
		let isTrue = true;
		this.each(function(){
			if(this.checked==false){
				isTrue = false;	
			}
		});
		leaderDom.checked = isTrue;		
	}
});


$(function(){
	
	$(".nav").load("common/nav.html",function(){
	   	//nav
		//划过网站导航
		$("#dhId").mouseover(
			function(){
				showDom($("#mapId"));
			}	
		);
		$("#dhId").mouseout(
			function(){
				hideDom($("#mapId"));
			}
		);
		$("#mapId").mouseover(
			function(){
				showDom($("#mapId"));
			}
		);
		$("#mapId").mouseout(
			
			function(){
				hideDom($("#mapId"));
			}
		);
	
	});
	
	$(".map").load("common/map.html");
	$(".footer").load("common/footer.html");

	//加减数量
	
	//减号
	$(".jian").click(
		function(){
			var ord=$(".jian").index(this);
			var num=$(".goodsCount")[ord].value;
			var price=$(".unitPrice")[ord].innerHTML;
			if(num<=1){
				return;
			}else{
				num--;
				//显示数量
				$(".goodsCount")[ord].value=num;
				//显示总数量
				$(".num")[0].innerHTML=Number($(".goodsCount")[0].value)+Number($(".goodsCount")[1].value);
				var zong=Number(num)*Number(price);
				zong=zong.toFixed(2);
				//显示单个商品的总价
				$(".nowPrice")[ord].innerHTML=zong;
				//显示减免前的总价
				$(".sum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)).toFixed(2);
				//显示减免后的总价
				$(".bigSum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)-Number($(".youhui")[0].innerHTML)).toFixed(2);
			}
		}
	);
	
	// 加号
	$(".jia").click(
		function(){
			var ord=$(".jia").index(this);
			var num=$(".goodsCount")[ord].value;
			var price=$(".unitPrice")[ord].innerHTML;
			if(num>=999){
				return;
			}else{
				num++;
				//显示数量
				$(".goodsCount")[ord].value=num;
				//显示总数量
				$(".num")[0].innerHTML=Number($(".goodsCount")[0].value)+Number($(".goodsCount")[1].value);
				var zong=Number(num)*Number(price);
				zong=zong.toFixed(2);
				//显示单个商品的总价
				$(".nowPrice")[ord].innerHTML=zong;
				//显示减免前的总价
				$(".sum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)).toFixed(2);
				//显示减免后的总价
				$(".bigSum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)-Number($(".youhui")[0].innerHTML)).toFixed(2);
			}
		}
	);
	
	//数量
	$(".goodsCount").blur(
		function(){
			var ord=$(".goodsCount").index(this);
			var num=$(".goodsCount")[ord].value;
			var price=$(".unitPrice")[ord].innerHTML;
			if($.isNumeric(($(this).val()))==false){
				alert("请输入正常的数量");
				$(this)[0].value=1;
				var zong=1*Number(price);
				zong=zong.toFixed(2);
				$(".nowPrice")[ord].innerHTML=zong;
				//显示总数量
				$(".num")[0].innerHTML=Number($(".goodsCount")[0].value)+Number($(".goodsCount")[1].value);
				//显示减免前的总价
				$(".sum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)).toFixed(2);
				//显示减免后的总价
				$(".bigSum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)-Number($(".youhui")[0].innerHTML)).toFixed(2);
				
			}else if($(this)[0].value<=0){
				alert("数量不能小于1哦");
				$(this)[0].value=1;
				var zong=1*Number(price);
				zong=zong.toFixed(2);
				$(".nowPrice")[ord].innerHTML=zong;
				//显示总数量
				$(".num")[0].innerHTML=Number($(".goodsCount")[0].value)+Number($(".goodsCount")[1].value);
				//显示减免前的总价
				$(".sum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)).toFixed(2);
				//显示减免后的总价
				$(".bigSum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)-Number($(".youhui")[0].innerHTML)).toFixed(2);
				
			}else{
				$(this)[0].value=num;
				var zong=Number(num)*Number(price);
				zong=zong.toFixed(2);
				$(".nowPrice")[ord].innerHTML=zong;
				//显示总数量
				$(".num")[0].innerHTML=Number($(".goodsCount")[0].value)+Number($(".goodsCount")[1].value);
				//显示减免前的总价
				$(".sum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)).toFixed(2);
				//显示减免后的总价
				$(".bigSum")[0].innerHTML=(Number($(".nowPrice")[0].innerHTML)+Number($(".nowPrice")[1].innerHTML)-Number($(".youhui")[0].innerHTML)).toFixed(2);
			}
		}
	);

	//全选与反选
	
	$(".allSelect").click(function(){
		$(".oneGood :checkbox").checked($(".allSelect")[0].checked);
	});
	
	$(".oneGood :checkbox").click(function(){
		$(".oneGood :checkbox").backControl($(".allSelect")[0]);
	});
	
	/*
	$(".recTop").children("a").eq(0).click(
		function(){
			$(this).css({"color":"#ffffff","background":"#8a8a8a"});
		}
	)
	$(".recTop").children("a").eq(1).click(
		function(){
			$(this).css({"color":"#8a8a8a","background":"#ffffff"});
		}
	)
	*/
	
});