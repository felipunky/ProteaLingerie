var $container = $('.isotope-product');

var Success = function () {

    $container.imagesLoaded(function(){
        $container.isotope({
            itemSelector: '.product-item',
            transitionDuration: '1s',
            layoutMode: 'fitRows'
        });
    });

}

$(document).ready( function () {

    var hasItLoaded = document.querySelector( '#iterate' );

    hasItLoaded.addEventListener( 'load', function() {

        Success();

    });

    $('.flat-filter li').on('click',function() {                           
        var selector = $(this).find("a").attr('data-filter');
        $('.flat-filter li').removeClass('active');
        $(this).addClass('active');
        $container.isotope({ filter: selector });             
        return false;
    });

});

