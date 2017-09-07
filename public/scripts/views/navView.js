'use strict';
 // With help of Stack Overflow
$(document).ready(function(){
  var menu = $('.menu');
  $('#hamburger').on('click', function(){
    menu.slideToggle();
  });
  $(window).resize(function(){
    var width = $(window).width();
    if (width > 799 && menu.is(':hidden')){
      menu.removeAttr('style');
    }
  });
});
