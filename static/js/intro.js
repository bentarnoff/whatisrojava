var main = function(){
        $('html').removeClass('js');
        var stickyRibbonTop = $('#stickyhed').offset().top;
        var mapTop = $('#map').offset().bottom;
        $('#stickyhed').hide();
        $('#stickysubhed').hide();
        $('#stickydescript').hide();
        $('#mainslide').hide();
          
        $(window).scroll(function(){
                if ($(this).scrollTop() > 1600) {
                        $('#stickyhed').hide();
                        $('#stickysubhed').hide();
                        $('#sticky').css({position: 'fixed', top: '0px'});
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