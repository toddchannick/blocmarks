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
//= require modernizr
//= require masonry/jquery.masonry
//= require masonry/jquery.event-drag
//= require masonry/jquery.imagesloaded.min
//= require masonry/jquery.infinitescroll.min
//= require masonry/modernizr-transitions
//= require isotope/jquery.isotope
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .


// $(document).ready(function() {
//   $('#nav li a').click(function() {
//      $('#nav li').removeClass();
//      $($(this).attr('href')).addClass('active');
//   });
// });

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


  // $('#categories li a').on('click', function () {
  //   $(this).parent().removeClass('cat-active');
  //   $(this).parent().addClass('cat-active');
  // });

});

$(function() {
  return $('.masonry-container').imagesLoaded(function() {
    return $('.masonry-container').masonry({
      itemSelector: '.box ',
      columnWidth: function(containerWidth) {
        if ($(window).width() >= 992) {
          return containerWidth / 3;
        }
      }
    });
  });
});
