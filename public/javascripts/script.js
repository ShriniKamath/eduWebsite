/*

My Custom JS
============

Author:  Shrinivas Kamath
Updated: Jan 2016

*/
//Used on the both the page for the login button
$(function(){
  $('#joinMe').click(function(e){
    e.preventDefault();
    $('#successAlert').slideDown();
  });

  $('#successAlertx').click(function(e){
    e.preventDefault();
    $('#successAlert').slideUp();
  });

//Used on the page services for the Book_Now button
  $('[rel="tooltip"]').tooltip();

  $('#facebookid').click(function() {
$('#successAlert').hide();
});
 $(window).scroll(function () {
    var scrool=$(window).scrollTop();
    if(scrool>=600){
$('#navbar').addClass("scroll-nav")
    }else{
      $('#navbar').removeClass("scroll-nav")

    }
   
  });


});

