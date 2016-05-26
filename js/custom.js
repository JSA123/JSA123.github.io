$(function()
{

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

$('#button1').click(function(){
	button1.style.display = 'none';
    $('#entryForm').slideToggle(2000);
    $("#button1").delay(2000).fadeOut(150);
})

});