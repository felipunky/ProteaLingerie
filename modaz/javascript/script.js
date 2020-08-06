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

    
    if( $().isotope ) {

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

    }

});

//     var flatIsotope = function() {
//         if($().isotope) {

//             var $container = $('.isotope-product');
//             $(window).load( function() {
//                 $container.imagesLoaded(function(){
//                     $container.isotope({
//                         itemSelector: '.product-item',
//                         transitionDuration: '1s',
//                         layoutMode: 'fitRows'
//                     });
//                 });
//             });

//             /*$container.imagesLoaded().progress( function() {
//                 $container.isotope( 'layout' );
//             });*/

//            /* var $items = $( '.product-item' );
//             $container.imagesLoaded( function() {
//                 $container.append( $items ).isotope( 'appended', $items );
//                 $container.isotope( 'layout' );
//             }, 200);
// */
//             $('.flat-filter li').on('click',function() {                           
//                 var selector = $(this).find("a").attr('data-filter');
//                 $('.flat-filter li').removeClass('active');
//                 $(this).addClass('active');
//                 $container.isotope({ filter: selector });             
//                 return false;
//             });
//         };
//     }; 