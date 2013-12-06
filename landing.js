$(document).ready(function() {


$(window).load(function(){
});
// Start off Screen 
$('#facebook').animate({marginLeft: -1000, marginRight:0});
// End
// Start Bounce into position
$('#facebook').animate({marginLeft: "40%", marginRight:0});
// End
// Start off Screen
$('#twitter').animate({marginLeft: 0, marginRight:-1000});
// End
// Start Bounce into position
$('#twitter').animate({marginLeft: 0, marginRight:"40%"});
// End bounce
$('#facebook').animate({marginLeft: 500, marginRight:0});
$('#twitter').animate({marginLeft: 0, marginRight:500});
$("#facebook").hover(function(){
$(this).animate({marginLeft: 450, marginRight: 0});
}, function(){
$(this).animate({marginLeft: 500, marginRight: 0});
});

$("#twitter").hover(function(){
$(this).animate({marginLeft: 0, marginRight: 450});
}, function(){
$(this).animate({marginLeft: 0, marginRight: 500});
});
});