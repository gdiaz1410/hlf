$("#brand").click(function(e) {
 e.preventDefault();
 $('html, body').animate({
   scrollTop: $(".header").offset().top
 }, 600);
});

$("#schedule").click(function(e) {
 e.preventDefault();
 $('html, body').animate({
   scrollTop: $(".scheduleSection").offset().top
 }, 600);
});

$("#trainers").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".aboutSection").offset().top
  }, 600);
});

$("#results").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".resultsSection").offset().top
  }, 600);
});

$("#contact").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $("#footer").offset().top
  }, 600);
});

$("#schedules").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(".scheduleSection").offset().top
  }, 600);
});
