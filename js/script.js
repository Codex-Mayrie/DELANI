$(document).ready(function() {
  $("#designImage").click(function() {
    $("#designdesc").show(1500);
    $("#designImage").hide(1500);
  });
  $("#designdesc").click(function() {
    $("#designImage").show(1500);
    $("#designdesc").hide(1500);
  });
  $("#developmentImage").click(function() {
    $("#developmentdesc").show(1200);
    $("#developmentImage").hide(1200);
  });
  $("#developmentdesc").click(function() {
    $("#developmentImage").show(1200);
    $("#developmentdesc").hide(1200);
  });
  $("#productImage").click(function() {
    $("#productdesc").show(2500);
    $("#productImage").hide("slow");
  });
  $("#productdesc").click(function() {
    $("#productImage").show(2500);
    $("#productdesc").hide("slow");
  });
});

 //portfolio
 $('#work1').mouseenter(function () {
  $('.work-heading').filter('#work1-title').show("slow");
}).mouseleave(function () {
  $('#work1-title').hide("slow");
});


$('#work2').mouseenter(function () {
  $('.work-heading').filter('#work2-title').show("slow");
}).mouseleave(function () {
  $('#work2-title').hide("slow");
});

$('#work3').mouseenter(function () {
  $('.work-heading').filter('#work3-title').show("slow");
}).mouseleave(function () {
  $('#work3-title').hide("slow");
});


$('#work4').mouseenter(function () {
  $('.work-heading').filter('#work4-title').show("slow");
}).mouseleave(function () {
  $('#work4-title').hide("slow");
});

$('#work5').mouseenter(function () {
  $('.work-heading').filter('#work5-title').show("slow");
}).mouseleave(function () {
  $('#work5-title').hide("slow");
});


$('#work6').mouseenter(function () {
  $('.work-heading').filter('#work6-title').show("slow");
}).mouseleave(function () {
  $('#work6-title').hide("slow");
});

$('#work7').mouseenter(function () {
  $('.work-heading').filter('#work7-title').show("slow");
}).mouseleave(function () {
  $('#work7-title').hide("slow");
});
$('#work8').mouseenter(function(){
$('.work-heading').filter('#work8-title').show("slow");
}).mouseleave(function(){
$('#work8-title').hide("slow");
});