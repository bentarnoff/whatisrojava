var main = function(){
	$('#hed').hide();
	$('#subhed').hide();
	$('#nextcols').hide();
	$('#contactarea').hide();
	$('#cbcontainer').hide();
	$('#hed').fadeIn(500, function(){
		$('#subhed').fadeIn(1000);
		$('#nextcols').fadeIn(1500);
		$('#contactarea').fadeIn(1500);
	});
	$("#contactbtn").click(function(){
		$('#main').hide("slide", {direction: "left"}, 1000);
		$('#cbcontainer').show();
	});
}

$(document).ready(main)