$('.menu').show();

$('#hamburger').click(function(){
  $('.menu').slideToggle();
});
$('.dropdown').click(function(){
  console.log(this.id);
  $(this.id).slideToggle()
})
