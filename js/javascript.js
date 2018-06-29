$(document).ready(function(){
	var input = $('#rightBottom').html();
	//console.log(input);
	$("#zero").click(function(){
		$('#rightBottom').append("0");
	});
	$("#1").click(function(){
		$('#rightBottom').append("1");
	});
	$("#2").click(function(){
		$('#rightBottom').append("2");
	});
	$("#3").click(function(){
		$('#rightBottom').append("3");
	});
	$("#4").click(function(){
		$('#rightBottom').append("4");
	});
	$("#5").click(function(){
		$('#rightBottom').append("5");
	});
	$("#6").click(function(){
		$('#rightBottom').append("6");
	});
	$("#7").click(function(){
		$('#rightBottom').append("7");
	});
	$("#8").click(function(){
		$('#rightBottom').append("8");
	});
	$("#9").click(function(){
		$('#rightBottom').append("9");
	});
	$("#mult").click(function(){
		$('#rightBottom').append("x");
	});
	$("#div").click(function(){
		$('#rightBottom').append("/");
	});
	$("#minus").click(function(){
		$('#rightBottom').append("-");
	});
	$("#plus").click(function(){
		$('#rightBottom').append("+");
	});

	$("#AC").click(function(){
		$("#rightBottom").empty();
		$("#rightTop").empty();
	});
	$("#CE").click(function(){
		var clear = $("#rightBottom").html();
		clear = clear.slice(0,clear.length-1);
		$("#rightBottom").html(clear);
	});


	$("#equal").click(function(){

		if($('#rightBottom').html().length<=16){
		var string = $("#rightBottom").html();
		
		$("#rightTop").html(string);

		string = string.replace("x","*");

		var result = Math.round(eval(string)*10000)/10000;
		console.log(result);

		$("#rightBottom").html(result);

		}else{
			$("#rightBottom").html("Limit Exceed");
		}
		
	});
});