$(document).ready(function(){
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  $('.slider').slider();
  $('.collapsible').collapsible('open', 0);

  let transform = 0;
  let timer = setInterval(function() {
    transform++;
    $('.react-js').css("transform", `rotate(${transform}deg)`);
  }, 100);

  var options = [
    {selector: '#staggered-test', offset: 205, callback: function(el) { Materialize.toast("Just below will be pizza :)", 3000 ); } }
  ];
  Materialize.scrollFire(options);
});
