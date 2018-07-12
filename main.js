$(document).ready(function(e) {
  $('#login-button').on("click", function() {
    //loadNewPage();
    invalidLogin();
    /*$('#login-head').slideUp('slow');
    $('#login-head').promise().done(function() {
      $('.input-div').fadeOut();
    });*/

  });
  function loadNewPage() {
   setInterval(function() {
      $('#login-button').animate({"padding": '+=3'}, 'slow');
      $('#login-button').animate({"padding": '-=3'}, 'slow');
    }, 1000);
  }

  function invalidLogin(){
    $('.center').animate({"left": '-=70'}, 100);
    $('.center').animate({"left": '+=140'}, 100);
    $('.center').animate({"left": '-=70'}, 100);

  }
});
