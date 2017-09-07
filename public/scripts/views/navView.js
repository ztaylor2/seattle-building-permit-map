<<<<<<< HEAD
$('.menu').show();

$('#hamburger').click(function(){
  $('.menu').slideToggle();
});
$('.dropdown').click(function(){
  console.log(this.id);
  $(this.id).slideToggle()
})
=======
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
>>>>>>> bca9c5641057577f7be2aa079737864d0dad62ec
