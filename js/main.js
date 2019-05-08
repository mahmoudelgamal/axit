// JavaScript Document
$(function (){
	'use strict'
	$(window).scroll(function(){
		var navbar= $('.navbar')
		if($(window).scrollTop()>= navbar.height()){
			navbar.addClass('scrolled');
			}else{
				navbar.removeClass('scrolled');
			}
		
		
		});
		
	$('#myTabs div').click(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var myId = $(this).attr('id');
		$('.myContent div').hide();
		$('#' + myId + '-content').fadeIn(1000)
		console.log($('#' + myId + '-content'))
		});
// start form aanimation		
		(function animateImage(){
		

	$(".animate img").animate({
		bottom:'110px',
		},1000,function(){
			$(this).animate({
				bottom:'-20px'
				},1000,function(){
					animateImage();
					});
			});
}());
$(".animate").on("click",function(){
	$(this).fadeOut(500,function(){
		$("form").animate({
			display:'block',
			},function(){
				$("form").animate({
			top:'0px'
					},1000)
				})
		});
	})





//start text area counter
var ourMassege = $('.massege'),
    maxText = $('textarea').attr('maxlength');
	$('textarea').keyup(function(){
		var texetLength = $('textarea').val().length;
		 var   remChars = maxText - texetLength;
	ourMassege.html('<span>' + remChars +' characters remaining </span>');
	$('.massege span').css({
		
		color:'#FF8B38',
		opacity:'.8'
		})
		})


});
