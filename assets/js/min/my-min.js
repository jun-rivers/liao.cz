$(function(){function a(){var a=$(window).scrollTop(),t=$(window).scrollLeft();$(".spatial").each(function(o,r){var n=0-a/$(r).data("depth"),s=0-t/$(r).data("depth");$(r).css("margin-top",n+"px"),$(r).css("margin-left",s+"px")}),$(".spinning").each(function(t,o){var r=a/6+$(o).data("rotation");$(o).css({"-webkit-transform":"rotate("+r+"deg)","-moz-transform":"rotate("+r+"deg)","-ms-transform":"rotate("+r+"deg)",transform:"rotate("+r+"deg)"})})}function t(a,t){var o=$(t);o.hasClass("year")?(o.css("left",Math.floor(Math.random()/12*90+5)+"%"),o.css("top",Math.floor(Math.random()/31*300+10)+"%")):o.hasClass("day")&&(o.css("left",Math.floor(Math.random()/24*90+5)+"%"),o.css("top",Math.floor(Math.random()/60*300+10)+"%"))}$(window).scroll(function(){a()}),$(".planet").each(t)});