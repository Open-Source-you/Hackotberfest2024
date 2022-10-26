$(document).ready(function () {
    
    AOS.init();
    
    $('#slide-toggle').click(function(){
        $('.overlay').fadeToggle(50);
        
        $('#menu-slider').toggleClass('hide');
        $('#main-warapper').toggleClass('left');
        
        $('body').toggleClass('no-scroll');
    });  
    
    $('.overlay').click(function () {
        $(this).fadeToggle(50);
    
        $('#menu-slider').toggleClass('hide');
        $('#main-warapper').toggleClass('left');
        
        $('body').toggleClass('no-scroll');
    });
});
