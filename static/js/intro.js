var main = function(){
        var stickyRibbonTop = $('#stickyhed').offset().top;

        $('#stickyhed').hide();
        $('#stickysubhed').hide();
		$('#stickydescript').hide();
		$('#mainslide').hide();
          
        $(window).scroll(function(){
        		if ($(this).scrollTop() > 1700) {
                	    $('#stickyhed').hide();
                        $('#stickysubhed').hide();
                        $('#stickydescript').fadeIn(300);
                        $('#stickydescript').css({position: 'fixed', top: '0px'});
                } else if( $(this).scrollTop() > stickyRibbonTop ) {
                		$('#stickyhed').show();
                		$('#stickysubhed').show();
                		$('#stickydescript').hide();
                        $('#stickyhed').css({position: 'fixed', top: '0px', width:'50%'});
                        $('#stickysubhed').css({position: 'fixed', bottom: '0px'});
                } else {
                        $('#stickyhed').hide();
                        $('#stickysubhed').hide();
                        $('#stickydescript').hide();
                }
        });


}
$(document).ready(main)