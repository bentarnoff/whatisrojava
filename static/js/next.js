var main = function(){
	$('html').removeClass('js');
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
		$('#main').hide("slide", {direction: "left"}, 500);
		$('#cbcontainer').show(1200);
	});
}

$(document).ready(main)