(function(){$(window).scroll(function(){$(".navbar").offset()&&$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}),$(function(){$(".page-scroll a").bind("click",function(a){var o;o=$(this),$("html, body").stop().animate({scrollTop:$(o.attr("href")).offset().top},500,"easeInOutExpo"),a.preventDefault()})})}).call(this);