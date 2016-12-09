// $('a[href*="#"]:not([href="#"])').click(function() {
//   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//     if (target.length) {
//       $('html, body').animate({
//         scrollTop: target.offset().top
//       }, 1000);
//       return false;
//     }
//   }
// });

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

 $("#brand").click(function(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $("header").offset().top
  }, 600);
 });






// function myMap() {
//   var mapCanvas = document.getElementById("map");
//   var mapOptions = {
//     center: new google.maps.LatLng(30.4, -97.6),
//     zoom: 8
//   }
//   var map = new google.maps.Map(mapCanvas, mapOptions);
// }
