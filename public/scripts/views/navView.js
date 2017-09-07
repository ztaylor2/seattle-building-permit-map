$('.menu').show();

$('#hamburger').click(function(){
  $('.menu').slideToggle();
});

$('.dropdown-content').click(function(){
  console.log(this);
  $('.marker_+this.id').slideToggle();
});
