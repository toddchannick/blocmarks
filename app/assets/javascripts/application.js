// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require angular
//= require angular-animate
//= require angular-resource
//= require angular-route
//= require angular-embedly
//= require angular-masonry
//= require modernizr
//= require masonry/jquery.masonry
//= require masonry/jquery.event-drag
//= require masonry/jquery.imagesloaded.min
//= require masonry/jquery.infinitescroll.min
//= require masonry/modernizr-transitions
//= require isotope/jquery.isotope
//= require main
//= require_self

$(document).ready(function(){
  if(window.location.pathname == '/') {
    $("#nav li:first-child").attr("class","active");
  }
  else if($("#nav li a").attr("href")==window.location.href){
    $("#nav li").attr("class","active");
  }
  else{
    $("#nav li").attr("class","inactive");
  }


  $('#categories li a').on('click', function () {
    $(this).parent().removeClass('cat-active');
    $(this).parent().addClass('cat-active');
  });
});


$(document).ready(function() {

  // $(".spinner").hide();
  // // show spinner on AJAX start
  // $(document).ajaxStart(function(){
  //   $(".spinner").show();
  // });
  // // hide spinner on AJAX stop
  // $(document).ajaxStop(function(){
  //   $(".spinner").hide();
  // });

  $('#nav li a').click(function() {
     $('#nav li').removeClass();
     $($(this).attr('href')).addClass('active');
  });


// $(function(){
//   $('#masonry-container').imagesLoaded(function(){
//     $('#masonry-container').masonry({
//       itemSelector: '.box',
//       columnWidth: 150,
//       isFitWidth: true,
//       isAnimated: !Modernizr.csstransitions
//     });
//   });
// });

//   var $container = $('.masonry-container');
//
//   // $container.isotope({
//   //   itemSelector: '.grid-item',
//   //   masonry: {
//   //     columnWidth: 100
//   //   }
//   // });
//
//     $container.masonry({
//       itemSelector: '.box',
//       columnWidth: 150,
//       isAnimated: !Modernizr.csstransitions
//     });
//
//   });

//   $container.infinitescroll({
//     navSelector  : '#page-nav',    // selector for the paged navigation
//     nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
//     itemSelector : '.box',     // selector for all items you'll retrieve
//     loading: {
//         finishedMsg: 'No more pages to load.',
//         img: 'http://i.imgur.com/6RMhx.gif'
//       }
//     },
//     // trigger Masonry as a callback
//     function( newElements ) {
//       // hide new items while they are loading
//       var $newElems = $( newElements ).css({ opacity: 0 });
//       // ensure that images load before adding to masonry layout
//       $newElems.imagesLoaded(function(){
//         // show elems now they're ready
//         $newElems.animate({ opacity: 1 });
//         $container.masonry( 'appended', $newElems, true );
//       });
//     }
//   );
// });
//
//
//
//
// // $(document).ready(function() {
// //   return $('.masonry-container').imagesLoaded(function() {
// //     return $('.masonry-container').masonry({
// //       itemSelector: '.box ',
// //       columnWidth: function(containerWidth) {
// //         if ($(window).width() >= 992) {
// //           return containerWidth / 3;
// //         }
// //       }
// //     });
// //   });
// // });
//
