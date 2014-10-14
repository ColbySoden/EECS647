$(window).scroll(function() {
    $elem = $('.hidden:first');
    var imagePos = $elem.offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 600) {
        var animationClass = animations[i % 2 == 0 ? 1 : 0];
        $elem.removeClass("hidden")
	    .addClass(animationClass);
        i++;
    }
});

var animations = ['animated', 'animated-right'];
var i = 0;

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
		$('html,body').animate({
		    scrollTop: target.offset().top
		}, 1000);
		return false;
	    }
	}
    });
});

function SHSignUp(button) {
    $(".signUpHdn").toggle(500);
    $(".buttonToggle").toggle();
    if ($("#signUpSubmit").is(":visible")) {
    	button.value = "Sign In";
    }
    else {
	button.value = "Sign Up";
    }
}
