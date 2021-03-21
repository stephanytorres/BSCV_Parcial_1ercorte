// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){

    // Activación de transición del menú principal y del menú móvil
    $('header article nav a, aside#menu-moviles nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });

    // Funciones de Abrir y Cerrar el Menú responsive 
    $('a#abrir-menu').click(function(){
        $('aside#menu-moviles').animate({
            right: 0
        },500,'easeOutExpo'); 

        $('a#abrir-menu').hide();
        $('a#cerrar-menu').show();
        
        event.preventDefault();
    }); 

    $('a#cerrar-menu, aside#menu-moviles nav a').click(function(){
         $('aside#menu-moviles').animate({
            right: -290
        },1000,'easeOutElastic');

        $('a#abrir-menu').show();
        $('a#cerrar-menu').hide();

        event.preventDefault();
    }); 

    /* Función Menú Sticky */
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            // Cuando se baja el Scroll
            $('header').removeClass('no-sticky');
            $('header').addClass('sticky');

            $('main').removeClass('margin-800');
            $('main').addClass('margin-400');
            
        } else {
            // Cuando vuelve el Scroll a su valor inicial
            $('header').removeClass('sticky');
            $('header').addClass('no-sticky');

            $('main').removeClass('margin-400');
            $('main').addClass('margin-800');
        }
    }); 

});