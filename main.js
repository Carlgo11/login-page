$(document).ready(function(e) {
  $('#login-button').click(function() {
    sendLogin();
    return false;
  });

  $('#login-body').submit(function() {
    sendLogin();
    return false;
  });
  /**
   *
   *
   */
  function loadNewPage() {
    /*
    setInterval(function() {
       $('#login-button').animate({"padding": '+=3'}, 'slow');
       $('#login-button').animate({"padding": '-=3'}, 'slow');
    }, 1000);
     */
    $('#login-head').slideUp('slow');
    $('#login-head').promise().done(function() {
      $('.input-div').fadeOut();
    });
  }

  function invalidLogin() {
    $('.center').animate({
      "left": '-=70'
    }, 100);
    $('.center').animate({
      "left": '+=140'
    }, 100);
    $('.center').animate({
      "left": '-=70'
    }, 100);
  }

  function sendLogin() {
    $.ajax({
      type: "POST",
      url: 'login.php',
      data: {
        username: $("#username").val(),
        password: $("#password").val()
      },
      success: function(data) {
        if (data === 'true') {
          loadNewPage(); //valid login.
        } else {
          invalidLogin(); //invalid login.
        }
      }
    });

  }
});
